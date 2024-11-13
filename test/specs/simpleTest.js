import MyLoginPage from '../pageobjects/my_login.page.js';

describe('Login application', () => {
    it('fully tested all user logins', async () => {
        await MyLoginPage.LoopLogin('secret_sauce')
        await MyLoginPage.LoopIncorrectLogin('badPassword')        
    })
})

