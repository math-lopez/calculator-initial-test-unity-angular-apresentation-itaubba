import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { InsertNumberCountComponent } from './components/insert-number-count/insert-number-count.component';
import { ActionDirective } from './shared/directives/action.directive';
import { FormsModule } from '@angular/forms';
import { ActionDirectiveModule } from './shared/directives/action.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewResultComponent,
    InsertNumberCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ActionDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
