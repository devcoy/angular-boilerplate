import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './data-access/data-access.module';
import { ProductItemComponent } from './module/stocktaking/component/product-item/product-item.component';

@NgModule({
	declarations: [AppComponent, ProductItemComponent],
	imports: [BrowserModule, AppRoutingModule, DataAccessModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
