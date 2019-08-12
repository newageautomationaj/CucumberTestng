package listeners;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import com.aventstack.extentreports.ExtentReports;

public class TestListeners extends ExtentReportListener implements ITestListener {
	
	private static ExtentReports extent;

	@Override
	public void onTestStart(ITestResult result) {
		System.out.println("Test started ................");
		
	}

	@Override
	public void onTestSuccess(ITestResult result) {
		System.out.println("PASS");
		
	}

	@Override
	public void onTestFailure(ITestResult result) {
		System.out.println("FAIL");
		
	}

	@Override
	public void onTestSkipped(ITestResult result) {
		System.out.println("SKIP");
		
	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onStart(ITestContext context) {
		System.out.println("Execution started !!!!!!!!!!!!!!!!!!!");
		extent = setup();
		
	}

	@Override
	public void onFinish(ITestContext context) {
		System.out.println("Execution Completed !!!!!!!!!!!!!!!!!!!");
		extent.flush();
		System.out.println("Generated Reports . . .");
		
	}

}
