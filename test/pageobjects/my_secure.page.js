import { $ } from '@wdio/globals'
import DefaultPage from './default_page.js';

class MySecurePage extends DefaultPage {
    get logoCheck () {
        return $('.app_logo');
    }
}

export default new MySecurePage();