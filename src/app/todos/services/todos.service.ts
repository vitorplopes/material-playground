import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '@app/todos/models/todo.model';

@Injectable()
export class TodosService {

	constructor() {
	}

	getTodos(): Observable<Todo[]> {
		return Observable.of([{id: 1, task: 'Sleep'}]);
	}

	createTodo(payload: Todo): Observable<Todo> {
		const todo = payload;
		return Observable.of({...todo, id: Math.floor((Math.random() * 1000) + 1)});
	}
}
