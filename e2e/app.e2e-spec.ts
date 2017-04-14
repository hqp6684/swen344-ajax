import { AjaxPage } from './app.po';

describe('ajax App', () => {
  let page: AjaxPage;

  beforeEach(() => {
    page = new AjaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
