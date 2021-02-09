import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
title = 'Todo Listzzzz';
someBool = false; 
list: any;
  constructor(todoListService: TodoListService) {
    this.list = todoListService.getList();
   }

  ngOnInit(): void {
    alert('from service: ' + this.list)
  }

}
