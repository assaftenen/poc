import { AssafApPage } from './app.po';

describe('assaf-ap App', () => {
  let page: AssafApPage;

  beforeEach(() => {
    page = new AssafApPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
