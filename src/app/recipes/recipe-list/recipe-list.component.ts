import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms' 

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is test','https://toriavey.com/images/2011/02/IMG_1544.jpg'),
    new Recipe('A 2nd Test Recipe','This is test','https://toriavey.com/images/2011/02/IMG_1544.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeClick(recipeEl: Recipe){
    this.selectedRecipe.emit(recipeEl);
  }

}
