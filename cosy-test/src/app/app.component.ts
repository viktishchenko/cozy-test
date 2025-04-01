import { Component } from '@angular/core';
import { LibraryComponent } from './components/library/library.component';

@Component({
  selector: 'app-root',
  imports: [LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comfy test';

  capitalizeFirstLetter(str: string) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  }
}
