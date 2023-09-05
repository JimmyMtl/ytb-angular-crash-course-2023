export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomsList {
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  roomNumber: number;
}
