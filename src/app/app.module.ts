import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingletonSecureStorageService } from '@libs/web-storage/singleton-secure-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './data-access/data-access.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, DataAccessModule],
	providers: [
		/**
		 * Override Web Storage (session and local) to encrypt data.
		 */
		{
			provide: APP_BOOTSTRAP_LISTENER,
			useFactory: (singleton: SingletonSecureStorageService) => (): void =>
				singleton.init(),
			deps: [SingletonSecureStorageService],
			multi: true
		}
	],
	bootstrap: [AppComponent],
	exports: []
})
export class AppModule {}
