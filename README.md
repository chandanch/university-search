# University Search App

Search for Universities around the world with option to sort by University Name!

---

## Prerequisites

1. Install node.js: [Node.js](https://nodejs.org/en/)

2. Install Docker desktop: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

## Web App

University search web application built using react.js

### Setup

1. Navigate to **_webapp_** folder: `cd webapp`
1. Install dependencies: `npm install`

### Run

1. Run Web App: `npm start`

### Build

1. Build Application: `npm run build`

---

## API

### Setup

1. Navigate to **_api_** folder: `cd api`
1. Install dependencies: `npm install`

### Run

1. Run Web App: `npm start`
2. Run in watch mode: `npm run start:dev`

### Build

1. Build Application: `npm run build`

### Tests

1. Run unit tests: `npm run test`
2. Run unit tests in watch mode: `npm run test:watch`
3. Generate Code Coverage Report: `npm run test:cov`

---

## Run Using Docker

Start **Docker** or **Docker desktop**

### Web App

1. Navigate to web app: `cd webapp`
1. Build web app image: `docker build -t university-search-webapp:1.0.0 .`
1. Deploy the image to docker container: `docker run -d -p 3000:80`

### API

1. Navigate to web app: `cd api`
1. Build web app image: `docker build -t university-search-api:1.0.0 .`
1. Deploy the image to docker container: `docker run -d -p 30001:3001`

---
