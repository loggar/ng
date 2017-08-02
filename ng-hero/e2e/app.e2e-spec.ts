import { LoggarNgHeroPage } from './app.po';

describe('ng-hero App', () => {
  let page: LoggarNgHeroPage;

  beforeEach(() => {
    page = new LoggarNgHeroPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
