/*
The goal of this file is to:

1. Create a brand new database
2. Create a new data store called "comments", which is
a container to put all of our comments in.
3. Add a new comment to our "comments" data store.
4. Make sure it saves!

*/
console.log("data base");
let db;

var openRequest = indexedDB.open("kts_db", 2);

// 1. This function created our new data store:
openRequest.onupgradeneeded = function (e) {
  var db = e.target.result;
  console.log("running onupgradeneeded");

  // create new data stores:
  if (!db.objectStoreNames.contains("comments")) {
    var storeOS = db.createObjectStore("comments", {
      keyPath: "id",
      autoincrement: true,
    });
  }
};

// 2. This function fires when the database has been opened.
// This is where we will add new comments to the datastore:
openRequest.onsuccess = function (e) {
  console.log("running onsuccess");
  db = e.target.result;
  // call this function to create a new comment:
  addDataToCommentsDataStore(db);
  readCommentsFromDataStore(db);
};

const addDataToCommentsDataStore = (db) => {
  // this is the place where we can add data to our datastores:
  var transaction = db.transaction(["comments"], "readwrite");
  var comments = transaction.objectStore("comments");
  console.log(comments);
  var request = comments.add({
    id: 5,
    name: "Joe",
    email: "roni@hotmail.com",
    comment: "IYKYK ",
    timestamp: "5/8/2022 5:18:16PM",
  });

  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
  };
  request.onsuccess = function (e) {
    console.log("The comment has been successfully added!");
  };

  // Commit: close connection
  transaction.oncomplete = () => {
    db.close();
  };
};

const readCommentsFromDataStore = (db) => {
  var transaction = db.transaction("comments", "readonly");
  var objectStore = transaction.objectStore("comments");
  var cursorRequest = objectStore.openCursor();
  var commentList = [];
  cursorRequest.onsuccess = function (event) {
    if (event.target.result) {
      // if(event.target.result.value['id'] && event.target.result.value['id'] == value){ //compare values
      commentList.push(event.target.result.value);
      // }
      event.target.result["continue"]();
    }
  };

  transaction.oncomplete = function (event) {
    console.log(commentList);
    // callback(agregate); // return items
  };
};

// 3. Handles errors:
openRequest.onerror = function (e) {
  console.log("onerror!");
  console.dir(e);
};
