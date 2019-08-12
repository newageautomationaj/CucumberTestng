$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Customers.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.background({
  "name": "Below are the common steps for every scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Open URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_Open_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_can_view_Dashboard()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administration]\u003e but was:\u003c[admin-demo.nopcommerce.com]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginPageSteps.user_can_view_Dashboard(LoginPageSteps.java:107)\r\n\tat ✽.User can view Dashboard(file:Features/Customers.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add New Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "Click on Add New Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Add_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can view Add New Customer Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_can_view_Add_New_Customer_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter Customer Info",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_enter_Customer_Info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can view Confirmation Message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_can_view_Confirmation_Message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps for every scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Open URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_Open_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_can_view_Dashboard()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administration]\u003e but was:\u003c[admin-demo.nopcommerce.com]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginPageSteps.user_can_view_Dashboard(LoginPageSteps.java:107)\r\n\tat ✽.User can view Dashboard(file:Features/Customers.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search Customer by EmailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "Enter Customer EmailID",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.enter_Customer_EmailID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should found Email in the Search Table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_found_Email_in_the_Search_Table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps for every scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Open URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_Open_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_can_view_Dashboard()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administration]\u003e but was:\u003c[admin-demo.nopcommerce.com]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginPageSteps.user_can_view_Dashboard(LoginPageSteps.java:107)\r\n\tat ✽.User can view Dashboard(file:Features/Customers.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_click_on_Customers_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Customers_Menu_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search Customer by Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UAT"
    }
  ]
});
formatter.step({
  "name": "Enter Customer FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.enter_Customer_FirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Customer LastName",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.enter_Customer_LastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should found Name in the Search Table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_should_found_Name_in_the_Search_Table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});