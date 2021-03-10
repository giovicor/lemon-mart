import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { authFactory } from './auth/auth.factory'
import { AuthHttpInterceptor } from './auth/auth.http.interceptor'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import { HomeComponent } from './home/home.component'
// import { HomeComponent } from './home/home.component.simple'
import { LoginComponent } from './login/login.component'
import { MaterialModule } from './material.module'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: AuthService,
      useFactory: authFactory,
      deps: [AngularFireAuth],
      // useClass: FirebaseAuthService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // Since 9.0.0. With Ivy, this property is no longer necessary.
  // entryComponents: [SimpleDialogComponent],
})
export class AppModule {}
