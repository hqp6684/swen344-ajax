import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-json',
  templateUrl: './load-json.component.html',
  styleUrls: ['./load-json.component.scss']
})
export class LoadJsonComponent implements OnInit {
  selectedOption: any = null;
  loaded = false;
  loading = false;
  hasError = false;
  options = [{ name: 'bad', url: 'url1' }, { name: 'good', url: 'url2' }];
  constructor() { }

  ngOnInit() {
  }

  loadJSON() {
    console.log(this.selectedOption);
    this.loading = true;
    this.loaded = false;
    setTimeout(() => {
      this.loading = false;
      this.loaded = true;
    }, 2000)

  }

}
