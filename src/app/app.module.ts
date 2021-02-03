import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InMemoryAuthService } from './auth/auth.in-memory.service'
import { AuthService } from './auth/auth.service'
// import { HomeComponent } from './home/home.component'
import { HomeComponent } from './home/home.component.simple'
import { MaterialModule } from './material.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [{ provide: AuthService, useClass: InMemoryAuthService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
