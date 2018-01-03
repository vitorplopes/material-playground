import {NgModule} from '@angular/core';
import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {HomeComponent} from '@app/core/pages/home/home.component';
import {SharedModule} from '@shared/shared.module';
import {RxStoreModule} from '@app/core/store/store.module';

@NgModule({
	imports: [
		CoreRoutingModule,
		SharedModule,
		RxStoreModule
	],
	declarations: [HomeComponent, LayoutComponent]
})
export class CoreModule {
}
