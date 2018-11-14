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
              name: 'Andrea'
            },
            {
              id: 2,
              name: 'Gianni'
            }
          ]
        },
        {
          id: 2,
          label: 'Luca',
          url: '/chat/2',
          users: [
            {
              id: 3,
              name: 'Andrea'
            },
            {
              id: 4,
              name: 'Luca'
            }
          ]
        }
      ];
  }

  private initModel(): void {
  }
}
