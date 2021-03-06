import {Injectable} from "@angular/core";

import {Actions, Effect} from "@ngrx/effects";
import {of} from "rxjs/observable/of";
import {catchError, map, switchMap} from "rxjs/operators";

import * as todosActions from "../actions/todos.action";
import * as fromServices from "../../services";
import {Todo} from "@app/todos/models/todo.model";

@Injectable()
export class TodosEffects {
	constructor(private actions$: Actions,
				private todosService: fromServices.TodosService) {
	}

	@Effect()
	loadTodos$ = this.actions$.ofType(todosActions.LOAD_TODOS).pipe(
			switchMap(() => {
				return this.todosService
						.getTodos()
						.pipe(
								map(todos => new todosActions.LoadTodosSuccess(todos as Todo[])),
								catchError(error => of(new todosActions.LoadTodosFail(error)))
						);
			})
	);
}
