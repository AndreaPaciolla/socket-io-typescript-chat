import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rooms: any;
  ngOnInit(): void {
    this.rooms = [
        {
          id: 1,
          label: 'Gianni',
          url: '/chat/1',
          users: [
            {
              id: 1,
              username: 'apacho',
              name: 'Andrea'
            },
            {
              id: 2,
              name: 'Gianni',
              username: 'fgianni'
            }
          ]
        },
        {
          id: 2,
          label: 'Luca, Battista',
          url: '/chat/2',
          users: [
            {
              id: 1,
              username: 'apacho',
              name: 'Andrea'
            },
            {
              id: 3,
              username: 'lsciuti',
              name: 'Luca'
            },
            {
              id: 4,
              username: 'battuo',
              name: 'Battista'
            }
          ]
        }
      ];
  }

  private initModel(): void {
  }
}
