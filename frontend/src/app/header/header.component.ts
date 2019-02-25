import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SongsService } from '../services/song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  public name:string;
  public artist:string;
  public top:number;

  constructor(public songService:SongsService,public router:Router, public loaderSerive:LoaderService) { 
    this.name= "";
    this.artist="";
    this.top=50;
  }

  ngOnInit() {
    
  }


  public onSearch():void{
    let name:string = this.name;
    let artist:string = this.artist;
    let top:number = this.top;
    console.log(top);
    console.log(artist);
    console.log(name);

    let filter:Object = {};
    if(top!==null || top!==0){ 
      filter['top'] = top;
    }
    if(artist!==""){
      filter['artist'] = artist;
    }
    if(name!==""){
      filter['name'] = name;
    }

    this.loaderSerive.emitLoader.emit(true);

    this.songService.getSongs(filter).subscribe(response=>{
      console.log("Songs fetched at headers");
      console.log(response);
      this.router.navigate(['/']);
      this.songService.emitSongs.emit(response['data']);
      this.loaderSerive.emitLoader.emit(false);
    });
  }


}
