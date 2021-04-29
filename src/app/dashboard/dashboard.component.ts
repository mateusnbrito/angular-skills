import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;

  constructor(private httpClient: HttpClient) {
    // this.cards = [
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined },
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined },
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined },
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined },
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined },
    //   { id: undefined, name: undefined, description: undefined, pic: undefined, likes: undefined }
    // ]
  }

  ngOnInit() {
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.cards = ret;
    });
  }
}
