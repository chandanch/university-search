# Get the base node image
FROM node:18-alpine as build

# Set the working dir for container
WORKDIR /app

# Copy the package json file first
COPY package*.json .

# Install all the project dependencies
RUN npm ci && npm cache clean --force

# Copy other project files
COPY . .

# Build the application
RUN npm run build

# Stage 2 - Server the Application with Nginx Server

# Use nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Load the nginx configuration into Nginx Server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
