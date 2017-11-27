import { ProjectEssentialsPage } from './app.po';

describe('project-essentials App', () => {
  let page: ProjectEssentialsPage;

  beforeEach(() => {
    page = new ProjectEssentialsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
