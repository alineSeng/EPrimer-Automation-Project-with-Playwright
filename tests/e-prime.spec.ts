import { test, expect } from '@playwright/test';
import { Functions } from './functions';


test('Navigate to url', async ({ page }) => {
  const functions = new Functions(page);
  await functions.navigate_to(functions.url);

  await functions.check_title(functions.title);
  
});

test('Passing case functionality', async ({ page }) => {
  const functions = new Functions(page);
  
  await functions.navigate_to(functions.url);
  await functions.passsing_case_functionality();


 
});

test('None passing case1 functionality', async ({ page }) => {
  const functions = new Functions(page);
  
  await functions.navigate_to(functions.url);
  await functions.none_passing_case_functionality();


 
});

test('None passing case2 functionality ', async ({ page }) => {
  const functions = new Functions(page);
  
  await functions.navigate_to(functions.url);

  await functions.none_passing_case2_functionality();


 
});