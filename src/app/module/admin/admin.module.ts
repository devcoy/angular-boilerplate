import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
	declarations: [IndexComponent, DashboardComponent],
	imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
