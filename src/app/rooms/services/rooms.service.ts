import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

    roomList:RoomList[]=[
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
  constructor() { }

  getRooms(){
    return this.roomList;
  }
}
