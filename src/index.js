import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import DocumentGateway from "./api/Document/DocumentGateway";

(async function startup() {
let app = express();
/*FIX THIS BY ADDING MONGO, INJECT THE GATEWAY AND WE'RE OFF*/
/*const db = await MongoConnect(process.env.MONGO_HOST, __dirname);*/
app.locals.gateways = {
    rootDirectory: __dirname,
    /*db*/
    documentStore: new DocumentGateway(''),
};
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));


	app.server.listen(process.env.PORT || config.port, () => {
	});
});
}());
/*export default app;*/
