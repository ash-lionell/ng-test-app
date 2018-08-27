//hello.world=3;

module.exports = function(){
  this.Given(/^user is on the app landing page$/i,()=>{
    console.log("hey")
    browser.sleep(5000);
    hello.world=3;
  });
};
