//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ac83c30a16d29cd6005207a')
    },{
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ac723bae317790bb7623191')
    },{
        $set: {
            name: 'Prakhan'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });



    // db.close();
});
