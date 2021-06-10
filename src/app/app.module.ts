import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StarComponent} from './products/shared/star.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/prodocut-list.component';
import {FormsModule} from '@angular/forms'
import { ConvertToSpaces } from './products/convert-to-spaces.pipe';
import {HttpClientModule,} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
