// mongo mongodb://localhost/demo 01-insert.js

var result = db.users.insert({
    "name": "Andrea Balducci",
    "phone": "555-000-1234",
    "address": {
        "line1": "Via M. della Libertà 3",
        "line2": "Proximo srl",
        "city": "Castelfidardo",
        "zipcode": NumberInt(60022),
        "country": "IT"
    },
    "age": NumberInt(42)
});

print('insert:', result)