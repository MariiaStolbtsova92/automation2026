import test from "@playwright/test";



test.describe('Find elements by XPath, CSS, GetBy method', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('')
})

test('find Sign in CSS', async ({ page }) => {
    const signInBtnCss = page.locator('.header_signin');
    await signInBtnCss.highlight()
})

test('find Sign in XPath', async ({ page }) => {
    const signInBtnXpath = page.locator("//button[contacts(@class, 'header_signin')]");
    await signInBtnXpath.highlight()
})

test('find Sign in getBy', async ({ page }) => {
    const signInBtnGetBy = page.getByRole ('button', {name: 'Sign In'})
    await signInBtnGetBy.highlight()
})

})


test.describe('Find elements in headers', () => {

test.beforeEach(async ({ page }) => {
    await page.goto('')
})

test('find text Home', async ({ page }) => {
    const header = page.locator('header');
    const headerHome = header.getByText ('Home');
    await headerHome.highlight()
})

test('find text About', async ({ page }) => {
    const header = page.locator('header');
    const headerAbout = header.getByText('About');
    await headerAbout.highlight()
})

test('find text Contacts', async ({ page }) => {
    const header = page.locator('header');
    const headerContacts = header.getByText('Contacts');
    await headerContacts.highlight()
})

})