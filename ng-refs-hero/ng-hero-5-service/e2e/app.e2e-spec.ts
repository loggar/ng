import { NgHeroPage } from './app.po';

describe('ng-hero App', () => {
  let page: NgHeroPage;

  beforeEach(() => {
    page = new NgHeroPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
