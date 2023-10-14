import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const material = [
	MatFormFieldModule,
	MatInputModule,
	FormsModule,
	NgIf,
	MatButtonModule,
	MatIconModule
];

@NgModule({
	exports: [material],
	imports: [material]
})
export class MaterialModule {}
