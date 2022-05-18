package com.automation.steps;

import com.automation.pages.AccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class AccountSteps {
    @And("^I click on sign out button$")
    public void iClickOnSignOutButton() {
        new AccountPage().clickOnSignOut();
    }

    @Then("^Verify that Sign Out link is displayed$")
    public void verifyThatSignOutLinkIsDisplayed() {
        Assert.assertTrue(new AccountPage().verifySignOutLink());
    }

    @And("^Fill all mandetory fields$")
    public void fillAllMandetoryFields() {
    new AccountPage().selectMrRadio();
    new AccountPage().setFirstnameField("comet");
    new AccountPage().setLastnameField("planet");
    new AccountPage().setPasswordField("123456");
    new AccountPage().setAddress("2,Lonsoovd villa");
    new AccountPage().setCityField("Newpagecity");
    new AccountPage().selectState("Alaska");
    new AccountPage().setZipCode("08459");
    new AccountPage().selectCountry("United States");
    new AccountPage().setMobileNum("09847392829");
    new AccountPage().setFutureReference("rswrw");


    }

    @And("^I Click on 'Register' button$")
    public void iClickOnRegisterButton() {
        new AccountPage().clickOnRegisterButton();
    }


    @Then("^Verify message 'My Account'$")
    public void verifyMessageMyAccount() {
        Assert.assertEquals("Account not created","MY ACCOUNT",new AccountPage().getMyAccountText());
    }
}
