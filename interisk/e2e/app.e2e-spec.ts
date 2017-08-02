import { AfmFrontPage } from './app.po';

describe('afm-front App', () => {
  let page: AfmFrontPage;

  beforeEach(() => {
    page = new AfmFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
