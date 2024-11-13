import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';

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

    get logoCheck () {
        return $('.app_logo');
    }

    get errorCheck () {
        return $('.error-button');
    }

    get lockedOutCheck () {
        return $('h3');
    }


    usernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"]

    async login (username, password) {      
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    async LoopLogin (password) {
        for (let i = 0; i < this.usernames.length; i++) {
        await this.open()
        await this.login(this.usernames[i], password)      
            if (this.usernames[i] == "locked_out_user") {
                await expect(this.errorCheck).toBeExisting()
                await expect(this.lockedOutCheck).toHaveText(
                    expect.stringContaining('Sorry, this user has been locked out.'))
            }
            else {
        await expect(this.logoCheck).toBeExisting()
        await expect(this.logoCheck).toHaveText(
            expect.stringContaining('Swag Labs'))
            }
        }
    }

    async LoopIncorrectLogin (password) {
        for (let i = 0; i < this.usernames.length; i++) {  
        await this.open()
        await this.login(this.usernames[i], password)
        await expect(this.errorCheck).toBeExisting() 
        }
    }

    async Loop (password1, password2) {
    await this.LoopLogin(password1)
    await this.LoopIncorrectLogin(password2)
    }
}

export default new MyLoginPage();
