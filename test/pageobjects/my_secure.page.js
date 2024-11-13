import { $ } from '@wdio/globals'
import DefaultPage from './default_page.js';

class MySecurePage extends DefaultPage {
    get logoCheck () {
        return $('.app_logo');
    }

    get errorCheck () {
        return $('.error-button');
    }

    get lockedOutCheck () {
        return $('h3');
    }


    open () {
        return super.open('login');
    }
}

export default new MySecurePage();