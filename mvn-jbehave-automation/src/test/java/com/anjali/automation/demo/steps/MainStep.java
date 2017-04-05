package com.anjali.automation.demo.steps;

import org.jbehave.core.annotations.Given;
import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;

import com.anjali.automation.demo.serenity.AlertStep;

import net.thucydides.core.annotations.Steps;

/**
 */
public class MainStep {

	@Steps
	AlertStep alertStep;

	@Given("enter web-address")
	public void openHomePage() throws InterruptedException {
		alertStep.open_page();
		Thread.sleep(10000L);
	}

	@When("click on try button")
	public void When_type_word() throws InterruptedException {
		this.alertStep.click_try_button();
	}

	@Then("alert get appear to handle")
	public void handle_alert1() throws InterruptedException {
		System.out.println("In New Alert");
		alertStep.call_alert();
	}
    }
