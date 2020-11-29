## Tickets online store

An application built with a microservice architecture. Created this personal project for the purpose of learning and researching different tools
and techniques that may improve the current architecture of our application within our company. The microservices are built with NodeJS,
TypeScript, MongoDB, and a NATS streaming server and the client is built with React and NextJS. Document/Record versioning is implemented
to solve concurrency issues. The project is deployed in a docker container and managed by a kubernetes cluster.

## Installation and Setup Instructions

Clone down this repository. You will need `node`, `npm`, `skaffold`, `docker`, `kubernetes`  installed on your machine. 

Installation:

`npm install`  

To Start Server:

`skaffold dev`  

To Visit App:

`localhost:5000`  
