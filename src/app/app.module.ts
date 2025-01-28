import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollaboratorListComponent } from './components/collaborator-list/collaborator-list.component';
import { CollaboratorFormComponent } from './components/collaborator-form/collaborator-form.component';
import { CollaboratorDetailsComponent } from './components/collaborator-details/collaborator-details.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CollaboratorListComponent,
    CollaboratorFormComponent,
    CollaboratorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
