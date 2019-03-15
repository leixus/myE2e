import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('E2E集成测试', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('项目测试APP默认路由', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('Welcome to angularIoE2e!');
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   }));
  // });
});
