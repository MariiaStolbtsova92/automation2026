import test, {expect} from "@playwright/test";
import {HomePage} from "../pom/pages/HomePage";
import { SignInForm } from "../pom/forms/SignInForm";
import { GaragePage } from "../pom/pages/GaragePage";

test.describe('CodeGen Sign in tests', () => {

let homePage: HomePage;
let signInForm: SignInForm;
let garagePage: GaragePage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    signInForm = new SignInForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignInForm();
})

    test('Successful sign in', async ({ page }) => {
  await signInForm.signInWithCredentials('igst196@mail.com', 'rK5nDaZ!!gqFiyG');
  await expect(garagePage.pageHeading).toContainText('Garage');
});


    test('Sign in with empty email', async () => {
  await signInForm.triggerErrorOnField('email');
  await signInForm.enterPassword('rK5nDaZ!!gqFiyG');
  await expect(signInForm.emptyEmailMessage).toBeVisible();
});



    test('Sign in with empty password', async () => {
  await signInForm.triggerErrorOnField('password');
  await signInForm.enterEmail('qwdwwd@mail.com');
  await expect(signInForm.emptyPasswordMessage).toBeVisible();
});



    test('Sign incorrect email', async ({page}) => {
  await signInForm.enterEmail('test');
  await signInForm.triggerErrorOnField('email');
  await expect(signInForm.wrongEmailMessage).toBeVisible();
});


    test('Sign in with wrong credentials', async ({page}) => {
  await signInForm.signInWithCredentials('qweqwewq@efef.com', 'qwdwqdwqdwd');
  await expect(signInForm.wrongCredentialsMessage).toBeVisible();
});

    })