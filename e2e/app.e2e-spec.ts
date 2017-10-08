import { EnventoryPage } from './app.po';

describe('enventory App', () => {
  let page: EnventoryPage;

  beforeEach(() => {
    page = new EnventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
