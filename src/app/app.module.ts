import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitOnlyDirective } from './digit-only.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DigitOnlyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
