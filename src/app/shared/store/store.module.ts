import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {development: true, production: false};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forRoot({}, {metaReducers}),
		EffectsModule.forRoot([]),
		environment.development ? StoreDevtoolsModule.instrument() : []
	],
	declarations: []
})
export class RxStoreModule {
}
