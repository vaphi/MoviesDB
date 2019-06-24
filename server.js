require("dotenv").config(); //yarn add dotenv
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const jwt = require('jsonwebtoken');


const db = require("./models");
const passport = require("./utils/passport");

const app = express();

const PORT = process.env.PORT || 3001;

//serve i[ static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/api-routes")(app);
app.use(passport.initialize());

app.post("/login", (req, res) => {
	const{email, password } = req.body;

	db.User.findOne({
		where: {
		email
		}
	})
	.then(user => {
		if (!user) 
			return res.status(401).json({sucess: false, msg: "Authenication failed"})
		
			if (password === user.password) {
				const token = jwt.sign(user.toJSON(), process.env.CHAT_JWT_SECRET);
				res.json({success: true, token: 'JWT ' + token});
			}
			else {
				res.status(401).send({success: false, msg: 'Authentication failed. Email or Password is Incorrect.'});
			}
		})
		.catch(err => console.log(err));
});
		/*  hashing password
		user.comparePassword(password, (err, isMatch) => {
			if (isMatch && !err) {
				const token = jwt.sign(user.toJson(), settings.secret);
				res.json({success: true, token: 'JWT ' + token});
			} else {
				res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
			}
		})
		*/

// API Routes
app.get("/api/message", passport.authenticate('jwt', {session: false}), (req, res) => {
	res.json({ message: "Hello World"});
})

app.get("/api/test", passport.authenticate('jwt', { session: false }), (req, res) => {
	res.send("it's working!!");
})

//Send every rerquest to the React app
//Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//console.log server is up and running
db.sequelize.sync({force: false})
.then(() => {
	app.listen(PORT, function () {
		console.log(`🌎 ==> Server now on port ${PORT}!`);
	});
  })
.catch(err => console.log(err));
//create a GET route
