import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { LoadJsonService } from './load-json.service';

@Component({
  selector: 'app-load-json',
  templateUrl: './load-json.component.html',
  styleUrls: ['./load-json.component.scss'],
  providers: [LoadJsonService]
})
export class LoadJsonComponent implements OnInit {
  selectedOption: any = null;
  loaded = false;
  loading = false;
  hasError = false;
  json: any;

  options = [{ name: 'bad', url: 'http://www.se.rit.edu/~hqp6684/JQuery/baddata.json' },
  { name: 'good', url: 'http://www.se.rit.edu/~hqp6684/JQuery/readJson/myinfo.json' }];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  loadJSON() {
    console.log(this.selectedOption);
    this.loading = true;
    this.loaded = false;
    setTimeout(() => {
      this.getJSON();
    }, 2000);

  }


  private getJSON() {
    this.http.get(this.selectedOption.url)
      .map(res => { return res.json(); })
      .catch(err => { return Observable.throw(new Error('badd request')); })
      .subscribe(result => {
        this.json = result;

      },
      (err) => { console.log(err); this.loaded = true; this.hasError = true; this.loading = false; },
      () => {
      this.loading = false;
        this.loaded = true;
        this.hasError = false;
      });


  }



}
