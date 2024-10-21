import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  standalone: true,
  imports: [],
  templateUrl: './pikachu.component.html',
  styleUrl: './pikachu.component.css'
})
export class PikachuComponent implements OnInit {
  currentImage:string='';
  ngOnInit(): void {
    //this.playSound();
  }

  playSound(): void {
    const audio = new Audio();
    audio.src = 'assets/PikachuSound.mp3';
    audio.load();
    audio.play();
    this.showPikachu();
  }

 showPikachu (): void {
  this.currentImage='assets/images/Pikachu/pikachuCard.jpg'

 }
}
