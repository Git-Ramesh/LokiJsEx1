var idbAdapter = new LokiIndexedAdapter('DATABASETEST');
var db = new loki('usersDb.json', {
    autosave: true,
    autoload: true,
    adapter: idbAdapter,
    autosaveInterval: 1000
});
db.loadDatabase({}, function (result) {
  console.log(result);
  // put your log call here.
  // Load collection
  let users =db.getCollection("users");
  // Update collection record
  users.chain().find({id: 1}).update(user => user.age = 23);
  
  idbAdapter.saveDatabase('usersDb.json', JSON.stringify(db), function(result) {
    console.log(result);
  });
  // Remove collection record
  console.log(users.chain().find({id: 2}).remove());
  idbAdapter.saveDatabase('usersDb.json', JSON.stringify(db), function(result) {
    console.log(result);
  });
  logObject(db);
});
console.log(idbAdapter);
// idbAdapter.getKeyList(function(result) {
//   console.log("result: " + result);
// });
// idbAdapter.getDatabaseList(function(result) {
//   console.log("db list: " + result);
// });
// // Create a Collection
// var users = db.getCollection("users");
// console.log("users: " + users);
// if(!users) {
//   alert("users null");
//     users = db.addCollection("users");
// }
// // Inserting records into a collection
// users.insert({id: 1, name: 'Ramesh', age: 23, address: 'Hyderabad'});
// users.insert({id: 2, name: 'Mark', age: 46, address: 'USA'});
// users.insert({id: 3, name: 'Jhon', age: 32, address: 'Kerala'});
// users.insert({id: 4, name: 'Mani', age: 34, address: 'Hyderabad'});
// users.insert({id: 5, name: 'Hari', age: 23, address: 'Hyderabad'});
// users.insert({id: 6, name: 'Rajesh', age: 23, address: 'Hyderabad'});

// //Geting first user
// console.log(users.get(1));
// // Find by name
// console.log(users.find({'name': 'Ramesh'})); // Return an array
// console.log(users.findObject({name: 'Ramesh'})); // Directly returns the target object
// // Find by gratter than
// console.log(users.find({age: {'$gt': 30}}));
// // Find all users
// console.log(users.find());

// // Filtering
// var data = users.chain()
//     .find({address: 'Hyderabad'})
//     .where(obj => obj.name.indexOf("R") != -1)
//     .simplesort('name')
//     .data();
    
// console.log("Data: " + JSON.stringify(data));

// // Creating a view
// console.log("VIEWS")
// var view = users.addDynamicView("hyderabadUsers");
// view.applyFind({address: 'Hyderabad'});
// view.applySort((user1, user2) => user1.age > user2.age);

// console.log(view.data());

// // Updating the user
// var user = users.get(1);
// user.age = 24;
// users.update(user);
// users.chain().find({id: 1}).update(user =>  user.age = 23);
// console.log("USERS AFTER UPDATE")
// console.log(users.find());
// db.saveDatabase();

// // Removing user
// var userToRemove = users.get(2);
// users.remove(userToRemove);
// console.log("USERS AFTER REMOVE")
// console.log(users.find());
// // MapReduce
// console.log('mapReduce');
// users.mapReduce(user => user.address, addressArr => {
//     console.log(addressArr);
// });
// console.log(users.find());
// // Save Database
// db.saveDatabase();

// var entryCount = db.getCollection("users").count();
// console.log("number of entries in database : " + entryCount);
// //db.saveDatabase();
// idbAdapter.getDatabaseList(function(result) {
//     // result is array of string names for that appcontext ('finance')
//     result.forEach(function(str) {
//       console.log(str);
//     });
//   });

//   idbAdapter.getCatalogSummary(function(entries) {
//     entries.forEach(function(obj) {
//       console.log("app : " + obj.app);
//       console.log("key : " + obj.key);
//       console.log("size : " + obj.size);
//     });
//   });
function logObject(obj) {
  console.log(JSON.stringify(obj));
}
