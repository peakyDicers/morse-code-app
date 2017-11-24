import { Component, OnInit } from '@angular/core';
import * as myhowler from "howler";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  isDown:boolean;
  sound:any; 
  howlerSnd:any;
  //declare var howler:any;

  constructor() { }

  ngOnInit() {
    this.isDown = false;
    this.sound = new Audio('assets/beep.ogg')
    this.howlerSnd = new myhowler.Howl({
      src:['assets/beep.ogg'],
      loop: true,
    });
    console.log(this.howlerSnd);
  }
  keyDown(event) {
    if (event.key == " ") {
      if (this.isDown != true){
        console.log('space pressed');
        this.howlerSnd.play();
        this.isDown = true;
      }
    }
  }
  keyUp(event){
    if (event.key == " "){
      console.log("released");
      this.isDown = false;
      this.howlerSnd.stop();
    }
  }

}
