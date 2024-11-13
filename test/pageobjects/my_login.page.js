import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './default_page.js';
import MySecurePage from '../pageobjects/my_secure.page.js'

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


    usernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"]

    async login (username, password) {      
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    async LoopLogin (password) {
        for (let i = 0; i < this.usernames.length; i++) {
        await MySecurePage.open()
        await this.login(this.usernames[i], password)      
            if (this.usernames[i] == "locked_out_user") {
                await expect(MySecurePage.errorCheck).toBeExisting()
                await expect(MySecurePage.lockedOutCheck).toHaveText(
                    expect.stringContaining('Sorry, this user has been locked out.'))
            }
            else {
        await expect(MySecurePage.logoCheck).toBeExisting()
        await expect(MySecurePage.logoCheck).toHaveText(
            expect.stringContaining('Swag Labs'))
            }
        }
    }

    async LoopIncorrectLogin (password) {
        for (let i = 0; i < this.usernames.length; i++) {  
        await MySecurePage.open()
        await this.login(this.usernames[i], password)

        await expect(MySecurePage.errorCheck).toBeExisting()
            
        }
    }
}

export default new MyLoginPage();
