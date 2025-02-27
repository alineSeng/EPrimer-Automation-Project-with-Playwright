import type { Page } from 'playwright';
import { test, expect } from '@playwright/test';

export class Functions{
    readonly page: Page;
    readonly url: string = 'https://exploratorytestingacademy.com/app/'
    readonly title: string = 'Eprimer - e-prime checking tool'; 
    constructor(page: Page) {
        this.page = page;
    }

    async navigate_to(url: string) {
        await this.page.goto(url);
    }

    async check_title(title: string) {
        const description = this.page.getByText('This test target is from');
        
        await expect(this.page).toHaveTitle(title);
        await expect(description).toContainText('This test target is from collections of');
    }

    async passsing_case_functionality() {
        const text_input = this.page.getByRole('textbox', { name: 'Text:' })
        const submit_button = this.page.getByRole('button', { name: 'Check For E-Prime' })
        const discouraged_words = this.page.getByText('Discouraged Words:')

        await text_input.click();
        await text_input.fill('LLama lala');
        await submit_button.click();

        await expect(discouraged_words).toContainText('0');
    }

    async none_passing_case_functionality() {
        const text_input = this.page.getByRole('textbox', { name: 'Text:' })
        const submit_button = this.page.getByRole('button', { name: 'Check For E-Prime' })
        const discouraged_words = this.page.getByText('Discouraged Words:')

        await text_input.click();
        await text_input.fill("discouragedWords['be'] = 'be\'discouragedWords['being'] = 'being\'discouragedWords['been'] = 'been\'discouragedWords['am'] = 'am\'discouragedWords[\"isn't\"] = \"isn't\"discouragedWords[\"are\"] = \"are\"discouragedWords[\"aren't\"] = 'aren't\"discouragedWords[\"was\"] = \"was\"discouragedWords[\"wasn't\"] = \"wasn't\"discouragedWords[\"were\"] = \"were\"discouragedWords[\"weren't\"] = \"weren't\"discouragedWords[\"is\"] = \"is\"discouragedWords[\"ain't\"] = \"ain't\"discouragedWords[\"i'm\"] = \"i'm\"discouragedWords[\"amn't\"] = \"amn't\"");
        await submit_button.click();

        await expect(discouraged_words).toContainText('21');
      

    }

    
    async none_passing_case2_functionality() {
        const text_input = this.page.getByRole('textbox', { name: 'Text:' })
        const submit_button = this.page.getByRole('button', { name: 'Check For E-Prime' })
        const discouraged_words = this.page.getByText('Discouraged Words:')
        const caracter_limit = ['be', 'being', 'been', 'am', 'isn\'t', 'are', 'aren\'t', 'was', 'wasn\'t', 'were', 'weren\'t', 'is', 'ain\'t', 'i\'m', 'amn\'t'];
        //const caracter_limit = ["&", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        const caracter_input = this.page.locator("#eprimeoutput")
        const caracter_input_contains = await caracter_input.textContent();

        await text_input.clear();
        await text_input.click();
        await text_input.fill("been be be am is lalallalallala fhifhoihf ");
     
        await submit_button.click();

        let found = 0
        for (let i = 0; i < caracter_limit.length; i++) {
            if (caracter_input_contains === caracter_limit[i]) {
                found = found + 1;
                console.log(caracter_input_contains);
                await expect(discouraged_words).toContainText(found.toString());
                console.log(found);
            }
        }
        

    }

}