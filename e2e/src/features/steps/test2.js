const { defineSupportCode } = require("cucumber");

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(({setDefaultTimeout}) => {
    setDefaultTimeout(30*1000);
});
defineSupportCode(function({ Given }) {
  Given(/^user is on the app landing page$/i, async()=>{
    await browser.waitForAngularEnabled(false)
    await browser.waitForAngularEnabled().then(val=>console.log("angular synchronization : ",val))
    await console.log("hey 1")
    await browser.get(browser.params.url)
    await browser.sleep(1000).then(()=>console.log("hey 2"));
    await element(by.xpath("//button[text()='Test App']")).click()
    await expect(element(by.xpath("//label[text()='Hello World!']"),"The text was not displayed.").isDisplayed()).to.eventually.be.true
    await console.log("hey 3")
  });
})
