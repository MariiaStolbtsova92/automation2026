import { test, expect, chromium } from '@playwright/test';

test.describe('Fixtures', () => {

    test('open wikipedia without fixtures', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://wikipedia.org')

    })
})