import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MaterialModule} from '@shared/material/material.module';
import {RxStoreModule} from '@shared/store/store.module';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule, MaterialModule, RxStoreModule],
	exports: [CommonModule, FormsModule, MaterialModule, RxStoreModule]
})
export class SharedModule {
}
