# central

the central identity API service in a cluster.

# Author

Xiao Zhang

# Motivation

multiple apps in the cluster are availabel to the clients in the outer world. Therefore the identities of the clients need to be verified.

# Architecture

This server runs as a service on the cluster. Data is stored in the central database, therefore a high availability solution is possible.

## App

Any service that needs to communicate with sibling service, or needs to share the same database.

## Database

Any privileged app can create and databases.

Any database has only maintainer(app).

All apps authorized by the maintainer have read/write access to the database.
