# Intro to API and CRUD

## CRUD
    - Create - POST
    - Read - GET
    - Update - PUT (PATCH)
    - Delete - DELETE

### Why an API?
    - Provide data for consumption by "front-end"
    - Implies an interface (endpoint)
        - (URL) https://whatever.com/create-user

## Lions API
- Purpose: Store data on lions, and server that data for consumption

```
{
    id: id,
    name: name,
    pride: pride,
    age: age,
    gender: gender
}
```
### Operations on the API
1. Create a lion record
' POST - /lions' -  Create a lion record

2. Read lions record (all)
' GET - /lions' -  Get all lions in our data store.

3. Read a lion record (one)
' GET - /lions/:id' -  Get one lion, based on its id.

4. Update a lion record
' PUT - /lions/:id' Update one lion based on its id.

5. Delete a lion record
' DELETE - /lions:id' Delete one lion based on its id.
