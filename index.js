var controller = require('ga4gh-base-controller');

var options =   {
  grpc: {
    port: 50051,
    host: "0.0.0.0"         // Accept requests from any
  },
  http: {
    port: 3000
  },
  controller: controller
};

var gateway = require('ga4gh-node-gateway');
console.log(gateway)
gateway.main(options);
