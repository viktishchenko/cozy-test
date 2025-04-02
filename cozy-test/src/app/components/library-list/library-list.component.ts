import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { LibraryDetailsComponent } from '../library-details/library-details.component';
import { CyrillicInputDirective } from '../../utilites/cyrillic-input.directive';

@Component({
  selector: 'app-library-list',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    LibraryDetailsComponent,
    CyrillicInputDirective,
    NgStyle,
  ],
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss'],
  providers: [LibraryService],
})
export class LibraryListComponent implements OnInit {
  loadImg = true;
  imageUrl =
    'https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg';
  searchTerm: string = '';
  libraries: any;
  selectedLibrary: any = null;
  isLoading: boolean = false;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loadImg = false;
    }, 2000);
  }

  onLoad() {
    setTimeout(() => {
      this.loadImg = false;
    }, 2000);
  }

  onError() {
    this.loadImg = false;
    this.imageUrl = './tmp/No_Cover.jpg';
  }

  searchLibraries() {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.libraryService.getLibraries(this.searchTerm).subscribe(
      (data) => {
        this.libraries = data;
        console.log('data :>> ', data);
        console.log('this.libraries :>> ', this.libraries[0].Cells.FullName);
        console.log('this.libraries :>> ', this.libraries[0]);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching libraries:', error);
        this.isLoading = false;
      }
    );
  }

  highlightSearchTerm(text: string): string {
    if (!this.searchTerm.trim() || !text) return text;

    const regex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  showLibraryDetails(library: any) {
    this.selectedLibrary = library;
  }
}
