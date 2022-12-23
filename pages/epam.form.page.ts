
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


    constructor(page: Page) {

        this.textBoxFirstName = page.locator("[name=user_first_name]");
        this.textBoxLastName = page.locator("[name=user_first_name]");
        this.textBoxEmail = page.locator("[name=user_email]");


        //Optional Fields
        this.comboBoxInquiryReason = page.locator(".select2-selection__rendered").nth(0);
        this.textBoxPhone = page.locator("[name=user_phone]");
        this.textBoxCompany = page.locator("[name=user_company]");
        this.textBoxPosition = page.locator(".select2-selection__rendered").nth(1);
        this.comboBoxLocation = page.locator(".select2-selection__rendered").nth(2);
        this.comboBoxHowDidYouKnow = page.locator(".select2-selection__rendered").nth(6);
    }
    // define the objects in the page



    async fillForm(name: string, lastname: string, email: string, inquieryReason: string, phone: string, company: string, position: string, location: string, howDid: string) {
        this.textBoxFirstName.type(name);
        this.textBoxLastName.type(lastname);
        this.textBoxEmail.type(email);


        //Optional Fields
        this.comboBoxInquiryReason.selectOption(inquieryReason);
        this.textBoxPhone.type(phone);
        this.textBoxCompany.type(company);
        this.textBoxPosition.type(position);
        this.comboBoxLocation.selectOption(location);
        this.comboBoxHowDidYouKnow.selectOption(howDid);
    }



}