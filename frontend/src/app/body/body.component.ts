import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/song.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public filters:Object;
  public songs:[];
  constructor(public songService:SongsService) { 
    this.filters = {top:50};
  }

  ngOnInit() {
    this.loadSongs();
  }

  public loadSongs(){
    console.log("Component requesting songs");
    this.songService.getSongs(this.filters).subscribe(
      response=>{
        console.log("Subscriber get response of songs");
        this.songs = response['data'];
      }
    );

    this.songService.emitSongs.subscribe(response=>{
      console.log("event got from header");
      console.log(response);
      this.songs = response;
    });

    
  }




}
