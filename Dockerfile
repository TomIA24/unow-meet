# Stage 1: Build the Next.js app
FROM node:20 AS build

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json, pnpm-lock.yaml, and .npmrc if applicable
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install 

# Copy the rest of the application into the container
COPY . .

# Build the Next.js app statically
RUN pnpm run build

# Export the app as static files (if using Next.js static export)
RUN pnpm run export

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the exported static site from the build stage
COPY --from=build /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
