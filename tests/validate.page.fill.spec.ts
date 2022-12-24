import { test } from "@playwright/test";
import { EpamFormPage } from "../pages/epam.form.page";

test.describe(' Epam Form Test', () => {
    let myform: EpamFormPage;

    test.beforeEach(async ({ page }) => {

        myform = new EpamFormPage(page);



        await page.goto("https://www.epam.com/about/who-we-are/contact");
        // to do expect to check the page is loaded


    });


    test('fill the epam form', async ({ page }) => {
        let name = "oscar";
        let lastName = "marquez";
        let email = "some@gmail.com";
        let phone = "1232331";
        let company = "EPAM";
        let position = "Other";
        let inquieryReason = "Press Inquiry";
        let location = "Mexico";
        let city = "Apodaca";
        let howDid = "Event"
        await myform.fillForm(page, name, lastName, email, inquieryReason, phone, company, position, location, city, howDid);
        //await expect(myform.firstName).to.equal(name);
    });


});