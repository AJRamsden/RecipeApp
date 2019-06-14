import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRed: ElementRef;
  @Output() newIngreAdded = new EventEmitter<Ingredient>();
  
  
  constructor() {
   }

  ngOnInit() {
  }
  addnewIngred(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRed.nativeElement.value;
    const newIngre = new Ingredient(ingName, ingAmount);
    this.newIngreAdded.emit(newIngre);
  }
}
