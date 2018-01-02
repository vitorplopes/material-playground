import {Component, OnInit} from '@angular/core';

import * as fromStore from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Todo} from '@app/todos/models/todo.model';

@Component({
	selector: 'app-todos-list',
	templateUrl: './todos-list.component.html',
	styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

	todos$: Observable<Todo[]>;

	constructor(private store: Store<fromStore.TodosState>) {
	}

	ngOnInit() {
		this.todos$ = this.store.select(fromStore.getAllTodos);
		this.store.dispatch(new fromStore.LoadTodos());
	}

	onCreate(event: Todo) {
		this.store.dispatch(new fromStore.CreateTodo(event));
	}
}
