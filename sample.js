var db = new loki('usersDb.json');
// Create a Collection
var users = db.getCollection("users");
console.log("users: " + users);
if(!users) {
    users = db.addCollection("users");
}
// Inserting records into a collection
users.insert({id: 1, name: 'Ramesh', age: 23, address: 'Hyderabad'});
users.insert({id: 2, name: 'Mark', age: 46, address: 'USA'});
users.insert({id: 3, name: 'Jhon', age: 32, address: 'Kerala'});
users.insert({id: 4, name: 'Mani', age: 34, address: 'Hyderabad'});
users.insert({id: 5, name: 'Hari', age: 23, address: 'Hyderabad'});
users.insert({id: 6, name: 'Rajesh', age: 23, address: 'Hyderabad'});

// Geting first user
console.log(users.get(1));
// Find by name
console.log(users.find({'name': 'Ramesh'})); // Return an array
console.log(users.findObject({name: 'Ramesh'})); // Directly returns the target object
// Find by gratter than
console.log(users.find({age: {'$gt': 30}}));
// Find all users
console.log(users.find());

// Filtering
var data = users.chain()
    .find({address: 'Hyderabad'})
    .where(obj => obj.name.indexOf("R") != -1)
    .simplesort('name')
    .data();
    
console.log("Data: " + JSON.stringify(data));

// Creating a view
console.log("VIEWS")
var view = users.addDynamicView("hyderabadUsers");
view.applyFind({address: 'Hyderabad'});
view.applySort((user1, user2) => user1.age > user2.age);

console.log(view.data());

// Updating the user
var user = users.get(1);
user.age = 24;
users.update(user);
console.log("USERS AFTER UPDATE")
console.log(users.find());

// Removing user
var userToRemove = users.get(2);
users.remove(userToRemove);
console.log("USERS AFTER REMOVE")
console.log(users.find());
// MapReduce
console.log('mapReduce');
users.mapReduce(user => user.address, addressArr => {
    console.log(addressArr);
});
console.log(users.find());
// Save Database
db.saveDatabase();