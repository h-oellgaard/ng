import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy{

  constructor() { }

  ngOnInit(): void{

    alert('hi'); 

  }
 

  ngOnDestroy(): void{
    alert('bye'); 
  }

}