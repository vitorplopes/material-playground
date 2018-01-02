import {Action} from '@ngrx/store';

import {Todo} from '../../models/todo.model';

// load todos
export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';
export const CREATE_TODO = '[Todos] Create Todo';
export const CREATE_TODO_FAIL = '[Todos] Create Todo Fail';
export const CREATE_TODO_SUCCESS = '[Todos] Create Todo Success';

export class LoadTodos implements Action {
	readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
	readonly type = LOAD_TODOS_FAIL;

	constructor(public payload: any) {
	}
}

export class LoadTodosSuccess implements Action {
	readonly type = LOAD_TODOS_SUCCESS;

	constructor(public payload: Todo[]) {
	}
}

export class CreateTodo implements Action {
	readonly type = CREATE_TODO;

	constructor(public payload: Todo) {
	}
}

export class CreateTodoFail implements Action {
	readonly type = CREATE_TODO_FAIL;

	constructor(public payload: any) {
	}
}

export class CreateTodoSuccess implements Action {
	readonly type = CREATE_TODO_SUCCESS;

	constructor(public payload: Todo) {
	}
}

// action types
export type TodosAction = LoadTodos | LoadTodosFail | LoadTodosSuccess | CreateTodo | CreateTodoFail | CreateTodoSuccess;
