import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { ScrollDispatcher } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http, private sd: ScrollDispatcher) {

  }
}
