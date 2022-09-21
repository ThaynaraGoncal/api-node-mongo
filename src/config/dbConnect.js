import mongoose from "mongoose"

mongoose.connect("mongodb+srv://thaynara:Tata489837@books.eu7oyde.mongodb.net");

let db = mongoose.connection;

export default db;