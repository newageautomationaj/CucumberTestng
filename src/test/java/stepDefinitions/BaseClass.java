package stepDefinitions;


import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;
import utilities.PropertiesFileReader;

import java.util.Properties;


public class BaseClass {

    public WebDriver driver;
    public LoginPage lp;
    public AddCustomerPage addCust;
    public SearchCustomerPage searchCust;
    public static Logger logger;
    public Properties configProp;
    public PropertiesFileReader propFileReader;

    //Created for generating random string
    public static String randomString(int stringSize){
        String generateString = RandomStringUtils.randomAlphabetic(stringSize);
        return generateString;
    }
}
