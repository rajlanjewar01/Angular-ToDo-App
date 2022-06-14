import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemList } from './item-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  item: string = '';
  list: ItemList[] = [];

  todoFrm = new FormGroup({
    input: new FormControl('',
    Validators.required
    )
  })

  addTodo(){
    if(this.todoFrm.value.input !== ''){
      const newItem: ItemList = {
        id: Date.now(),
      value: this.todoFrm.value.input,
      isDone: false
      }
      this.list.push(newItem);
    }
    this.todoFrm.reset();
  }

  deleteTodo(id: number){
    this.list = this.list.filter(item => item.id !== id);
    console.log(this.list);
  }


}
