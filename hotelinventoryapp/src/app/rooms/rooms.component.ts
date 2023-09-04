import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  constructor() {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit() {
    console.log(this.hotelName)
    console.log('RoomsComponent ngOnInit');
  }

}
