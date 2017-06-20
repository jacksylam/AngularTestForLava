import { D3testPage } from './app.po';

describe('d3test App', () => {
  let page: D3testPage;

  beforeEach(() => {
    page = new D3testPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
