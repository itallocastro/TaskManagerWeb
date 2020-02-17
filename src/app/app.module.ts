import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import { EditorTextComponent } from './editor-text/editor-text.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorTextComponent
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
