import { browser, logging } from 'protractor';

import {LoginPage} from './login.po';
import {log} from 'util';

describe('登录系统', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  // it('表单输入', () => {
  //   page.navigateTo('./login');
  //   // expect(page.getTitleText()).toEqual('Hello Form');
  //
  //   page.getInputElement(0, '11111');
  //   page.getInputElement(1, 12345678);
  //
  //   // 选择元素的方式有很多，但是测试是对同一个input只能用一次
  //   // page.getInputId('loginUserName', '小明');
  //   // page.getInputId('loginPassWord', '小明的密码');
  //
  // });

  function loginSystem(username, password) {
    page.navigateTo('./login');
    // expect(page.getTitleText()).toEqual('Hello Form');

    page.getInputElement(0, username);
    page.getInputElement(1, password);

    // const form = page.getForm().getAttribute('class');

    // 登录表单应无效
    // expect(form).toContain('ng-valid');
    page.getSubmint().click()
      .then(() => {
        // const loginLs = browser.executeScript('return window.localStorage.getItem("login");');
        // expect(loginLs).toEqual('true');
        // page.navigateTo('./homes');
        browser.executeScript('return window.localStorage.getItem("login");').then((res) => {
          if (res === 'true') {
            console.log('用户名:' + username, '，密码:' + password + ' 登录成功');
            page.navigateTo('./pokemon');
          } else {
            console.log('用户名:' + username, '，密码:' + password + ' 出现错误');
          }
        }).catch((err) => console.log('获取不到login', err));
      });
  }

  it('表单登录', () => {
    loginSystem('leixus', '12345678');
    loginSystem('leixu', '12345678');
  });

  // it('表单输入正确', () => {
  //   page.navigateTo('./login');
  //   // expect(page.getTitleText()).toEqual('Hello Form');
  //
  //   page.getInputElement(0, 'leixu');
  //   page.getInputElement(1, 12345678);
  //
  //   // const form = page.getForm().getAttribute('class');
  //
  //   // 登录表单应无效
  //   // expect(form).toContain('ng-valid');
  //   page.getSubmint().click()
  //     .then(() => {
  //       const loginLs = browser.executeScript('return window.localStorage.getItem("login");');
  //       if (expect(loginLs).toEqual('true')) {
  //         page.navigateTo('./homes');
  //       }
  //     });
  // });

});
