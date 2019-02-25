import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/song.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  public song:Object;
  public loader:Boolean;
  constructor(public route:ActivatedRoute,public songService:SongsService,public loaderSerive:LoaderService) {
    this.loader = false;
   }

  ngOnInit() {
    this.loaderSerive.emitLoader.subscribe(t=>{
      console.log("Toggle loader item view:"+t);
      this.loader = t;
    });
    this.fetchSong();
    
  }

  public fetchSong(){
    let id:string = this.route.snapshot.params['item'];
    this.loaderSerive.emitLoader.emit(true);
    this.songService.getSongById(id).subscribe(response=>{
      console.log("Song fetched by id");
      console.log(response);
      this.song = response['data'];
      this.loaderSerive.emitLoader.emit(false);
    })
  }

}
