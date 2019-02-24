import { Component, OnInit, Input } from '@angular/core';
import { SongsService } from 'src/app/services/song.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public song:Object;
  constructor(public songService:SongsService) { }

  ngOnInit() {
    this.songService
  }

}
