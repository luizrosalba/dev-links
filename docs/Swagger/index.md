# Swagger

https://blog.restcase.com/6-most-significant-changes-in-oas-3-0/

- Editor :

https://editor.swagger.io/

- https://app.swaggerhub.com/home

- API: Applications Programming Interface

- Defines how two pieces of software talk to each other

- Swagger and Open Api Specifications are ways to define an API (what it does etc.)

- Api Definition describes what requests are available and what the response looks like for each request

Swagger and Open API Specification are designed for Rest APIs

Rest: Representational State Transfer

### Open API Initiative (OAI)

organization created by a consortium of industry experts

create evolve a neutral description format

### Swagger

Editor , codegen , ui , swaggerHub

### API definition file

Describe all things you can do with an API

lists every request you can make

how to make the request

what the response looks like

Lets you design the api before implementing it

help with automated testing

can be used to automatically generate docs

Swaggers was a specification for how to create an API definition file

After swagger 2.0 the specifications become the Open API Specification (OAS)

Swagger is now a collection of tools that use the Open API Specification

Many peaople still refer OAS as swagger

API means a collection of related requests

### Anatomy of a request

1. Method - URL - Query Params

Example Request URL :

https://api.example.com/v2/user

Scheme : https

Host : api.example.com

basepath : /v2

path : /user

Method: Get post put delete ...

Params : https://api.example.com/v2/{user-id}/connections?degrees=2

path Params : {user-id}
query params : degrees

2. Headers

secutity means auth and authz

none - basic auth - api key - Oauth

3. Body

Treated as a param

you can specify a schema for the request body

response body is most often json which has a schema as the requested body

### YAML / JSON

To create api definition files you can use YAML / JSON

YAML : YAML Ain't markup Langueage

Used for data not for content

Compared to JSON and XML minimize characters

used for configuration files rather than files passed over the wab like json

levels are indicated by white spaces NOT TAB INDENT

```
- XML

<name>
   <firstName>ABC</fistName>
   <lastName>DEV</lastName>
</name>

- JSON

name: {
   "firstName": "ABC"
   "lastName": "DEV"
}

- YAML identation is critical

name:
   firstName: ABC
   lastName: DEV
```

Types are determined from context

Strings do not need quotes

Yaml has lists

cart: - part_no: 123
description: "abc"

| means preserve lines and spaces

> means fold lines

ex:

```
speech: |
    ABC
        DEF

returns =>

ABC
    DEF

speech: >
    ABC
        DEF

returns =>

ABC DEF

```

Schemas : not officially part of YAML used for req and res bodies

use $ref to indicate a reference

typically goes in a definitions section

```
title: Wizard's Choice
author: Delight Games
sections:
  - id: intro
    content:
      - >
        You are a young wizard seeking treasure and glory. You
        are walking along a path in the forest. Night has just
        fallen and you're thinking about how it might be a good
        idea to find a campsite. After all, you are in goblin
        territory, and it is dangerous to travel in the dark.
      - Suddenly you smell something awful. What do you do?

    choices:
      - description: Dive flat on your face
        id: dive

      - description: Hide
        id: hide

      - description: Stop and listen
        id: stop

  - id: hide
    content:
      - >
        When in doubt, hiding is a fine strategy. And the
        forest offers plenty of cover.
      - >
        Now inside the brush, you can see green, glowing eyes
        staring at you from behind a tree several paces away.
        You hear a snort as several green-skinned goblins charge
        out of hiding toward you.
      - What do you do?

    choices:
      - description: Fight the goblins
        id: fight

      - description: Run away
        id: run

```

### OPEN API specification basics

```
# Every Open API file needs this
swagger: '2.0'
# Document metadata
info:
 version: "0.0.1"
 title: Example Photo Service

# URL data
host: api.example.com
basePath: /photo
schemes:
 - https
# Endpoints
paths:
 # Photo albums
 /album:
 # Get one or more albums
 get:
 # Query parameters
 parameters:
 # Starting date
 - name: start
    in: query
    required: false
    type: string

 # Ending date
 - name: end
    in: query
    required: false
    type: string

 # Incomplete response (to finish later)
 responses:
 # Response code
    200:
    description: Successful response

 # Photo album
 /album/{id}:
 # Get an album
 get:
    # Query parameters
    parameters:
    # Album id
        - name: id
        in: path
        required: true
        type: integer

 # Customer level
 - name: Access-level
    in: header
    required: false
    type: string

 # Incomplete response (to finish later)
 responses:
 # Response code
    200:
    description: Successful response
```
