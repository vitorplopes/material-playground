import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@shared/material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule, MaterialModule],
	exports: [CommonModule, FormsModule, MaterialModule]
})
export class SharedModule {
}
