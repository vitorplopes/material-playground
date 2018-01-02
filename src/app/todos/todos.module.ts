import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromServices from './services';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import {TodosRoutingModule} from '@app/todos/todos-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {effects, reducers} from '@app/todos/store';
import {TodosFormComponent} from './components/todos-form/todos-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TodosRoutingModule,
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
