### MONGO DB commands
use database_name - uses or creates existing/new db
cls - clears terminal
show dbs/databases - lists db

db.createCollection("collectionName") - creates collection

### Create:
db.collectionName.insertOne({field:"value"})
db.collectionName.insertMany([{field:"value"},{field:"value"}])

### Read:
db.collectionName.findOne(condition)
db.collectionName.find(condition)


eg: 
> db.users.find({age:{$in : [21,23,27]}})
> db.users.find({$and : [{age:{$gt:20},city:"Hyderabad"}]})
- finding elements($all doesnt see order)
> db.users.find({skills:{$all:["C","Python"]}})
- selecting only specific elements from all documents
> db.users.find({},{name:1,_id:0}) -> _id:1 by default

### Update:
db.collectionName.updateOne(condition)
db.collectionName.updateMany(condition)
eg:
> db.users.updateOne({name:"Ravi"},{$set:{name:"Ravi kumar",age:30}})
> db.users.updateOne({name:"Ravi"},{$unset:{age:""}})
- push value into array
> db.users.updateOne({name:"Ravi"},{$addToSet:{skills:"Python"}}) -> doesnt allow duplicates
> db.users.updateOne({name:"Ravi"},{$push:{skills:"Python"}})    -> allows duplicates
- push multiple elements into array
> db.users.updateOne({name:"Ravi"},{$push:{skills:{$each:["Java","React"]}}})
- delete an element from document
> db.users.updateOne({name:"Ravi"},{$pop:{skills:+1}}) -> deletes last element(-1 for first element)
> db.users.updateOne({name:"Ravi"},{$pull:{skills:"Java"}}) -> deletes specific element


### Delete:
db.collectionName.deleteOne(condition)
db.collectionName.deleteMany(condition)

Operations in nested documents
eg:
> db.users.updateOne({name:"Ravi"},{$set:{"address.street":"KPHB"}}) -->"address.street"


