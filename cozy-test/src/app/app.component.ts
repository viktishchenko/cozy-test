import { Component } from '@angular/core';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryService } from './services/library.service';

@Component({
  selector: 'app-root',
  imports: [LibraryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comfy test';

  capitalizeFirstLetter(str: string) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
  }
}
