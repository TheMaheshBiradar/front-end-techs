package com.anjali.automation.demo.pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.annotations.Step;
@DefaultUrl(value="http://toolsqa.wpengine.com/handling-alerts-using-selenium-webdriver")
public class HomePage extends PageObject {
	
	public WebDriver driver;
	@FindBy(xpath = "//*[@id='content']/p[4]/button")
	WebElementFacade trybutton;

	@Step
	public void click_try_button() throws InterruptedException {
		Thread.sleep(1000L);
		this.trybutton.click();
		Thread.sleep(1000L);
	}

	public void getalert() {
		try {
			WebDriverWait wait = new WebDriverWait(this.driver, 10L);
			Alert alert = (Alert) wait.until(ExpectedConditions.alertIsPresent());

			String s = alert.getText();
			System.out.println(s);
			alert.accept();
			System.out.println("Accepted the alert successfully.");
		} catch (Throwable e) {
			System.err.println("Error came while waiting for the alert popup. " + e.getMessage());
		}
	}
}
