import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../recipes/recipe.model';
import { NgModel } from '@angular/forms' 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
