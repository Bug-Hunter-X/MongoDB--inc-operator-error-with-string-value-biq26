```javascript
// Correct use of $inc operator
db.collection('myCollection').updateOne( { "_id": 1 }, { $inc: { "count": 10 } } );
```