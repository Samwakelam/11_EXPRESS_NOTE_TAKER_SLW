const express = require('express');
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// --- process.env -----------------------------------------------------------
// meaning: process enviroment, this will read the port that the deployed application will use.  
// ------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));

// meaning: on slash make these routes applicable 
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// // --- GetNotes -----------------------------------------------------------
// // function to read and return the db.Json file contents. 
// // It has to be asyncronus to stop in the ajax call and get the .then() 
// // property to function. 
// // utf8 tells the computer what language you want to receive the read file data in.
// // Turns out this is very important. 
// // ------------------------------------------------------------------------
// const getNotes = async () => {
// 	return fs.readFileSync('./db/db.json', "utf8", function (err, data) {
// 		console.log("POST err =", err);
// 		if (err) throw err;
// 		let storedData = JSON.parse(data)
// 		console.log("POST data =", storedData);
// 		return JSON.parse(storedData);
// 	});
// };

// // --- postNotes -----------------------------------------------------------
// // function is writing the session storage to the perssistanat file storage. 
// // it does happen each time a new note is posted. 
// // JSON.stringify is turning the object into a string to be written to the file. 
// // ------------------------------------------------------------------------
// const postNotes = async (notesToSave) => {
// 	return fs.writeFileSync('./db/db.json', JSON.stringify(notesToSave));
// };

// // --- dbHolder -----------------------------------------------------------
// // This is acting as my session storage which is sent to the database jason file.
// // this does mean that a get must always happen first or your file could be overwritten completely.
// // ------------------------------------------------------------------------
// let dbHolder = [];

// app.get("/api/notes", function (req, res) {
// 	console.log(" ------ Get request ----------");
// 	console.log("get request made");
// 	console.log("req.body get =", req.body, typeof req.body);
// 	getNotes()
// 		.then(function (dbData) {
// 			console.log("dbData 1 =", dbData, typeof dbData);
// 			// --- dbData --- this comes in as a string so JSON.parse turns it into a useable object. 
// 			dbHolder = JSON.parse(dbData);
// 			console.log("dbHolder get=", dbHolder, typeof dbHolder);
// 			res.json(dbHolder);
// 		})
// 		.catch(function (err) {
// 			console.log("woops", err);
// 		});
// });

// app.post("/api/notes", function (req, res) {
// 	console.log(" ------ Post request ----------");
// 	console.log("req.body post = ", req.body);
// 	const createNewObj = {
// 		id: uuidv4(),
// 		title : req.body.title,
// 		text : req.body.text
// 	}
// 	console.log("createNewObj = ", createNewObj, typeof createNewObj);
// 	dbHolder.push(createNewObj);
// 	console.log("dbHolder push=", dbHolder, typeof dbHolder);
// 	postNotes(dbHolder);
// 	res.json(dbHolder);
// });

// // --- "/api/notes/:id" -----------------------------------------------------------
// // This url that is hit, is whatever you want to name it. 
// // it doesnt match the url coming in. 
// // you can find the added parameter in the req.params 
// // ------------------------------------------------------------------------
// app.delete("/api/notes/:id", function (req, res) {
// 	console.log(" ------ Delete request ----------");
	
// 	console.log("req.params = ", req.params);
// 	console.log("req.params.id = ", req.params.id, typeof req.params.id);

// 	dbHolder = dbHolder.filter(function(currentValue){
// 		console.log("currentValue =", currentValue, typeof currentValue);
// 		console.log("currentValue.id =", currentValue.id, typeof currentValue.id);
// 		return currentValue.id !== req.params.id;
// 	})

// 	console.log("dbHolder delete =",dbHolder);
// 	postNotes(dbHolder);

// 	res.json(dbHolder);
// });



app.listen(PORT, function () {
	console.log('Listening on port:', PORT);
	console.log('Node server is running...');
})

