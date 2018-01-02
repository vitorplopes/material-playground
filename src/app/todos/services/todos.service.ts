import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Todo} from "@app/todos/models/todo.model";

@Injectable()
export class TodosService {

	constructor() {
	}

	getTodos(): Observable<Todo[]> {
		return Observable.of([{id: 1, task: "Sleep"}]);
	}

}
