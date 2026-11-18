Opentelemetry is an API/SDK(s) for generating and collecting telemetry data including metrics, logs and traces. 

The pre-requisites for Node.js with OpenTelemetry are foremost the Node library which can be installed with brew install node on mac OS, and Typescript or Javascript. 

We first have to initialize the node project with npm init -y which creates a package.json in our repo. Then, we can create a simple HTTP server via any method we prefer. The library goes over a way to do this via express in Typescript or javascript. 

Once our http server is running (via any method you please) we must install some of the bare minimum dependencies:

npm install @opentelemetry/sdk-node \
  @opentelemetry/api \
  @opentelemetry/auto-instrumentations-node \
  @opentelemetry/sdk-metrics \
  @opentelemetry/sdk-trace


Some of the instrumentation:


1. Tracing - Tracing allows us to observe requests while they move throughout a system. Think of it as the overarching path a request follows. The uses of this, according to the OpenTelemetry ASK service, include debugging nondeterministic behavior, sniffing out performance bottlenecks, and for high-end system analysis. 

2. Metrics - A measurement of a service captured at its runtime. This allows us to create alerts for performance, availability, and reliably collect and aggregate statistics such as request trends, memory usage, currently active requests and more. 

3. Logs - A log is a timestamped record that can be configured to track a wide variety of information. Often times it is used with OpenTelemetry to track trace context. 

