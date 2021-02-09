import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
title = 'Todo Listzzzz';
someBool = false; 
list = [1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
