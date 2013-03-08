// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get and start the application server module
var app = require('../app');
var Browser = require('zombie');
var assert = require('assert');
var util = require('util');

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

  it("should contain correct 'arena' svg element", function() {
    var arena = this.browser.query("svg#arena");
    assert.ok(arena);
    assert.equal(arena.getAttribute("version"), "1.1");
    assert.equal(arena.getAttribute("xmlns"), "http://www.w3.org/2000/svg");
    assert.equal(arena.getAttribute("xlink"), "http://www.w3.org/1999/xlink");
  });

  it("should draw arena border", function() {
    var arena = this.browser.query("svg#arena");
    var border = arena.querySelector("rect#arenaborder");
    assert.ok(border);
    
    assert.equal(border.getAttribute("x"), "20");
    assert.equal(border.getAttribute("y"), "20");
    assert.equal(border.getAttribute("width"), "772");
    assert.equal(border.getAttribute("height"), "500");

    assert.equal(border.getAttribute("stroke"), "blue");
    assert.equal(border.getAttribute("stroke-width"), "2");
    assert.equal(border.getAttribute("fill"), "none");
    
    //reference is 68*105, gate 7.32*2
    // 300x463;32, 400*617;43, 500*772;54*16, 600*926;65, 700*1080;57
  });

  it("should draw left gate", function() {
    var arena = this.browser.query("svg#arena");
    var gate = arena.querySelector("rect#gateleft");
    assert.ok(gate);
    
    assert.equal(gate.getAttribute("x"), "4"); //20-16
    assert.equal(gate.getAttribute("y"), "243"); // 20+(500-54)/2
    assert.equal(gate.getAttribute("width"), "16");
    assert.equal(gate.getAttribute("height"), "54");

    assert.equal(gate.getAttribute("stroke"), "blue");
    assert.equal(gate.getAttribute("stroke-width"), "2");
    assert.equal(gate.getAttribute("fill"), "none");
  });
  
});