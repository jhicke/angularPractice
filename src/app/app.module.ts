import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { AppSiteHeaderComponent } from './app-site-header/app-site-header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import { MainCardComponent } from './main-card/main-card.component';
import { NewCardBtnComponent } from './new-card-btn/new-card-btn.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {CardService} from './services/card.service';
import { HomeComponent } from './home/home.component';
import { OtherViewComponent } from './other-view/other-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSiteHeaderComponent,
    MainCardComponent,
    NewCardBtnComponent,
    HomeComponent,
    OtherViewComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule, MatCheckboxModule,MatToolbarModule,
	MatMenuModule, MatCardModule, MatListModule,MatGridListModule,
	MatDividerModule, MatExpansionModule, AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
