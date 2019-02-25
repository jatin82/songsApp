import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/song.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public filters:Object;
  public loader:boolean;
  public songs:[];
  constructor(public songService:SongsService,public loaderService:LoaderService) { 
    this.filters = {top:50};
    this.loader = false;
  }

  ngOnInit() {
    this.loaderService.emitLoader.subscribe(t=>{
      console.log("Toggle Loader :"+t);
      this.loader = t;
    })
    this.loadSongs();
  }

  public loadSongs(){
    console.log("Component requesting songs");
    this.loaderService.emitLoader.emit(true);
    this.songService.getSongs(this.filters).subscribe(
      response=>{
        console.log("Subscriber get response of songs");
        this.songs = response['data'];
        this.loaderService.emitLoader.emit(false);
      }
    );

    this.songService.emitSongs.subscribe(response=>{
      console.log("event got from header");
      console.log(response);
      this.songs = response;
    });

  }




}
