import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// containers
import * as fromContainers from "./containers";

const routes: Routes = [
	{path: "", component: fromContainers.TodosListComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TodosRoutingModule {
}
