import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post-interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent implements OnInit {

  @Input({required: true})
  title!: string;

  dataPost!: Post[];

  ngOnInit(): void {
    this.dataPost=[
      {id:1,image:'/img/product1_thumbnail.jfif',price:19.5,title:"Red Baby Shoes"},
      {id:2,image:'/img/product3_thumbnail.jfif',price:10.5,title:"Bib And Pacifie"},
      {id:3,image:'/img/product4_thumbnail.jfif',price:10.5,title:"Mothers Bag"},
      {id:4,image:'/img/product5_thumbnail.jfif',price:25.5,title:"Baby Accessories Kit"},
     // {id:5,image:'/img/product6_thumbnail.jfif',price:8.5,title:"Baby Rocker"}
    ]
  }
}
