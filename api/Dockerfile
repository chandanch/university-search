# Base Image
FROM node:18-alpine

# Set Work directory
WORKDIR /src/app

COPY package*.json ./

# Install Dependencies
RUN npm ci && npm cache clean --force

# Copy to files to Work dir
COPY . .

# Build Application
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
