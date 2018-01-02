import * as fromTodos from '../actions/todos.action';
import {Todo} from '@app/todos/models/todo.model';

export interface TodoState {
	entities: { [id: number]: Todo };
	loaded: boolean;
	loading: boolean;
}

export const initialState: TodoState = {
	entities: {},
	loaded: false,
	loading: false,
};

export function reducer(state = initialState,
						action: fromTodos.TodosAction): TodoState {
	switch (action.type) {
		case fromTodos.LOAD_TODOS: {
			return {
				...state,
				loading: true,
			};
		}

		case fromTodos.LOAD_TODOS_SUCCESS: {
			const todos = action.payload as Todo[];

			const entities = todos.reduce(
					(entitiess: { [id: number]: Todo }, todo: Todo) => {
						return {
							...entitiess,
							[todo.id]: todo,
						};
					},
					{
						...state.entities,
					}
			);

			return {
				...state,
				loading: false,
				loaded: true,
				entities,
			};
		}

		case fromTodos.LOAD_TODOS_FAIL: {
			return {
				...state,
				loading: false,
				loaded: false,
			};
		}

		case fromTodos.CREATE_TODO_SUCCESS: {
			const todo = action.payload as Todo;
			const entities = {
				...state.entities,
				[todo.id]: todo,
			};

			return {
				...state,
				entities,
			};
		}
	}

	return state;
}

export const getTodosEntities = (state: TodoState) => state.entities;
export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded = (state: TodoState) => state.loaded;
