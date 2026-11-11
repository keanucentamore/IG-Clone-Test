import { Component } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    { name: 'Hans', image: './img/banana.jpg', likes: 95 },
    { name: 'Mandy', image: './img/orange.jpg', likes: 3 },
    { name: 'Nadine', image: './img/currant.jpg', likes: 12 },
  ];
}
