import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule , Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CharactersComponent } from './characters/characters.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    CharactersComponent,
    BooksComponent,
    HousesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'characters', component:CharactersComponent},
      {path:'books', component:BooksComponent},
      {path:'houses', component:HousesComponent},
      {path:'view/:url', component:ViewComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**',component:NotFoundComponent}  
      
    ]),
    HttpClientModule,
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
