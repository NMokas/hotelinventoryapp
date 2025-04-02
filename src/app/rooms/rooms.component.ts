import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked{
  hotelName='Hotel Morison';

  numberOfRooms=20;

  hideRooms=false;

  selectedRoom!:RoomList;

  title='Room List';
  rooms:Room={
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  };

  roomList:RoomList[]=[]
  constructor(){}

  ngAfterViewChecked(): void {
  }

  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;

  // ngDoCheck(): void {
  //   console.log('on changes is called');
  // }

  ngAfterViewInit(): void {
    console.log(this.headerComponent); 
  }

  

  ngOnInit():void{
    console.log(this.headerComponent) 
    this.roomList=[
      {
        roomType:'Deluxe',
        amenities:'Air fryer',
        price:10,
        photos:'N/A',
        checkinTime: new Date('17-Jun-1999'),
        checkoutTime: new Date('05-Jul-2000'),
        roomNumber:1,
        rating:4.5
      },
      {
        roomType:'Private',
        amenities:'Air fryer',
        price:9,
        photos:'N/A',
        checkinTime: new Date('11-Nov-1999'),
        checkoutTime: new Date('24-Jul-2000'),
        roomNumber:2,
        rating:3.55
      },
      {
        roomType:'Deluxe',
        amenities:'Air fryer',
        price:12,
        photos:'N/A',
        checkinTime: new Date('18-Dec-2001'),
        checkoutTime: new Date('24-Jul-2004'),
        roomNumber:3,
        rating:2.47
    
      }
    ]
   }

  toggle(){
    this.hideRooms=!this.hideRooms;
    this.title="Rooms List";
  }

  selectRoom(room:RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(){
    const room:RoomList={
      roomNumber:4,
      roomType:'Deluxe Room',
      amenities:'Oven',
      price:20,
      photos:'N/A',
      checkinTime: new Date('17-Jun-1999'),
      checkoutTime: new Date('21-Nov-2025'),
      rating:2.24
    };

    //this.roomList.push(room);
    this.roomList= [...this.roomList,room];
  }
}
