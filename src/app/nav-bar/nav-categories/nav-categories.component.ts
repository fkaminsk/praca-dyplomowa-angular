import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {
  categories = ['Guit/Bass',
    'Drums',
    'Keys',
    'Studio',
    'Software',
    'PA',
    'Lighting',
    'DJ',
    'Video',
    'Cases',
    'Cables',
    'Accessories'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
