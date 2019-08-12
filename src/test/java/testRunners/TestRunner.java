package testRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.PickleEventWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

@CucumberOptions(
        features = {"./featureFiles/"},
        glue = {"stepDefinitions"},
        dryRun = false,
        monochrome = true,
        plugin = {"pretty","html:target/site/cucumber-pretty","json:target/cucumber.json"},
        tags = {"@UAT"}
)
public class TestRunner {

    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception{
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(dataProvider = "features")
    public void feature(PickleEventWrapper eventWrapper, CucumberFeatureWrapper cucumberFeature) throws Throwable{
       // testNGCucumberRunner.runCucumber(cucumberFeature.);
    	testNGCucumberRunner.runScenario(eventWrapper.getPickleEvent());
    }

    @DataProvider
    public Object[][] features(){
        //return testNGCucumberRunner.provideFeatures();
    	return testNGCucumberRunner.provideScenarios();
    }

    @AfterClass
    public void tearDownClass()throws Exception{
        testNGCucumberRunner.finish();
    }
}
