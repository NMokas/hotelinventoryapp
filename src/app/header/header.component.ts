import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  title:string='';

    constructor(){

    }
    ngOnInit():void{
       
    }
}
