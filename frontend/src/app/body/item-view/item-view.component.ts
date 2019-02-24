import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/song.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  public song:Object;
  constructor(public route:ActivatedRoute,public songService:SongsService) { }

  ngOnInit() {
    this.fetchSong();
  }

  public fetchSong(){
    let id:string = this.route.snapshot.params['item'];
    this.songService.getSongById(id).subscribe(response=>{
      console.log("Song fetched by id");
      console.log(response);
      this.song = response['data'];
    })
  }

}
