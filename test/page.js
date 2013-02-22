// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get and start the application server module
var app = require('../app');
var Browser = require('zombie');
var assert = require('assert');

describe("main page:", function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000', debug: false });
  });
  
  before(function(done) {
    this.browser.visit('/', done);
  });
  
  after(function(done) {
    app.server.close(done);
  });
  
  it("should load page", function() {
    assert.equal(this.browser.location.pathname, "/");
    assert.ok(this.browser.success);
    assert.equal(this.browser.text("title"), "Hackey");
  });

  it("should contain 'area' block", function() {
    assert.ok(this.browser.query("div#area"));
  });

});