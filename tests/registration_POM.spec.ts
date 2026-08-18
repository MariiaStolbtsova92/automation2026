import test, {expect} from "@playwright/test";
import {HomePage} from "../pom/pages/HomePage";
import { SignUpForm } from "../pom/forms/SignUpForm";
import { GaragePage } from "../pom/pages/GaragePage";


test.describe('POM Sign up in tests', () => {

let homePage: HomePage;
let signUpForm: SignUpForm;
let garagePage: GaragePage;


test.describe('Field Name', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Empty field - "Name is requied"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('name');
        await expect(signUpForm.emptyNameMessage).toBeVisible();
});

    test('Wrong data - "Name is invalid"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('name');
        await signUpForm.enterName('qwweee2@');
        await expect(signUpForm.wrongFormatNameMessage).toBeVisible();
})

    test('Wrong length - "Name has to be from 2 to 20 characters long (with 1 character)"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('name');
        await signUpForm.enterName('A');
        await expect(signUpForm.wrongMumberOfCharactersNameMessage).toBeVisible();
})
        
    test('Wrong length - "Name has to be from 2 to 20 characters long (with +20 characters)"', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('name');
        await signUpForm.enterName('Abcdefghijklmopqrstuvwxyz');
        await expect(signUpForm.wrongMumberOfCharactersNameMessage).toBeVisible();

})

    test('Name Border color red', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('name'); 
        await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
       
})


test.describe('Field "Last Name"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Empty field - "Last Name is requied"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('lastName');
        await expect(signUpForm.emptyLastNameMessage).toBeVisible();
})

    test('Wrong data - "Last Name is invalid"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('lastName');
        await signUpForm.enterLastName('qwweee2@');
        await expect(signUpForm.wrongFormatLastNameMessage).toBeVisible(); 
})

    test('Wrong length - "Last Name has to be from 2 to 20 characters long (with 1 character)"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('lastName');
        await signUpForm.enterLastName('A');
        await expect(signUpForm.wrongMumberOfCharactersLastNameMessage).toBeVisible();
}) 

    test('Wrong length - "Last Name has to be from 2 to 20 characters long (with +20 characters)"', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('lastName');
        await signUpForm.enterLastName('Abcdefghijklmopqrstuvwxyz');
        await expect(signUpForm.wrongMumberOfCharactersLastNameMessage).toBeVisible();
})

    test('Last Name Border color red', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('lastName');
        await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})    

})


test.describe('Field "Email"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Wrong data - "Email is incorrect"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('email');
        await signUpForm.enterEmail('qwweee223.com');
        await expect(signUpForm.wrongFormatEmailMessage).toBeVisible()
})

    test('Empty field - "Email required"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('email');
        await expect(signUpForm.emptyEmailMessage).toBeVisible()
}) 

    test('Email Border color red', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('email');
        await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})

})


test.describe('Field "Password"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Wrong data - Password has to be from 8 to 15 characters long (with 3 character)', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await signUpForm.enterPassword('Abc');
        await expect(signUpForm.wrongFormatPasswordMessage).toBeVisible();
})   

    test('Wrong data - Password has to be from 8 to 15 characters long (with +15 characters)', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await signUpForm.enterPassword('Abcdefg1ghhw@ffk');
        await expect(signUpForm.wrongFormatPasswordMessage).toBeVisible();
})   

    test('Wrong data - Password has to contain at least one integer', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await signUpForm.enterPassword('Abcdefghij');
        await expect(signUpForm.wrongFormatPasswordMessage).toBeVisible();
})   

    test('Wrong data - Password has to contain at least one capital letter', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await signUpForm.enterPassword('abc3defghij');
        await expect(signUpForm.wrongFormatPasswordMessage).toBeVisible();
})

    test('Wrong data - Password has to contain at least one small letter', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await signUpForm.enterPassword('ABC3DEFGHIJ');
        await expect(signUpForm.wrongFormatPasswordMessage).toBeVisible();
})

    test('Empty field - "Password is requied"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('password');
        await expect(signUpForm.emptyPasswordMessage).toBeVisible();
})

    test('Password Border color red', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('password');
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})

})


test.describe('Field "Re-enter password"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Passwords do not match', async ({ page }) => {
        await signUpForm.triggerErrorOnField('repeatPassword');
        await signUpForm.enterPassword('A1bcdefghijk');
        await signUpForm.repeatPassword('A1bcdefghijm');
        await expect(signUpForm.wrongRepeatPasswordField).toBeVisible();
})   
    
    test('Empty field - "Re-enter password required"', async ({ page }) => {
        await signUpForm.triggerErrorOnField('repeatPassword');
        await expect(signUpForm.emptyRepeatPasswordField).toBeVisible();
})

    test('Re-enter password Border color red', async ({ page }) => {     
        await signUpForm.triggerErrorOnField('repeatPassword');
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})


})


test.describe('Button "Register"', () => {
const email = `mike+aqa${Date.now()}@gmail.com`

test.beforeEach(async ({page}) => {

    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Button "Register" is disabled if data is incorrect', async ({ page }) => {
        await signUpForm.enterName('Mike');
        await signUpForm.enterLastName('Smith');
        await signUpForm.enterEmail(email);
        await signUpForm.enterPassword('A1bcdefghijk');
        await signUpForm.repeatPassword('A1bcdefghi1jk');
        await expect(signUpForm.registerButton).toBeDisabled();
})

    test('Button "Register" is active after filling required fieds', async ({ page }) => {
        await signUpForm.UserSignUp('Mike', 'Smith', email, 'A1bcdefghijk', 'A1bcdefghijk');
        await expect(garagePage.pageHeading).toContainText('Garage');
})

})


test.describe('Button "Register"', () => {
const email = `mike+aqa${Date.now()}@gmail.com`

test.beforeEach(async ({page}) => {

    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await homePage.navigate();
    await homePage.openSignUpForm();
})

    test('Modal Window is called "Registration"', async ({ page }) => {
         await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible()
})

})
})