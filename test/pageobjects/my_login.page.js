import { $ } from '@wdio/globals'
import DefaultPage from './default_page.js';


class MyLoginPage extends DefaultPage {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get buttonSubmit () {
        return $('input[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

export default new MyLoginPage();
