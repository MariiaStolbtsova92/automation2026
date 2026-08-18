import test, {expect} from "@playwright/test";

test.describe('CodeGen Sign in tests', () => {

test.beforeEach(async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
})

    test('Successful sign in', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email' }).fill('igst196@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('rK5nDaZ!!gqFiyG');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Garage');
});


    test('Sign in with empty email', async ( {page}) => {
  await page.getByRole('textbox', { name: 'Email' }).focus();
  await page.getByRole('textbox', { name: 'Email' }).blur();
  await page.getByRole('textbox', { name: 'Password' }).fill('rK5nDaZ!!gqFiyG');
  await expect(page.getByText('Email required')).toBeVisible();
});



    test('Sign in with empty password', async ( {page}) => {
  await page.getByRole('textbox', { name: 'Email' }).fill('qwdwwd@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).focus();
  await page.getByRole('textbox', { name: 'Password' }).blur();
  await expect(page.getByText('Password required')).toBeVisible();
});




    test('Sign incorrect email', async ({page}) => {
  await page.getByRole('textbox', { name: 'Email' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).fill('asdasdsaddsasd');
  await expect(page.getByText('Email is incorrect')).toBeVisible();
});


    test('Sign in with wrong credentials', async ({page}) => {
  await page.getByRole('textbox', { name: 'Email' }).fill('qweqwewq@efef.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('qwdwqdwqdwd');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Wrong email or password')).toBeVisible();
});

    })

