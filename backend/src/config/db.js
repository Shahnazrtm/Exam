const mongoose = require("mongoose") // new

mongoose
	.connect(process.env.MongoURL)
	.then(() => {
		console.log("Connected mongodb")
	}).catch((err)=>{
        console.log("Not connected mongodb")
    })