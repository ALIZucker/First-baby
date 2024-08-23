import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  listmenuItems: string[] = ['Best Sellers', 'New arrivals', 'New Born', 'Branded', 'Our Choice']

  ngOnInit(): void {

  }

  isempty(): boolean {
    if (this.listmenuItems.length <= 0) {
      return false
    } else {
      return true;
    }
  }
  searchBoxItems($event: Event): void {

    console.log(($event.target as HTMLInputElement).value);
  }


}
