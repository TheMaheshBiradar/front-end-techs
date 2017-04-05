package com.anjali.automation.demo.serenity;

import org.openqa.selenium.WebDriver;

import com.anjali.automation.demo.steps.AlertTestPage;

import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Screenshots;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.steps.ScenarioSteps;

public class AlertStep extends ScenarioSteps{
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
private WebDriver driver;
  AlertTestPage a;
  
  @Step
  public void open_page()
  {
    this.a.open();
    this.a.getDriver().manage().window().maximize();
  }
  
  @Step
  public void click_try_button()
    throws InterruptedException
  {
    this.a.click_try_button();
  }
  
  @Step
  @Screenshots(forEachAction=true)
  public void call_alert()
    throws InterruptedException
  {
    Serenity.takeScreenshot();
    Thread.sleep(1000L);
    this.a.getalert();
  }
}
