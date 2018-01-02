import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import * as fromTodos from "./todos.reducer";

export interface TodosState {
	todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<TodosState> = {
	todos: fromTodos.reducer
};

export const getTodosState = createFeatureSelector<TodosState>(
		"todos"
);
