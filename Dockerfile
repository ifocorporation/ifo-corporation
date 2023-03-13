# Base image
FROM node:16.14.0-alpine

RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --non-interactive --cache-folder ./ycache

# Copy all files to the container
COPY . .

# Expose port 5173 for development
EXPOSE 5173

# Start the app in development mode
CMD ["yarn", "dev"]
