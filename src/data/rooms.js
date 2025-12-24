import singleImg from '../assets/rooms/single.jpg'
import doubleImg from '../assets/rooms/double.jpg'
import deluxeImg from '../assets/rooms/deluxe.jpg'

const rooms = [
  {
    id: 1,
    type: 'Single',
    price: 1500,
    image: singleImg
  },
  {
    id: 2,
    type: 'Double',
    price: 2500,
    image: doubleImg
  },
  {
    id: 3,
    type: 'Deluxe',
    price: 4000,
    image: deluxeImg
  }
]

export default rooms
