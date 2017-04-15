import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { ScrollDispatcher, MdSidenavContainer } from '@angular/material';
import { Scrollable } from '@angular/material/typings/core/overlay/scroll/scrollable';
// import {} from '@'
@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.scss']
})
export class InfiniteScrollingComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenavContainer') sidenavContainer: ElementRef;

  scrollable: Scrollable;
  nativeEl: HTMLDivElement;
  constructor(private sd: ScrollDispatcher) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.sd.getScrollContainers(this.sidenavContainer).map(scrollable => {
      if (scrollable.getElementRef().nativeElement === this.sidenavContainer.nativeElement) {
        this.scrollable = scrollable;
        this.nativeEl = this.scrollable.getElementRef().nativeElement;
      }
    });
    this.scrollable.elementScrolled()
      .debounceTime(100)
      .subscribe(event => {
        // console.log(this.sidenavContainer.nativeElement)
        const a = this.nativeEl.scrollTop;
        const b = this.nativeEl.scrollHeight - this.nativeEl.clientHeight;
        const c = a / b;
        console.log(c);

      });
  }
  // this.sd.scrolled(100, () => {
  //   console.log('what is this');
  // });
  // // console.log(this.sidenavContainer.nativeElement);
  // const idk = this.sd.getScrollContainers(this.sidenavContainer);
  // const scrollable1 = idk[1];

  // scrollable1.elementScrolled()
  //   .debounceTime(100)
  //   .throttleTime(100)
  //   .subscribe(result => {
  //     console.log(scrollable1.getElementRef());
  //     if (scrollable1.getElementRef().nativeElement === this.sidenavContainer.nativeElement) {
  //       console.log('ima genius');
  //     }
  //     console.log(result);
  //     console.log('in 1');
  // });

  // idk[0].elementScrolled().subscribe(event => {
  //   console.log('in2');
  // });


  //   console.log(idk);
  // }

}
