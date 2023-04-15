import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { FavoriteMangaComponent } from './favorite-manga/favorite-manga.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaListComponent,
    AddMangaComponent,
    FavoriteMangaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
