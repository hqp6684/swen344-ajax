import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
@Component({
  selector: 'app-load-rss',
  templateUrl: './load-rss.component.html',
  styleUrls: ['./load-rss.component.scss']
})
export class LoadRssComponent implements OnInit {

  selectedOption: any = null;
  loaded = false;
  loading = false;
  hasError = false;
  json: any;
  articles: Article[] = new Array();
  options = [
    { name: 'bad-buzzfeed', url: 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=cc2a1d5345144cc593cba8cf78833a' },
    { name: 'buzzfeed', url: 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=cc2a1d5345144cc593cba8cf78833a30' },
    { name: 'bbc-new', url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=cc2a1d5345144cc593cba8cf78833a30' },
    { name: 'cnn', url: 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=cc2a1d5345144cc593cba8cf78833a30' },
    { name: 'mvt', url: ' https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=cc2a1d5345144cc593cba8cf78833a30' }
  ];
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
      .map(res => {
        const result: NewsResult = res.json();
        return result.articles;
      })
      .catch(err => { return Observable.throw(new Error('badd request')); })
      .subscribe((articles) => {
        this.articles = [];
        // console.log(articles);
        articles.map((a, i) => {
          setTimeout(() => {
            this.articles.push(a);
          }, 200 * i);
        });
      },
      (err) => { console.log(err); this.loaded = true; this.hasError = true; this.loading = false; },
      () => {
        this.loading = false;
        this.hasError = false;
        this.loaded = true;
      });


  }

  openThis(url: string) {
    window.open(url);

  }
}
export interface NewsResult {
  status: 'ok' | string;
  source: string;
  articles: Article[];
}
export interface Article {
  title: string;
  publishedAt: Date;
  url: string;
  urlToImage: string;
  author: string;
  description: string;
}


