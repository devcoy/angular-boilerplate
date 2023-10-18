import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldModule
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const material = [
	MatFormFieldModule,
	MatInputModule,
	FormsModule,
	NgIf,
	MatButtonModule,
	MatIconModule,
	MatInputModule
];

@NgModule({
	exports: [material],
	imports: [material],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' }
		}
	]
})
export class MaterialModule {}
