import { BcodersPage } from './app.po';

describe('bcoders App', () => {
  let page: BcodersPage;

  beforeEach(() => {
    page = new BcodersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
