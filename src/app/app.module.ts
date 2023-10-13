import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataAccessModule } from './api/data-access.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletonSecureStorageService } from './shared/web-storage/singleton-secure-storage.service';

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
