import test, { expect } from "@playwright/test";
import { GaragePage } from "../pom/pages/GaragePage";
import {HomePage} from "../pom/pages/HomePage";
import { SignInForm } from "../pom/forms/SignInForm";
import { AddCarForm } from "../pom/forms/AddCarForm"
import { testUser1 } from "../test-data/validUsers";

test.describe('Garage tests', () => {
    let garagePage: GaragePage;
    let homePage: HomePage;
    let signInForm: SignInForm;
    let addCarForm: AddCarForm;


    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
        addCarForm = new AddCarForm(page);

        await homePage.navigate();
        await homePage.openSignInForm();
        await signInForm.signInWithCredentials(testUser1.email, testUser1.password);
        await expect(garagePage.pageHeading).toContainText('Garage');
        await garagePage.openAddCarForm();
    })
    
    test('Add new car - BMW X5', async () => {
        // await addCarForm.selectBrand('BMW');
        // await addCarForm.selectModel('X5');
        // await addCarForm.enterMileage('999');
        // await addCarForm.clickAddCarButton();
        await addCarForm.addNewCar('BMW', 'X5', '999')
        //await addCarForm.verifyCarIsAdded('BMW X5', '999');
        // await expect(addCarForm.successMessage).toBeVisible();
        // await expect(addCarForm.lastAddedCarName).toHaveText('BMW X5');
    })

    test('Add new car - Audi Q7', async () => {
        // test.step('Adding Audi Q7 to Garage', async () => {
        //     await app.addCarForm.addNewCar('Audi', 'Q7', '999')
        // })
        // test.step('Verifying Audi Q7 to Garage', async () => {
        //     await app.garagePage.verifyCarIsAdded('Audi', 'Q7', '999')
        // })
        
        await addCarForm.addNewCar('Audi', 'Q7', '999')
        //await addCarForm.verifyCarIsAdded('Audi Q7', '999');
        // await expect(addCarForm.successMessage).toBeVisible();
        // await expect(addCarForm.lastAddedCarName).toHaveText('Audi Q7');
    })

    test('Add new car without mileage', async () => {
        //await addCarForm.addNewCar('Audi', 'Q7', '')
        await addCarForm.selectBrand('BMW');
        await addCarForm.selectModel('X5');
        await expect(addCarForm.addCarButton).toBeDisabled();
    })

    test('Close "Add a car" form via "Cancel" button', async () => {
        await addCarForm.clickCancelButton();
        await expect(addCarForm.formTitle).not.toBeVisible();
    })

    test('Close "Add a car" form via close icon', async () => {
        await addCarForm.clickCloseIcon();
        await expect(addCarForm.formTitle).not.toBeVisible();
    })
})