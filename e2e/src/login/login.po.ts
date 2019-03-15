import { browser, by, element } from 'protractor';
import { Router } from '@angular/router';

export class LoginPage {

  // constructor(private router: Router) {}

  navigateTo(url) {
    return browser.get(url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-login h1')).getText() as Promise<string>;
  }

  getInputElement(index: any, data: any) {
    return element.all(by.css('app-login input')).get(index).sendKeys(data);
  }

  getInputId(id: string, seedKeys: any) {
    return element(by.id(id)).sendKeys(seedKeys);
  }

  getForm() {
    return element(by.css('app-login .login-form'));
  }

  getSubmint() {
    return element(by.css('app-login .login-form-button'));
  }
}
