import { AfterViewInit, Component, ElementRef, Inject, OnInit, viewChild, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import {localStorageToken} from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'hotelinventoryapp';

  role='Admin';

  @ViewChild('name',{static:true}) name!:ElementRef;
  constructor(@Inject(localStorageToken) private localStorage:Storage){

  }
  ngOnInit(): void {
    console.log(this.name.nativeElement.innerText="Morison Hotel") 

    this.localStorage.setItem('name','Morison Hotel')
  }
  // @ViewChild('user', {read:ViewContainerRef}) vcr!:ViewContainerRef;

  // ngAfterViewInit(){
  //     const componentRef= this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms=50;
  // }
}
