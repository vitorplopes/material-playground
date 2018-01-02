import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: "app-todos-table",
	templateUrl: "./todos-table.component.html",
	styleUrls: ["./todos-table.component.scss"]
})
export class TodosTableComponent implements OnInit {

	@Input() todos: any[];

	constructor() {
	}

	ngOnInit() {
	}

}
