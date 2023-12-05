import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
 @Injectable({
 providedIn: 'root'
 })
 export class FaceSnapsService {
 faceSnaps: FaceSnap[] = [
        {
        title:'Archiblad',
        description:"Mon meilleur ami depuis tout petit !",
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate:new Date(),
        snaps:0,
        buttonText:'oh snap!  '
      },
      {
        title:'three rock mountain',
        description:'endroit magnifique',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-ThreeRock_Mountain.jpg',
        createdDate:new Date(),
        snaps:0,
        buttonText:'oh snap!'
      },
      {
        title:'PALESTINE',
        description:"Free palestine!",
        imageUrl:'https://i.pinimg.com/564x/c1/24/39/c124398e1a8c8a102619dda3ffb7aeb7.jpg',
        createdDate:new Date(),
        snaps:0,
        buttonText:'oh snap!'
      }
      ];
}
