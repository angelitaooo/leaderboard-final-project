import { FinalProjectLeaderboardPage } from './app.po';

describe('final-project-leaderboard App', () => {
  let page: FinalProjectLeaderboardPage;

  beforeEach(() => {
    page = new FinalProjectLeaderboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
