import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-library-details',
  imports: [NgIf],
  templateUrl: './library-details.component.html',
  styleUrl: './library-details.component.scss',
})
export class LibraryDetailsComponent {
  @Input() library: any;
}
