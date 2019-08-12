package utilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class PropertiesFileReader {
	
	public Properties getProperty() throws FileNotFoundException {
		FileInputStream fis = new FileInputStream("./resources/propertiesFiles/config.properties");
		Properties prop = new Properties();
		try {
			prop.load(fis);
		}catch (Exception e) {
			System.out.println("Exception : "+e);
		}
		return prop;
	}
	
	public Properties getTestDataProperty() throws FileNotFoundException {
		FileInputStream fis = new FileInputStream("./resources/propertiesFiles/testData.properties");
		Properties prop = new Properties();
		try {
			prop.load(fis);
		}catch (Exception e) {
			System.out.println("Exception : "+e);
		}
		return prop;
	}
}
