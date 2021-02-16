import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private serviceList: IToDoItem[];
  $list: Observable<IToDoItem[]>;
  constructor() {
    this.serviceList = [{description:'Awesome task', title:'Task 1', importance: 1},{description:'Not as awesome a task', title:'Task 2', importance: 2}]
    this.$list = of(this.serviceList);
    setTimeout( ()=>{
      this.serviceList[0].description ='Changes made';
      
    }, 2500
     )
   }

  getList(){
    return this.serviceList
  }

  addItem(item: IToDoItem){
    this.serviceList.push(item);
  }
}

export interface IToDoItem{
title: string; 
description: string; 
importance: number; 
}