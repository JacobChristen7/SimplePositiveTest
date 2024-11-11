import { expect } from '@wdio/globals'
import MyLoginPage from '../pageobjects/my_login.page.js'
import MySecurePage from '../pageobjects/my_secure.page.js'

describe('Login application', () => {
    it('logged in with valid credentials', async () => {
        await MyLoginPage.open()

        await MyLoginPage.login('standard_user', 'secret_sauce')
        await expect(MySecurePage.logoCheck).toBeExisting()
        await expect(MySecurePage.logoCheck).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})