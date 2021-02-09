import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: IToDoItem[];
  constructor() {
    this.list = [{description:'Awesome task', title:'Task 1', importance: 1},{description:'Not as awesome a task', title:'Task 2', importance: 2}]

   }

  getList(){
    return this.list
  }
}

export interface IToDoItem{
title: string; 
description: string; 
importance: number; 
}