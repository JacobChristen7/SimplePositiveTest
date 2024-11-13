import MyLoginPage from '../pageobjects/login.js';

describe('Login application', () => {
    it('fully tested all user logins', async () => {
        await MyLoginPage.Loop('secret_sauce', 'badPassword')
    })
})

