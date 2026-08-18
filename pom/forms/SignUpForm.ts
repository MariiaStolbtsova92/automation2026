import { Locator } from '@playwright/test'
import { BaseForm } from './BaseForm';

export class SignUpForm extends BaseForm {
    private readonly nameField: Locator = this.page.locator('#signupName');
    private readonly lastNameField: Locator = this.page.locator('#signupLastName');
    private readonly emailField: Locator = this.page.locator('#signupEmail');
    private readonly passwordField: Locator = this.page.locator('#signupPassword');
    private readonly repeatPasswordField: Locator = this.page.locator('#signupRepeatPassword');
    
    public readonly registerButton: Locator = this.page.getByRole('button', { name: 'Register' });
    public readonly emptyNameMessage: Locator = this.page.getByText('Name required');
    public readonly wrongFormatNameMessage: Locator = this.page.getByText('Name is invalid');
    public readonly wrongMumberOfCharactersNameMessage: Locator = this.page.getByText('Name has to be from 2 to 20 characters long');
    public readonly emptyLastNameMessage: Locator = this.page.getByText('Last name required');
    public readonly wrongFormatLastNameMessage: Locator = this.page.getByText('Last name is invalid');
    public readonly wrongMumberOfCharactersLastNameMessage: Locator = this.page.getByText('Last name has to be from 2 to 20 characters long');
    public readonly emptyEmailMessage: Locator = this.page.getByText('Email required');
    public readonly wrongFormatEmailMessage: Locator = this.page.getByText('Email is incorrect');
    public readonly emptyPasswordMessage: Locator = this.page.getByText('Password required');
    public readonly wrongFormatPasswordMessage: Locator = this.page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    public readonly emptyRepeatPasswordField: Locator = this.page.getByText('Re-enter password required');
    public readonly wrongRepeatPasswordField: Locator = this.page.getByText('Passwords do not match');


    async UserSignUp(name: string, lastName: string, email: string, password: string, repeatPassword: string) {
        await this.enterName(name);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.repeatPassword(repeatPassword);
        await this.clickRegisterButton();
    }
    
    async enterName(name: string) {
       await this.nameField.fill(name); 
    }

    async enterLastName(lastName: string) {
       await this.lastNameField.fill(lastName); 
    }

    async enterEmail(email: string) {
       await this.emailField.fill(email); 
    }

    async enterPassword(password: string) {
       await this.passwordField.fill(password); 
    }

    async repeatPassword(repeatPassword: string) {
       await this.repeatPasswordField.fill(repeatPassword); 
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async triggerErrorOnField(fieldName: string) {
      let field: Locator;

      if (fieldName === "name") {
        field = this.nameField;
      } else if (fieldName === "lastName") {
        field = this.lastNameField;
      } else if (fieldName === "email") {
        field = this.emailField;
      } else if (fieldName === "password") {
        field = this.passwordField;
      } else if (fieldName === "repeatPassword") {
        field = this.repeatPasswordField;
      } 

      else {
        throw new Error('Wrong field name');
      }

      await field.focus();
      await field.blur();

    }


}