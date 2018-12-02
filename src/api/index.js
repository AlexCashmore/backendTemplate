import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import createDocument from './createDocument';
import fetchDocument from './fetchDocument';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		console.log('hello');
		res.send('welcome');
	});
	api.get('/Document',(req,res)=>{
		res.send('hello!');
	});
	api.post('/createDocument', createDocument);
    api.get('/Documents/:shortId',  fetchDocument);

	return api;
}
