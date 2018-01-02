import {NgModule} from '@angular/core';
import * as fromServices from './services';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import {TodosRoutingModule} from '@app/todos/todos-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {effects, reducers} from '@app/todos/store';
import {TodosFormComponent} from './components/todos-form/todos-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';

@NgModule({
	imports: [
		TodosRoutingModule,
		SharedModule,
		StoreModule.forFeature('todos', reducers),
		EffectsModule.forFeature(effects),
		ReactiveFormsModule
	],
	declarations: [...fromContainers.containers, ...fromComponents.components, TodosFormComponent],
	providers: [...fromServices.services],
	exports: [...fromContainers.containers, ...fromComponents.components]
})
export class TodosModule {
}
