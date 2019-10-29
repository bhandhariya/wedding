import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment.prod';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MessageComponent } from './message/message.component';
import { UploadComponent } from './upload/upload.component';


// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorage } from "@angular/fire/storage";

import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "angularfire2/storage";

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,HttpClientModule,FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
