import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRssComponent } from './load-rss.component';

describe('LoadRssComponent', () => {
  let component: LoadRssComponent;
  let fixture: ComponentFixture<LoadRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
