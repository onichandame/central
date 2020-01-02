# central

the central identity service

# Author

Xiao Zhang

# Motivation

multiple apps needs to communicate with each other or share the same block of data.

# Function

This service keeps track of identities of all apps and database.

## App

Any service that needs to communicate with sibling service, or needs to share the same database.

## Database

Any privileged app can create and databases.

Any database has only maintainer(app).

All apps authorized by the maintainer have read/write access to the database.
