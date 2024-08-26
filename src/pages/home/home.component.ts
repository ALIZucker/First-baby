import { Component } from '@angular/core';
import {ListPostComponent} from "../../component/list-post/list-post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListPostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstTitle: string='Featured Products'
  secondTitle:string='New Releases'
}
