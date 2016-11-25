var collection = db.users;

collection.drop();

for(var c = 0; c < 100000; c++)
{
    collection.insert({
        _id: NumberInt(c),
        "name" : "User_"+c
    });
}