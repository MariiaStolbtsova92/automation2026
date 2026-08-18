import test, { expect } from "@playwright/test";

test.describe('Sign In Assertions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('toBeVisible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign in'})).toBeVisible();
  })

  test('toHaveText', async ({ page }) => {
    await expect(page.locator('.hero-descriptor_title')).toHaveText('Do more!');
  })


  test('toHaveTex2', async ({ page }) => {
    await expect(page.getByText('Do more!')).toHaveText('Do more!');
  })


  test('toHaveCount', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Instructions'})).toHaveCount(2);
  })

  test('toHaveCount2', async ({ page }) => {
    await expect(page.locator('img[alt="Instructions"]')).toHaveCount(2);
  })

})