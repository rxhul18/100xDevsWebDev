const { default: mongoose } = require("mongoose")


const Connection = async () => {
    await mongoose.connect("mongodb+srv://mindpuzzledev:mindpuzzledev@mindpuzzledev.txfq8.mongodb.net/100x-todo")
    console.log("Succesfully connected to database");
}

module.exports = Connection