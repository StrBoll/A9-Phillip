
const { resourceFromAttributes } = require('@opentelemetry/resources');
const { ATTR_SERVICE_NAME } = require('@opentelemetry/semantic-conventions');

const { NodeSDK } = require('@opentelemetry/sdk-node');

const {
   getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');

const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');

const {
   ConsoleMetricExporter,
   PeriodicExportingMetricReader,
} = require('@opentelemetry/sdk-metrics');

//Instrumentations
const { ExpressInstrumentation } = require("opentelemetry-instrumentation-express");
const { MongoDBInstrumentation } = require("@opentelemetry/instrumentation-mongodb");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");

// My changes
const {OTLPTraceExporter} = require('@opentelemetry/exporter-trace-otlp-proto');
const {OTLPMetricExporter} = require('@opentelemetry/exporter-metrics-otlp-proto');

// Metric data not being sent to Jaeger UI, OpenTelemetry docs say prometheus exporter needed to show metric data
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');


const sdk = new NodeSDK({
   resource: resourceFromAttributes({
       [ATTR_SERVICE_NAME]: "todo-service"
   }),

   traceExporter: new OTLPTraceExporter,

   metricReader: new PeriodicExportingMetricReader({
       exporter: new OTLPMetricExporter({
       url: 'http://localhost:9090/api/v1/otlp', // according to prometheus with oltp docs 
       
}),}),
   /*
  metricReader: new PrometheusExporter({
    port: 9464, // from docs (I put ss in my assignment word doc)
  }),*/

   instrumentations: [
       getNodeAutoInstrumentations(),
       new ExpressInstrumentation(),
       new MongoDBInstrumentation(),
       new HttpInstrumentation()],
 });

sdk.start();
