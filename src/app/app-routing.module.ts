import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
	{
		path: "core",
		loadChildren: "app/core/core.module#CoreModule"
	},
	{
		path: "todos",
		loadChildren: "app/todos/todos.module#TodosModule"
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule {
}
