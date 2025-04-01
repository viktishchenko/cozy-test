import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface LibInterface {
  name: string;
  address: string;
}

@Component({
  selector: 'app-library',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  imageUrl =
    'https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg';
  isLoading: boolean = true;
  searchTerm: string = '';
  searchPerformed = false;
  libraries: LibInterface[] = [
    { name: 'Центральная городская библиотека', address: 'ул. Ленина, 10' },
    { name: 'Научная библиотека академии', address: 'пр. Науки, 25' },
    { name: 'Библиотека иностранной литературы', address: 'ул. Дружбы, 5' },
    { name: 'Детская городская библиотека', address: 'ул. Цветочная, 3' },
    { name: 'Библиотека искусств', address: 'ул. Арбат, 15' },
    { name: 'Районная библиотека №2', address: 'ул. Садовая, 20' },
    { name: 'Областная юношеская библиотека', address: 'ул. Гагарина, 50' },
    { name: 'Городская библиотека №5', address: 'ул. Кирова, 12' },
    { name: 'Библиотека технической литературы', address: 'пр. Заводской, 8' },
    { name: 'Библиотека цифровых технологий', address: 'ул. Программная, 99' },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  filteredLibraries: LibInterface[] = [];

  onLoad() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onError() {
    this.isLoading = false;
    this.imageUrl = 'assets/default-placeholder.png';
  }

  fetchLibraries() {
    this.searchPerformed = true;
    this.filteredLibraries = this.libraries.filter((lib) =>
      lib.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  highlightSearchTerm(text: string): string {
    if (!this.searchTerm) return text;
    const regex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
}
