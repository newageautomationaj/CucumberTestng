package stepDefinitions;

import java.util.Map;

import cucumber.api.java.en.Given;
import utilities.ExcelHandler;

public class TestDataReadingSteps {
	
	@Given("Read Test Data for TestCase_{int}")
	public void read_Test_Data_for_TestCase_(Integer int1) throws Throwable {
		Map<String, String> testDataMap = ExcelHandler.getTestDataInMap("./testData/TestData.xlsx", "TestData_001", "TC_001");
		System.out.println(testDataMap.get("Skill3"));
	}

}
