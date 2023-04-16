import { MangaPanelService, Manga } from './../manga-panel.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.scss']
})
export class AddMangaComponent {

  previewImage = "";

  constructor(private fb: FormBuilder, private mangaPanelService: MangaPanelService) { };

  ngOnInit(): void { };

  addedPanel = this.fb.group({

    title: ["", Validators.required],

    chapter: ["", Validators.required],

    image: ["", Validators.required],

  });

  onSubmit() {

    // Check if the form is valid
    if (this.addedPanel.valid) {

      // Get the form values

      /*  
        By using the optional chaining operator (?.), 
        you can safely access the value property of the form controls even if they are null, 
        without triggering the "Object is possibly 'null'" error.
      */

      /*
        By using the nullish coalescing operator (??), 
        you can provide a default value (in this case, an empty string '') 
        for the form control values if they are null or undefined, 
        which should resolve the error when adding the form values to the panels array.
      */

      const manga: Manga = {
        title: this.addedPanel.get('title')?.value ?? "",
        chapter: this.addedPanel.get('chapter')?.value ?? "",
        image: this.addedPanel.get('image')?.value ?? ""
      };

      this.mangaPanelService.addToPanelsArray(manga);

      window.alert('Your panel has been added!');

      // Reset the form
      this.addedPanel.reset();

    } else {

      // If the form is invalid, mark all form controls as touched to display validation errors
      this.addedPanel.markAllAsTouched();
    }
  }

  onInputChange(event: any) {
    // Get the input value
    let inputValue = event.target.value;

    // Use a regular expression to match and remove any non-numeric characters
    let numericValue = inputValue.replace(/[^0-9]/g, '');

    // Set the input value to the numeric value
    event.target.value = numericValue;
  }

}
