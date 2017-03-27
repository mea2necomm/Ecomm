import { Mea2necommPage } from './app.po';

describe('mea2necomm App', () => {
  let page: Mea2necommPage;

  beforeEach(() => {
    page = new Mea2necommPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
