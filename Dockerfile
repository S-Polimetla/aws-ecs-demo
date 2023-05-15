FROM node:18

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the necessary ports
EXPOSE 80

# Specify a entry command
CMD ["npm", "run", "start"]