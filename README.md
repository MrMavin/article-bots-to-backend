# Case Study: authenticate bot farms to a backend

My last project was about automation.
At some point I've scaled the application
to 400+ bots that were running in
different servers.

I was in need for a solution to receive data from
these bots. The first thing that came up in my mind
was a client-server model using sockets. Unfortunately
I had a short deadline and I had a RESTFul API
structure ready to be used.

This is why I've chosen `redis` to fulfil my needs.
Due to its speed in data storing and retrieving,
I've simulated a workflow similar to the client-server
model. This project is a small implementation
of this solution.

## Prerequisites

Before you continue, ensure you meet the following requirements:

* You can run bash scripts
* You have installed `node` and `npm`
* There is a running `redis` instance listening at port 6379
* There are at least 2GB of available ram

## How to run

* Install `node_modules` by running `npm install`
* Build `typescript` source code by running `npm run build`
* Serve the web app by running `npm run serve`
* Visit `http://localhost:3000/` and make sure that you can see the first three allowed hosts
* Run the bots by running `sh ./scripts/run_many_clients.sh`