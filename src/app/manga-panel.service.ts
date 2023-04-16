import { Injectable } from '@angular/core';



export interface Manga {
  title: string;
  chapter: string;
  image: string;
}



@Injectable({
  providedIn: 'root'
})
export class MangaPanelService {

  favoritePanels: Manga[] = [];
  panels: Manga[] = [

    {

      title: "Jujutsu Kaisen",
      chapter: "24",
      image: "../assets/home-assets/sun-ken-rock.jpg"

    },
    {

      title: "Sun Ken Rock",
      chapter: "32",
      image: "../assets/home-assets/sun-ken-rock.jpg"

    },
    {

      title: "Tokyo Ghoul",
      chapter: "23",
      image: "../assets/home-assets/tokyo-ghoul-1.jpg"

    }

  ];

  constructor() { }

  addToFavoriteArray(manga: Manga) {

    this.favoritePanels.push(manga);

  }

  getFavoritePanels() {

    return this.favoritePanels;

  }

  addToPanelsArray(manga: Manga): void {

    this.panels.push(manga);

  }

  getPanelsArray() {

    return this.panels;

  }

}
