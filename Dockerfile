# Set the base image to "node" with tag "14".
# This image has node already configured.
FROM node:14

# Set the working directory for any subsequent RUN, CMD, COPY
# and other commands. If the dir does not exist, create it.
WORKDIR /usr/src/app

# Copy files from the local file system into the container's
# filesystem, in the path specified. Since WORKDIR points to
# /usr/src/app, the package*.json will be copied to that dir.
COPY . .

# Install npm dependencies.
RUN npm install

# Port 8080 is inteded to be exposed. This line is for doc
# purposes. To actually expose the port, use the option -p
# when running «docker container run».
EXPOSE 8080

# Only one CMD should exist per Dockerfile. It sets the defaults
# of how an executing container is executed.
CMD [ "node", "server.js" ]