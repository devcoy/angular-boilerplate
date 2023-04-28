import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingletonSecureStorageService } from '@libs/web-storage/singleton-secure-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './data-access/data-access.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, DataAccessModule],
	providers: [
		SingletonSecureStorageService,
		{
			provide: APP_INITIALIZER,
			// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
			useFactory: (singleton: SingletonSecureStorageService) => () =>
				singleton.init(),
			deps: [SingletonSecureStorageService],
			multi: true
		}
	],
	bootstrap: [AppComponent],
	exports: []
})
export class AppModule {}
