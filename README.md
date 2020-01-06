# central

the central identity API service.

# Author

Xiao Zhang

# Motivation

multiple apps needs to communicate with each other securely. Therefore 2 requirements are designed to meet.
1. identity: register new projects, authenticates users for certain projects
2. catalog: lists available APIs for users

# Architecture

The 

## App

Any service that needs to communicate with sibling service, or needs to share the same database.

## Database

Any privileged app can create and databases.

Any database has only maintainer(app).

All apps authorized by the maintainer have read/write access to the database.
