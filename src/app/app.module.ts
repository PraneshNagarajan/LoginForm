import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { RouteGuardService } from './route-guard.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminRouterGuardService } from './admin-router-guard.service';
import { MainService } from './main.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    AdminPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'user', component: UserPageComponent,canActivate: [RouteGuardService] },
      { path: 'admin', component: AdminPageComponent,canActivate: [RouteGuardService] },
      
    ])
  ],
  providers: [
    RouteGuardService,
    AdminRouterGuardService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
