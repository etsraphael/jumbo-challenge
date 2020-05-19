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

  ngOnInit() { }


  getColorBackground(x: Number) {

    switch (true) {
      case (x < 3): return 'red'
      case (x <= 5): return 'orange'
      case (x <= 10): return 'green'
    }

  }

}
