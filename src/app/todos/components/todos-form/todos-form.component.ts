import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '@app/todos/models/todo.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-todos-form',
	templateUrl: './todos-form.component.html',
	styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

	@Output() create = new EventEmitter<Todo>();

	form = this.fb.group({
		task: ['']
	});

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
	}

	createTodo(form: FormGroup) {
		const {value, valid} = form;
		if (valid) {
			this.create.emit(value);
		}
	}

}
