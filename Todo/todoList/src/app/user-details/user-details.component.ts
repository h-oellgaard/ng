import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy{

  constructor() {
    // alert('hi'); 


   }

  ngOnInit(): void{

    const promise = new Promise(function(resolve, reject){

      setTimeout(function(){
        resolve('hi there')
      }, 1500);

    });
    promise.then(function(val){
      alert(val);
    });
  }

  ngOnDestroy(): void{
    alert('bye'); 
  }

}
