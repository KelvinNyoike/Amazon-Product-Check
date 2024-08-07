import {test, expect} from "@playwright/test"
import exp from "constants"

test.beforeEach(async ({page}) =>{
    await page.goto('/')
    //await page.locator(".nav-logo-link nav-progressive-attribute").click()

    const dismissAlert = page.locator('//input[@type="submit" and @class="a-button-input" and @data-action-type="DISMISS"]')
    await dismissAlert.click()
    //await page.locator(".a-button-text", {hasText:'Dismiss'}).click()
})

test("Select Item", async({page})=> {
    const selectItem = page.locator('//*[@id="nav-xshop"]/a[1]')
    await selectItem.click()

    await page.locator('//*[@id="DealsGridScrollAnchor"]/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div/a/div[1]/div/div/div/img').click()
    await page.getByText('Add to Cart').first().click()
    //await expect(page.getByText(' Added to Cart')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Added to Cart' })).toBeVisible()
}) 
