import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ResumeComponent } from "./resume/resume.component";
import { CoachesListComponent } from "./coaches-list/coaches-list.component";
import { OneCoacheComponent } from "./one-coache/one-coache.component";
import { MotivationLetterComponent } from "./motivation-letter/motivation-letter.component";
import { NotificationComponent } from "./notification/notification.component";
import { NavbarUserComponent } from "./navbar-user/navbar-user.component";
import { AdminComponent } from "./admin/admin.component";
import { AddCoachComponent } from "./add-coach/add-coach.component";
import { ManegeUsersComponent } from "./manege-users/manege-users.component";
import { ManegeCoachesComponent } from "./manege-coaches/manege-coaches.component";
import { NavbarAdminComponent } from "./navbar-admin/navbar-admin.component";
import { CoacheHomeComponent } from "./coache-home/coache-home.component";
import { RequestsListComponent } from "./requests-list/requests-list.component";
import { CheckUserProfileComponent } from "./check-user-profile/check-user-profile.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { OneMlComponent } from "./one-ml/one-ml.component";
import { RequestArchieveComponent } from "./request-archieve/request-archieve.component";
import { AddUserDataComponent } from "./add-user-data/add-user-data.component";
import { DownloadResumeComponent } from "./download-resume/download-resume.component";
//////
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {HomeComponent} from './home/home.component'
import {MatBadgeModule} from '@angular/material/badge'
import { from } from "rxjs";
import { MatSliderModule } from '@angular/material/slider';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatSliderModule

  ],
  declarations: [
    AppComponent,
    ResumeComponent,
    CoachesListComponent,
    OneCoacheComponent,
    MotivationLetterComponent,
    NotificationComponent,
    NavbarUserComponent,
    HomeComponent,
    AdminComponent,
    AddCoachComponent,
    ManegeUsersComponent,
    ManegeCoachesComponent,
    NavbarAdminComponent,
    CoacheHomeComponent,
    RequestsListComponent,
    CheckUserProfileComponent,
    FeedbackComponent,
    OneMlComponent,
    RequestArchieveComponent,
    AddUserDataComponent,
    DownloadResumeComponent,
    ProfileComponent,
  ],
 

  providers: [],
  bootstrap: [AppComponent],   

})
export class AppModule {}
