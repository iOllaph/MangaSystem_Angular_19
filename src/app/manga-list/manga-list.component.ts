import { Component } from '@angular/core';
import { MangaPanelService, Manga } from './../manga-panel.service';



@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent {

  disableButton = false;

  favoritePanels: Manga[] = [];

  removedPanels: Manga[] = [];

  mangaListPanels: Manga[] = [];

  servicePanels: Manga[] = [];

  existingPanels: Manga[] = [];

  constructor(private mangaPanelService: MangaPanelService) { }

  ngOnInit(): void {

    this.servicePanels = this.mangaPanelService.getPanelsArray();
    this.favoritePanels = this.mangaPanelService.getFavoritePanels();
    this.populateMangaListPanels();

  }

  checkPanels() {

    if (this.mangaListPanels.length > 0) {

      return "none";

    } else {

      return "flex";
    }

  }


  populateMangaListPanels(): void {

    this.mangaListPanels = this.existingPanels.concat(this.servicePanels);
  }

  checkIndexValue(index: number) {

    return Number.isInteger(index / 5);

  }

  removeMangaPanel(index: any) {

    if (index >= 0 && index < this.mangaListPanels.length) {

      // Remove from mangaListPanels array
      const removedManga = this.mangaListPanels.splice(index, 1)[0];

      // Find the manga panel in existingPanels array and remove it
      const existingPanelIndex = this.existingPanels.findIndex(panel => panel === removedManga);
      if (existingPanelIndex !== -1) {
        this.existingPanels.splice(existingPanelIndex, 1);
      }

      const servicePanelIndex = this.servicePanels.findIndex(panel => panel === removedManga);
      if (servicePanelIndex !== -1) {
        this.servicePanels.splice(servicePanelIndex, 1);
      }

      const favoritePanelsIndex = this.favoritePanels.findIndex(panel => panel === removedManga);
      if (favoritePanelsIndex !== -1) {
        this.favoritePanels.splice(favoritePanelsIndex, 1);
      }

    }

  }

  addFavoriteMangaPanel(manga: any) {

    this.mangaPanelService.addToFavoriteArray(manga);

  }

  isFavorite(manga: Manga): boolean {

    return this.favoritePanels.includes(manga);
  }

}
