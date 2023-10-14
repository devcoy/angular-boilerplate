import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [MatToolbarModule, MatButtonModule, MatInputModule];

@NgModule({
	exports: [material],
	imports: [material]
})
export class MaterialModule {}
