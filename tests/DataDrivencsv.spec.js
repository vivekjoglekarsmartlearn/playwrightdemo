// Include modules
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Read and parse the CSV file
const records = parse(
    //fs.readFileSync(path.join(__dirname, "C://Vivek_Training//PlaywrightVivek//tests//testdata//testdata.csv")),
    fs.readFileSync("C:/Vivek_Training/PlaywrightVivek/tests//testdata/testdata.csv"),
    {
        columns: true,
        skip_empty_lines: true
    }
);

// Iterate over the records and write test cases
for (const record of records) {
    test('Data driven testing using CSV in playwright ', async ({ page }) => {
        // Wait and navigate to URL
        await page.waitForTimeout(5000);
        await page.goto('https://www.google.com/');
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(record.Skill1);
        await page.locator('#APjFqb').press('Enter');
        await page.waitForTimeout(5000);
    });
}
