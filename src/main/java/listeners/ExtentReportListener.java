package listeners;

import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentReportListener {
	
	public static ExtentHtmlReporter report = null;
	public static ExtentReports extent = null;
	public static ExtentTest test = null;
	
	public static ExtentReports setup() {
		
		String reportLocation = "./reports/Extent_Reports.html";
		report = new ExtentHtmlReporter(reportLocation);
		report.config().setDocumentTitle("Automation Test Report");
		report.config().setReportName("Cucumber BDD Automation Test Report");
		report.config().setTheme(Theme.DARK);
		System.out.println("Extent Report location initialized . . .");
		report.start();
		
		extent = new ExtentReports();
		extent.attachReporter(report);
		extent.setSystemInfo("Application", "Demo_Test");
		extent.setSystemInfo("OS", System.getProperty("os.name"));
		extent.setSystemInfo("User Name", System.getProperty("user.name"));
		System.out.println("System info set in Extent Report . . .");
		
		return extent;
	}
	
	public static void testStepHendler(String testStatus, WebDriver driver, ExtentTest extentTest, Throwable throwable) {
		switch (testStatus) {
		case "FAIL":
			extentTest.fail(MarkupHelper.createLabel("Test Case is Failed : ", ExtentColor.RED));
			extentTest.error(throwable.fillInStackTrace());
			if(driver != null)
				driver.quit();
			break;
			
		case "PASS":
			extentTest.pass(MarkupHelper.createLabel("Test Case is Passed : ", ExtentColor.GREEN));
			break;

		default:
			break;
		}
	}
}
