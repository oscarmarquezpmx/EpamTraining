
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
    readonly textBoxPosition: Locator;
    readonly comboBoxLocation: Locator;
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
        this.textBoxPosition = page.locator(".select2-selection__rendered").nth(1);
        this.comboBoxLocation = page.locator(".select2-selection__rendered").nth(2);
        this.comboBoxHowDidYouKnow = page.locator(".select2-selection__rendered").nth(6);
        this.comboOption = page.locator(".select2-results__option >> text=Press Inquiry");
    }
    // define the objects in the page



    async fillForm(page: Page, name: string, lastname: string, email: string, inquieryReason: string, phone: string, company: string, position: string, location: string, howDid: string) {
        await this.textBoxFirstName.type(name);
        await this.textBoxLastName.type(lastname);
        await this.textBoxEmail.type(email);


        //Optional Fields
        await this.comboBoxInquiryReason.click();
        await this.comboOption.click();
        //await this.pickOption(page, "Press Inquiry");
        await this.textBoxPhone.type(phone);
        await this.textBoxCompany.type(company);
        await this.textBoxPosition.type(position);
        //await this.comboBoxLocation.selectOption(location);
        //await this.comboBoxHowDidYouKnow.selectOption(howDid);
    }

    async pickOption(page: Page, option: string) {
        //readonly optionObj: Locator;
        // this.comboOption = page.locator(`.select2-results__option >> text=${option}`);
        this.comboOption = page.locator(".select2-results__option >> text=Press Inquiry");
        await this.comboOption.click();
        //await (await page.waitForSelector(`select2-results__option >> text=${option}`, { timeout: 2000 })).click;



    }



}