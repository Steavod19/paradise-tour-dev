import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatGridListModule, MatButtonModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LandingBodyComponent } from './component/landing-body/landing-body.component';
import { TourLandingComponent } from './component/tour-landing/tour-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingBodyComponent,
    TourLandingComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
