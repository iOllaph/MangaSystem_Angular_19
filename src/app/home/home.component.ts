import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Properties must be at the top!

  image = "assets/home-assets/tokyo-ghoul-1.jpg";

  imageAnimation = false;



  constructor() { };

  ngOnInit(): void { }


  changeImage(position: number) {

    if (position == 1) {

      this.image = "assets/home-assets/tokyo-ghoul-1.jpg";


    } else if (position == 2) {

      this.image = "assets/home-assets/tokyo-ghoul-2.jpg";


    } else if (position == 3) {

      this.image = "assets/home-assets/sun-ken-rock.jpg";

    } else if (position == 4) {

      this.image = "assets/home-assets/tokyo-ghoul-3.jpg";

    } else if (position == 5) {

      this.image = "assets/home-assets/one-punch-man-2.jpg";

    } else if (position == 6) {

      this.image = "assets/home-assets/jujustsu-kaisen.jpg";

    }


  }



}
