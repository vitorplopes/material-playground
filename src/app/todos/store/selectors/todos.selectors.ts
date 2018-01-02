import {createSelector} from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromTodos from "../reducers/todos.reducer";

export const getTodoState = createSelector(
		fromFeature.getTodosState,
		(state: fromFeature.TodosState) => state.todos
);

export const getTodosEntities = createSelector(
		getTodoState,
		fromTodos.getTodosEntities
);

export const getAllTodos = createSelector(getTodosEntities, entities => {
	return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getTodosLoaded = createSelector(
		getTodoState,
		fromTodos.getTodosLoaded
);
export const getTodosLoading = createSelector(
		getTodoState,
		fromTodos.getTodosLoading
);
