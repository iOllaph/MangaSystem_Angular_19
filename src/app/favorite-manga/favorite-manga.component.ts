import { Component } from '@angular/core';
import { MangaPanelService, Manga } from './../manga-panel.service';

@Component({
  selector: 'app-favorite-manga',
  templateUrl: './favorite-manga.component.html',
  styleUrls: ['./favorite-manga.component.scss']
})
export class FavoriteMangaComponent {

  addedFavoritePanels: Manga[] = [];

  constructor(private mangaPanelService: MangaPanelService) { };

  ngOnInit(): void {

    this.addedFavoritePanels = this.mangaPanelService.getFavoritePanels();

  }

  checkPanels() {

    if (this.addedFavoritePanels.length > 0) {

      return "none";

    } else {

      return "flex";
    }

  }


  checkIndexValue(index: number) {

    return Number.isInteger(index / 5);

  }


  removeMangaPanel(index: any) {

    if (index >= 0 && index < this.addedFavoritePanels.length) {

      // Remove from mangaListPanels array
      this.addedFavoritePanels.splice(index, 1)[0];

    }
  }
}