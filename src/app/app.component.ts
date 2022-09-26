import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-board-view-turbo-dribbble';
  avatars = [
    {image: 'https://avatars.dicebear.com/api/micah/w2.svg', color: 'brown', link: '', name: 'Nefi Lopez Garcia'},
    {image: 'https://avatars.dicebear.com/api/micah/w2ww.svg', color: 'coral', link: '', name: 'Kimberly Carrillo'},
    {image: 'https://avatars.dicebear.com/api/micah/w2s.svg', color: 'deeppink', link: '', name: 'Natalia Lopez'},
    {image: 'https://avatars.dicebear.com/api/micah/w24.svg', color: 'yellow', link: '', name: 'Nathan Benjamin Lopez'}
  ]
}
