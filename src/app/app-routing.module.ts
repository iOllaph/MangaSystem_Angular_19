import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './manga-list/manga-list.component';
import { FavoriteMangaComponent } from './favorite-manga/favorite-manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "manga-list", component: MangaListComponent },
  { path: "favorite-manga", component: FavoriteMangaComponent },
  { path: "add-manga", component: AddMangaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
