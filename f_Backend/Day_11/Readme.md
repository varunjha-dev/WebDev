what is data validation and why we need it??
const userSchema = new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
}) 
here, we haven't giuven any validation and someone has given username of 1lakh size and all these will harm the database

suppose i have a model named User
User.create() :- write a document in database
User.find() :- Read all the document
User.findById(ID) :- find and return the document that has given ID
User.findByIdAndDelete(ID) :- find the documnet by the given id and delete it from the database
User.findByIdAndUpdate(id,update) :- find the document by id and then change the given field 


lets move to schema validation
what do we mean by validation?
supose we are making databse of Instagram and we want those who want to use instagram must be above age of 13. fo this we can simply write min:14 in our schema, now if the user whose age is less than 14 will not enter in our database
// similarly there is max, max:70 now the user above 70 will not use the instagram

// some schema types
required: true -> used when we want any field that is must to give the user 
suppose we have written required:true in username and email, now user must have to give username and email so that they will register in the instagram

unique:true/false :- used when we want any field to be unique in the database , suppose user with same email Id doesn't register in our instagram

minLength: and maxLength: -> used when we want size of any string field should be in a specified range

default:value -> used when we want to give a default value to any field

trim:true  -> used when we want to trim the spaces given by the user suppose in emailId "     saurav@gmail.com     ";

lowercase: true -> used when we want any field to be stored in lowercase


// now suppose we have created a field named gender that only expects value male,female and others but user gave somethine else like hasjdifhks,lkfodp. Then it this situation we have to validate the given input by the user. for this we can use enum
enum:["male","female","others"] --> now user can give only thse three and anything other than this will give error

Instead os enum , we have a validator function 
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value))
                    throw new Error("Invalid Gender");
        }
    }



now suppose i want to update the data in the db, suppose i want to change the gender of a document from male to smale if we hit this request then it changes the documnet gender but here we can see the gender(smale) is invalid and we have also used validator then why did this happen??
so, whenever we update any thing then we have to say that please check all the validation before updating

so, in our patch request we have a option where we have to do runValidators:true
app.patch("/user",async (req,res) =>{
    try {
        const {_id:id, ...update} = req.body;
        await User.findByIdAndUpdate(id,update,{"runValidators":"true"});
        res.send("Updated Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})



// we have a timestamp it is very necessary as we have store sometime when a prticular is created in our db and when did he updated their data
const userSchema = new Schema({},{timestamps:true})


immutable:true -> used when we want any field can't be changed
now suppose i have used this in emailId feild now when we changes the field by sending patch req it doesn't changes the emailId but also it doesn't not throws any error but it has to throw an error
till now we are validating in schema level now we have to validate in API level

why we need API level validation??
API level validation means validate the data/input before calling the db.The Main reason We need this Validation so that Database can't gets called unnecessary as we have to pay the bill of database as all the queries that we are using takes time and it increase the bill of the database

when we do API level Validation, It gives us some adavantage
first davantage is that user gets response immediately
second adavantage is we are preventing database from unnecessary calling

# Data Validation in MongoDB with Mongoose

## What is Data Validation?
Data validation is the process of ensuring that the data entered into the database is correct, formatted properly, and does not cause any issues.

### Why Do We Need Data Validation?
If we don't validate the data, users might enter invalid or extremely large data, which can:
- Harm the database
- Cause performance issues
- Lead to incorrect information being stored

### Example Without Validation
```javascript
const userSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    gender: String
});
```
Here, we haven't added any validation. If someone enters a name with 100,000 characters, it will be stored in the database, leading to problems.

## Mongoose CRUD Operations
In Mongoose, we can perform CRUD operations using the following methods:
- `User.create(data)`: Inserts a new document into the database
- `User.find()`: Retrieves all documents
- `User.findById(ID)`: Finds a specific document by ID
- `User.findByIdAndDelete(ID)`: Deletes a document by ID
- `User.findByIdAndUpdate(ID, update)`: Updates a document by ID

## Schema Validation
Validation ensures that only valid data gets stored in the database.

### Example: Age Restriction
For Instagram, users must be at least 14 years old:
```javascript
const userSchema = new Schema({
    age: { type: Number, min: 14 }
});
```
If a user under 14 tries to register, they will receive an error.

### Other Validation Options
- `max: 70`: Users above 70 cannot register
- `required: true`: Ensures the field is mandatory
- `unique: true`: Ensures uniqueness (e.g., email should be unique)
- `minLength` & `maxLength`: Restrict string length
- `default`: Set a default value
- `trim: true`: Removes extra spaces
- `lowercase: true`: Converts input to lowercase

### Enum Validation
Restrict values to a predefined list. Example:
```javascript
gender: {
    type: String,
    enum: ["male", "female", "others"]
}
```
If a user enters an invalid gender, they will receive an error.

### Custom Validator Function
```javascript
gender: {
    type: String,
    validate(value) {
        if (!["male", "female", "others"].includes(value)) {
            throw new Error("Invalid Gender");
        }
    }
}
```

## Validating Data on Update
By default, Mongoose does not validate data when updating. To enforce validation, use `runValidators: true`.

Example:
```javascript
app.patch("/user", async (req, res) => {
    try {
        const { _id: id, ...update } = req.body;
        await User.findByIdAndUpdate(id, update, { runValidators: true });
        res.send("Updated Successfully");
    } catch (err) {
        res.send("Error " + err.message);
    }
});
```

## Timestamps
Tracking when a document is created or updated:
```javascript
const userSchema = new Schema({}, { timestamps: true });
```

## Immutable Fields
Prevents a field from being changed after creation:
```javascript
email: {
    type: String,
    immutable: true
}
```
If a user tries to change their email, it won't update but also won't show an error. To enforce an error, add API-level validation.

## API-Level Validation
Instead of validating in the database, we can validate data before sending it to the database. This helps in:
1. **Reducing Database Calls** (which saves costs)
2. **Improving User Experience** (immediate error feedback)

Example:
```javascript
app.post("/register", (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || age < 14) {
        return res.status(400).send("Invalid Data");
    }
    // Proceed with database insertion
});
```

## Conclusion
Using schema-level and API-level validation ensures data integrity, saves database costs, and improves user experience.
