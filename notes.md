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
    name: name,
    pride: pride,
    age: age,
    gender: gender
}
```
### Operations on the API
1. Create a lion record => DONE
' POST - /lions' -  Create a lion record

2. Read lions record (all) => DONE
' GET - /lions' -  Get all lions in our data store.

3. Read a lion record (one) => DONE
' GET - /lions/:id' -  Get one lion, based on its id.

4. Update a lion record => DONE
' PUT - /lions/:id' Update one lion based on its id.

5. Delete a lion record => DONE
' DELETE - /lions:id' Delete one lion based on its id.

### Git branching for lions
1. git checkout -b lions-1
2. git add -A
3. git commit -m"<message>"
4. git status => clean

# YOUR TASK
- Create an API. with a complete CRUD.
- The subject should be the environment.
- You should have a minimum of 6 fields.
- Please create an "Operations on the API" document like we created above.
