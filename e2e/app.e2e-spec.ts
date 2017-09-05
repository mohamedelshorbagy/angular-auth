import { ProjectFivePage } from './app.po';

describe('project-five App', () => {
  let page: ProjectFivePage;

  beforeEach(() => {
    page = new ProjectFivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
