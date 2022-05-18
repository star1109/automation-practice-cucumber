$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccountPage.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "As a User I want to create account successfully",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 24734341800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter Email address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on \u0027Create an account\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Fill all mandetory fields",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on \u0027Register\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify message \u0027My Account\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 66768900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7588118100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iEnterEmailAddress()"
});
formatter.result({
  "duration": 63032000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.clickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 57380800,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.fillAllMandetoryFields()"
});
formatter.result({
  "duration": 5674001500,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 3351100300,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.verifyMessageMyAccount()"
});
formatter.result({
  "duration": 31137500,
  "status": "passed"
});
formatter.after({
  "duration": 638789000,
  "status": "passed"
});
formatter.uri("signpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4508187300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify that \u0027AUTHENTICATION\u0027 message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2009656800,
  "status": "passed"
});
formatter.match({
  "location": "SignPageSteps.verifyThatAUTHENTICATIONMessageIsDisplayed()"
});
formatter.result({
  "duration": 23681600,
  "status": "passed"
});
formatter.after({
  "duration": 644561100,
  "status": "passed"
});
formatter.uri("womenCategoryPage.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "As a user I want to perform below actions on automationPractice website",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6628462100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Women link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify message \u0027WOMEN\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.iClickOnWomenLink()"
});
formatter.result({
  "duration": 8160424200,
  "status": "passed"
});
formatter.match({
  "location": "WomenPageSteps.verifyMessageWOMEN()"
});
formatter.result({
  "duration": 23798300,
  "status": "passed"
});
formatter.after({
  "duration": 632665400,
  "status": "passed"
});
});