import { MorseCodeAppPage } from './app.po';

describe('morse-code-app App', () => {
  let page: MorseCodeAppPage;

  beforeEach(() => {
    page = new MorseCodeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
