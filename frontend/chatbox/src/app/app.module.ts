import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioEditComponent } from './resources/usuario/usuario-edit/usuario-edit.component';
import { UsuarioLoginComponent } from './resources/usuario/usuario-login/usuario-login.component';
import { FormsModule }   from '@angular/forms';
import { CategoriaEditComponent } from './resources/categoria/categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './resources/categoria/categoria-list/categoria-list.component';
import { HomePage } from './home/home.page';
import { JwtInterceptorService } from './shared/JWT/jwt-interceptor.service';
import { SalaListComponent } from './resources/sala/sala-list/sala-list.component';
import { SalaEditComponent } from './resources/sala/sala-edit/sala-edit.component';
import { ParticleComponent } from './particle/particle.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaEditComponent,
    CategoriaListComponent,
    UsuarioEditComponent,
    UsuarioLoginComponent,
    SalaListComponent,
    SalaEditComponent,
    HomePage,
    ParticleComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ParticlesModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}