var PanelController = require("lens").PanelController;
var AltmetricsView = require("./altmetrics_view");

var AltmetricsController = function(document, config, altmetricsService) {
  this.document = document;
  this.config = config;
  this.altmetricsService = altmetricsService;
};

AltmetricsController.Prototype = function() {
  this.createView = function() {
    return new AltmetricsView(this, this.config, this.altmetricsService);
  };

  this.getAltmetrics = function() {
    
  };
};

AltmetricsController.Prototype.prototype = PanelController.prototype;
AltmetricsController.prototype = new AltmetricsController.Prototype();

module.exports = AltmetricsController;