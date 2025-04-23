import { test } from '../tests/fixtures'
import { setup } from './testsetup';

setup();

test('Verify successful form submission with all required fields filled (Happy flow)', async ({ practiceFormPage }) => {
  await practiceFormPage.fillPracticeForm(1);
  await practiceFormPage.verifySubmitPracticeFormSuccess();
});

test('Verify display error when Mobile Number is missing (Unhappy Flow)', async ({ practiceFormPage }) => {
  await practiceFormPage.fillPracticeForm(0);
  await practiceFormPage.verifySubmitPracticeFormUnSuccess();
});