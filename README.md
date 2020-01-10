# central

the central identity API service in a cluster.

# Author

Xiao Zhang

# Motivation

multiple apps in the cluster are availabel to the clients in the outer world. Therefore the identities of the clients need to be verified.

# Architecture

This server runs as a service on the cluster. Data is stored in the central database, therefore a high availability solution is possible.

The interfaces are open for 2 types of users:
1. Service: an API server providing a service
2. Client: the client which is allowed to access certain services

Sometimes a client is itself a service, in this case the service and client permissions are managed separately.

## Service

A service must have an opening API available to the outer world. It must be registered with the central service with an admin whose has the role of 'appadmin'.

## Client

A client is an enduser requiring to access a service.

## Access Control

[accesscontrol](https://www.npmjs.com/package/accesscontrol) is used to implement a hybrid RBAC and ABAC.
