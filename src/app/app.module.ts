import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CordovaService} from "@app/cordova.service";

import {SplashScreen} from "@ionic-native/splash-screen";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {MetaReducer, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
// not used in production
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {storeFreeze} from "ngrx-store-freeze";

// this would be done dynamically with webpack for builds
const environment = {development: true, production: false};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {metaReducers}),
		EffectsModule.forRoot([]),
		environment.development ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		CordovaService,
		SplashScreen
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
