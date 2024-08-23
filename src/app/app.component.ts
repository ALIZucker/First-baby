import { Component } from '@angular/core';
import {provideRouter, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "../component/header/header.component";
import {HomeComponent} from "../pages/home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-baby';

}
