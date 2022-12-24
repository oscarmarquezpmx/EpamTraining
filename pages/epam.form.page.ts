
import { Locator, Page } from "@playwright/test";

interface IEpamForm {
    readonly textBoxFirstName: Locator;
    readonly textBoxLastName: Locator;
    readonly textBoxEmail: Locator;
    readonly comboBoxInquiryReason?: Locator;
    readonly textBoxPhone?: Locator;
    readonly textBoxCompany?: Locator;
    readonly textBoxPosition?: Locator;
    readonly comboBoxLocation?: Locator;
    readonly comboBoxCity?: Locator;
    readonly comboBoxHowDidYouKnow: Locator;
    readonly comboOption: Locator;

}

export class EpamFormPage implements IEpamForm {
    // Mandatory Fields
    readonly textBoxFirstName: Locator;
    readonly textBoxLastName: Locator;
    readonly textBoxEmail: Locator;


    //Optional Fields
    readonly comboBoxInquiryReason: Locator;
    readonly textBoxPhone: Locator;
    readonly textBoxCompany: Locator;
    readonly comboBoxPosition: Locator;
    readonly comboBoxLocation: Locator;
    readonly comboBoxCity: Locator;

    readonly comboBoxHowDidYouKnow: Locator;
    comboOption: Locator;


    constructor(page: Page) {

        this.textBoxFirstName = page.locator("[name=user_first_name]");
        this.textBoxLastName = page.locator("[name=user_last_name]");
        this.textBoxEmail = page.locator("[name=user_email]");


        //Optional Fields
        this.comboBoxInquiryReason = page.locator(".select2-selection__rendered").nth(0);
        this.textBoxPhone = page.locator("[name=user_phone]");
        this.textBoxCompany = page.locator("[name=user_company]");
        this.comboBoxPosition = page.locator(".select2-selection__rendered").nth(1);
        this.comboBoxLocation = page.locator(".select2-selection__rendered").nth(2);
        this.comboBoxCity = page.locator(".select2-selection__rendered").nth(4);
        this.comboBoxHowDidYouKnow = page.locator(".select2-selection__rendered").nth(5);
        //this.comboOption = page.locator(".select2-results__option >> text=Press Inquiry");
    }
    // define the objects in the page



    async fillForm(page: Page, name: string, lastname: string, email: string, inquieryReason: string, phone: string, company: string, position: string, location: string, city: string, howDid: string) {
        await this.textBoxFirstName.type(name);
        await this.textBoxLastName.type(lastname);
        await this.textBoxEmail.type(email);


        //Optional Fields
        await this.comboBoxInquiryReason.click();
        await this.pickOption(page, inquieryReason);
        await this.textBoxPhone.type(phone);
        await this.textBoxCompany.type(company);
        await this.comboBoxPosition.click();
        await this.pickOption(page, position);
        await this.comboBoxLocation.click();
        await this.pickOption(page, "Maldives");
        await this.comboBoxLocation.click();
        await this.pickOption(page, location);
        //await page.locator(".select2-selection__rendered").nth(4).click();
        await this.comboBoxCity.click();
        await this.pickOption(page, city);
        await this.comboBoxHowDidYouKnow.click();
        await this.pickOption(page, howDid);
    }

    async pickOption(page: Page, option: string) {
        await page.locator(`.select2-results__option >> text=${option}`).click();
    }



}