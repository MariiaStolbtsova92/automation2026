import test, {expect} from "@playwright/test";


test.describe('Field Name', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})
    
    test('Empty field - "Name is requied"', async ({ page }) => {
         await page.locator('#signupName').focus();
         await page.locator('#signupName').blur();
         await expect(page.getByText('Name required')).toBeVisible();
})

    test('Wrong data - "Name is invalid"', async ({ page }) => {
         await page.locator('#signupName').focus();
         await page.locator('#signupName').fill('qwweee2@');
         await page.locator('#signupName').blur();
         await expect(page.getByText('Name is invalid')).toBeVisible();
})

    test('Wrong length - "Name has to be from 2 to 20 characters long (with 1 character)"', async ({ page }) => {
         await page.locator('#signupName').focus();
         await page.locator('#signupName').fill('A');
         await page.locator('#signupName').blur();
         await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
})    

    test('Wrong length - "Name has to be from 2 to 20 characters long (with +20 characters)"', async ({ page }) => {     
         await page.locator('#signupName').focus();
         await page.locator('#signupName').fill('Abcdefghijklmopqrstuvwxyz');
         await page.locator('#signupName').blur();
         await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();

})

    test('Name Border color red', async ({ page }) => {     
         await page.locator('#signupName').focus();
         await page.locator('#signupName').blur();
         await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
})




test.describe('Field "Last Name"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})
    
    test('Empty field - "Last Name is requied"', async ({ page }) => {
         await page.locator('#signupLastName').focus();
         await page.locator('#signupLastName').blur();
         await expect(page.getByText('Last Name required')).toBeVisible();
})

    test('Wrong data - "Last Name is invalid"', async ({ page }) => {
         await page.locator('#signupLastName').focus();
         await page.locator('#signupLastName').fill('qwweee2@');
         await page.locator('#signupLastName').blur();
         await expect(page.getByText('Last name is invalid')).toBeVisible();
})

    test('Wrong length - "Last Name has to be from 2 to 20 characters long (with 1 character)"', async ({ page }) => {
         await page.locator('#signupLastName').focus();
         await page.locator('#signupLastName').fill('A');
         await page.locator('#signupLastName').blur();
         await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
})    

    test('Wrong length - "Last Name has to be from 2 to 20 characters long (with +20 characters)"', async ({ page }) => {     
         await page.locator('#signupLastName').focus();
         await page.locator('#signupLastName').fill('Abcdefghijklmopqrstuvwxyz');
         await page.locator('#signupLastName').blur();
         await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();

})

    test('Last Name Border color red', async ({ page }) => {     
         await page.locator('#signupLastName').focus();
         await page.locator('#signupLastName').blur();
         await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
})




test.describe('Field "Email"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})

    test('Wrong data - "Email is incorrect"', async ({ page }) => {
         await page.locator('#signupEmail').focus();
         await page.locator('#signupEmail').fill('qwweee223.com');
         await page.locator('#signupEmail').blur();
         await expect(page.getByText('Email is incorrect')).toBeVisible();
})
    

    test('Empty field - "Email required"', async ({ page }) => {
         await page.locator('#signupEmail').focus();
         await page.locator('#signupEmail').blur();
         await expect(page.getByText('Email required')).toBeVisible();
})

    

    test('Email Border color red', async ({ page }) => {     
         await page.locator('#signupEmail').focus();
         await page.locator('#signupEmail').blur();
         await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
})



test.describe('Field "Password"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})

    test('Wrong data - Password has to be from 8 to 15 characters long (with 3 character)', async ({ page }) => {
         await page.locator('#signupPassword').fill('Abc');
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
})   

    test('Wrong data - Password has to be from 8 to 15 characters long (with +15 characters)', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').fill('Abcdefg1ghhw@ffk');
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
})   


    test('Wrong data - Password has to contain at least one integer', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').fill('Abcdefghij');
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
})   
   

    test('Wrong data - Password has to contain at least one capital letter', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').fill('abc3defghij');
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
})   
   

    test('Wrong data - Password has to contain at least one small letter', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').fill('ABC3DEFGHIJ');
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
})   


    test('Empty field - "Password is requied"', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').blur();
         await expect(page.getByText('Password required')).toBeVisible();
})


    test('Password Border color red', async ({ page }) => {     
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').blur();
         await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
})


test.describe('Field "Re-enter password"', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})

    test('Passwords do not match', async ({ page }) => {
         await page.locator('#signupPassword').focus();
         await page.locator('#signupPassword').fill('A1bcdefghijk');
         await page.locator('#signupPassword').blur();
         await page.locator('#signupRepeatPassword').focus();
         await page.locator('#signupRepeatPassword').fill('A1bcdefghijm');
         await page.locator('#signupRepeatPassword').blur();
         await expect(page.getByText('Passwords do not match')).toBeVisible();
})   

     
    test('Empty field - "Re-enter password required"', async ({ page }) => {
         await page.locator('#signupRepeatPassword').focus();
         await page.locator('#signupRepeatPassword').blur();
         await expect(page.getByText('Re-enter password required')).toBeVisible();
})


    test('Re-enter password Border color red', async ({ page }) => {     
         await page.locator('#signupRepeatPassword').focus();
         await page.locator('#signupRepeatPassword').blur();
         await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
})
})



test.describe('Button "Register"', () => {
const email = `mike+aqa${Date.now()}@gmail.com`

test.beforeEach(async ({page}) => {
    
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})

    test('Button "Register" is active after filling required fieds', async ({ page }) => {
         await page.locator('#signupName').fill('Mike');
         await page.locator('#signupLastName').fill('Smith');
         await page.locator('#signupEmail').fill(email);
         await page.locator('#signupPassword').fill('A1bcdefghijk');
         await page.locator('#signupRepeatPassword').fill('A1bcdefghijk');
         await page.getByRole('button', { name: 'Register' }).click();
         await expect(page.getByRole('button', { name: 'Add car' })).toBeVisible();

})   

    test('Button "Register" is disabled if data is incorrect', async ({ page }) => {
         await page.locator('#signupName').fill('Mike');
         await page.locator('#signupLastName').fill('Smith');
         await page.locator('#signupEmail').fill(email);
         await page.locator('#signupPassword').fill('A1bcdefghijk');
         await page.locator('#signupRepeatPassword').fill('A1bcdefghi1jk');
         await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
         

})   


})


test.describe('Modal Window is called "Registration', () => {

test.beforeEach(async ({page}) => {
    const email = `mike+aqa${Date.now()}@gmail.com`

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
})
    
    test('Modal Window is called "Registration"', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
})
})





         //await page.getByText('Name required', { exact: true }).click();


    //   await page.getByRole('textbox', { name: 'Email' }).fill('igst196@mail.com');
    //   await page.getByRole('textbox', { name: 'Password' }).fill('rK5nDaZ!!gqFiyG');
    //   await page.getByRole('button', { name: 'Login' }).click();

