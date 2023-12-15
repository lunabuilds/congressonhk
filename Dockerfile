# Use a lightweight Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production && npm install -g nodemon

# Copy the entire application directory into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]
