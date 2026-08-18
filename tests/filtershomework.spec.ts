import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('')
})

test('findBtnEl', async ({ page }) => {
    const btnByRole = page.getByRole('button')
    console.log(await btnByRole.count())
})


test('filterHasTxt', async ({ page }) => {
    const btnByRole = page.getByRole('button')
    const signIn = btnByRole.filter({ hasText: 'Sign In'});
    await signIn.highlight()
})