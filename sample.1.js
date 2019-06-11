var idbAdapter = new LokiIndexedAdapter('DATABASETEST');
// idbAdapter.getDatabaseList(function(result) {
//     // result is array of string names for that appcontext ('finance')
//     result.forEach(function(str) {
//       console.log(str);
//     });
//   });
// let database = idbAdapter.loadDatabase('usersDb.json');
var db = new loki('usersDb.json', {
  autosave: true,
  autoload: true,
  adapter: idbAdapter,
  autosaveInterval: 1000
});

console.log(db);
//idbAdapter.loadDatabase('usersDb.json');
db.loadDatabase({}, function (result) {
  db.addCollection('users1');
  console.log('result: ' + result);
 console.log(db.getCollection("users1").find());
console.log(db);
 idbAdapter.saveDatabase('usersDb.json', JSON.stringify(db), function(result) {});
 console.log("DNOE")
});
//console.log(db.getCollection("users").find());
// var users = db.getCollection("users");
// console.log("users: " + users);
// if(!users) {
//   alert("users null");
//     users = db.addCollection("users");
// }

console.log(db.getCollection("users1"));