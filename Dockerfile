# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the server dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the server will run on
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
