import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  // roomService=new RoomsService();

  constructor(@SkipSelf() private roomsService:RoomsService){}

  

  ngAfterViewChecked(): void {
  }

  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  // ngDoCheck(): void {
  //   console.log('on changes is called');
  // }

  ngAfterViewInit(): void {
    console.log(this.headerComponent); 

    this.headerChildrenComponent.last.title = "Last Title";
    // this.headerChildrenComponent.get(0)
  }

  

  ngOnInit():void{
    this.roomsService.getRooms().subscribe(
      rooms=>{
        this.roomList=rooms;
      }
    );
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
      roomNumber:'4',
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
