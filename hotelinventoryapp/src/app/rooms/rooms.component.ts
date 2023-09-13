import {Component, OnInit} from '@angular/core';
import {Room, RoomsList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomsList: RoomsList[] = []

  constructor() {
    this.roomsList = [
      {
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, TV, Wifi, Breakfast',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1581091019743-0b6b3c0c0c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        checkInTime: new Date('11-nov-2021'),
        checkOutTime: new Date('12-nov-2021'),
        roomNumber: 101
      },
      {
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, TV, Wifi, Breakfast',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1581091019743-0b6b3c0c0c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        checkInTime: new Date('11-nov-2021'),
        checkOutTime: new Date('12-nov-2021'),
        roomNumber: 102
      },
      {
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, TV, Wifi, Breakfast',
        price: 15000,
        photos: 'https://images.unsplash.com/photo-1581091019743-0b6b3c0c0c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        checkInTime: new Date('11-nov-2021'),
        checkOutTime: new Date('12-nov-2021'),
        roomNumber: 103
      }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit() {
    console.log(this.hotelName)
  }

}
