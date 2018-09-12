import { Component, OnInit } from '@angular/core';


import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is test','https://toriavey.com/images/2011/02/IMG_1544.jpg'),
    new Recipe('A Test Recipe','This is test','https://toriavey.com/images/2011/02/IMG_1544.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
