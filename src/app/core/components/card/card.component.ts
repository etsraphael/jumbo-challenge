import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../services/movies/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: Movies
  
  constructor() { }

  ngOnInit() {
    console.log(this.movie)
  }

}
