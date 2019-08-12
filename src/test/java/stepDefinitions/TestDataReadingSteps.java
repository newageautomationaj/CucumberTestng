package stepDefinitions;

import java.util.Map;
import java.util.Properties;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.ExcelHandler;
import utilities.PropertiesFileReader;
import utilities.TestDataHandler;

public class TestDataReadingSteps {
	
	PropertiesFileReader pfr = new PropertiesFileReader();
	TestDataHandler testData = new TestDataHandler();
	
	
	@Given("Read Test Data for TestCase_{int}")
	public void read_Test_Data_for_TestCase_(Integer int1) throws Throwable {
		
		Properties prop = pfr.getTestDataProperty();
		
		Map<String, String> testDataMap = ExcelHandler.getTestDataInMap(prop.getProperty("testDataPath"), prop.getProperty("sheetName"), "TC_001");
		System.out.println(testDataMap.get("Skill1"));
		
		testData.setTestDataMap(testDataMap);
	}
	
	@When("Read Test Data for Skill Two")
	public void read_Test_Data_for_Skill_Two() {
		Map<String, String> testDataMap = testData.getTestDataMap();
		System.out.println(testDataMap.get("Skill2"));
	}

	@Then("Read Test Data for Skill Three")
	public void read_Test_Data_for_Skill_Three() {
		Map<String, String> testDataMap = testData.getTestDataMap();
		System.out.println(testDataMap.get("Skill3"));
	}

}
