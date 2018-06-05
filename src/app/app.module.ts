import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { SubmitRequestComponent } from './request/submit-request/submit-request.component';
import { SendToClientComponent } from './request/send-to-client/send-to-client.component';
import { ApproveRejectSolutionComponent } from './request/approve-reject-solution/approve-reject-solution.component';
import { UserComponent } from './user/user.component';
import { CanAccessDirective } from './directive/can-access.directive';
import { PermissionsService } from './services/permissions.service';


@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    SubmitRequestComponent,
    SendToClientComponent,
    ApproveRejectSolutionComponent,
    UserComponent,
    CanAccessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [CanAccessDirective],
  providers: [RequestService, UserService, PermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
