import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'hinv-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges {

  @Input() rooms:RoomList[]=[];

  @Input() title: string=' ';

  @Output() selectedRoom = new EventEmitter<RoomList>();


  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {
    
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}
