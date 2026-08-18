import { expect } from "@playwright/test";
import { testUser1, testUser2 } from "../../test-data/validUsers";
import { test as setup } from "@playwright/test";
import AuthService from "../../utils/api/services/AuthService";


setup.describe('Get storage state for test users', () => {
    
    setup('Log in as testuser1 and save storage state', async ({ request }) => {
        const authService = new AuthService(request);
        const response = await authService.signIn(testUser1.email, testUser1.password);
        expect(response.status()).toBe(200)

        await request.storageState({ path: '.states/testuser1.json'})
})

    setup('Log in as testuser2 and save storage state', async ({ request }) => {
        const authService = new AuthService(request);
        const response = await authService.signIn(testUser2.email, testUser2.password);
        expect(response.status()).toBe(200)

        await request.storageState({ path: '.states/testuser2.json'})
})

})



/*test.describe('Get storage state for test users', () => {
    test('Log in as testuser1 and save storage state', async ({ context, app  }) => {
    // homePage = new HomePage(page);
    // signInForm = new SignInForm(page);
    // garagePage = new GaragePage(page);
    // addCarForm = new AddCarForm(page);

        await app.homePage.navigate();
        await app.homePage.openSignInForm();
        await app.signInForm.signInWithCredentials(testUser1.email, testUser1.password);
        await expect(app.garagePage.pageHeading).toContainText('Garage');

        //await context.storageState({ path: '.states/auth.json'});
        await context.storageState({ path: '.states/testuser1.json'});
        await context.close();
})


    test('Log in as testuser2 and save storage state', async ({ context, app  }) => {
    // homePage = new HomePage(page);
    // signInForm = new SignInForm(page);
    // garagePage = new GaragePage(page);
    // addCarForm = new AddCarForm(page);

        await app.homePage.navigate();
        await app.homePage.openSignInForm();
        await app.signInForm.signInWithCredentials(testUser2.email, testUser2.password);
        await expect(app.garagePage.pageHeading).toContainText('Garage');

        //await context.storageState({ path: '.states/auth.json'});
        await context.storageState({ path: '.states/testuser2.json'})
        await context.close();
})

})*/
