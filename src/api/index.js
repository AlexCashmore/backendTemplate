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
	api.post('/createDocument',createDocument);
    api.get('/Documents/:shortId',  fetchDocument);

	return api;
}
/*

/!*!/!**
 * Created by Alex Cashmore on 16/10/2017.
 *!/
import express from 'express';
import { keepAnonOnly, keepAuthOnly } from '../gatekeeper';

import logoutEndpoint from './logout';
import authenticatedCheckEndpoint from './authenticated';

import editMedication from './medications/editMedication/index';
import createMedication from './medications/createMedication/index';
import searchMedications from './medications/searchMedications/index';
import searchApprovedMedications from './medications/searchApprovedMedications/index';
import fetchMedicationByShortId from './medications/fetchMedicationByShortId/index';
import approveMedication from './medications/approveMedicationByShortId/index';
import deactivateMedication from './medications/deactivateMedicationByShortId/index';

import searchPendingOrders from './orders/searchPendingOrders/index';
import fetchOrderByShortId from './orders/fetchOrderByShortId/index';
import fulfillOrder from './orders/fulfillOrder/index';

import fetchPatientPrescriptionHistory from './patient/fetchPatientPrescriptionHistory/index';
import fetchPatientByShortId from './patient/fetchPatientByShortId/index';

import searchPrescriptions from './prescriptions/searchPrescriptions/index';
import fetchRxByShortId from './prescriptions/fetchRxByShortId/index';
import verifyPrescription from './prescriptions/verifyPrescription';
import createPrescription from './prescriptions/createPrescription';

import fetchHcpByRegNo from './hcp/fetchHcpByRegNo';
import fetchPatientByNHI from './patient/fetchPatientByNHI';

import fetchPILByMedicationId from './pils/fetchPIL';
import publishPIL from './pils/publishPIL';
import savePIL from './pils/savePIL';

import exportDownloadToken from './reports/downloadToken';
import exportReportDownload from './reports/exportFullReport';
import exportRepeatFeeReportDownload from './reports/exportRepeatFeeReport';
import exportFinanceReportDownload from './reports/exportFinanceReport';

import cancelPatientIssue from './patientIssues/cancelIssue/index';
import fetchPatientIssuesByPatient from './patientIssues/fetchIssuesByPatient/index';
import resolvePatientIssue from './patientIssues/resolveIssue/index';
import searchPatientIssuesCallList from './patientIssues/searchIssuesCallList/index';
import removePatientFromCallList from './patientIssues/removePatientFromCallList/index';


// Authentication
import accountLogin from './account/login';
import changeAccountPassword from './account/changePassword';
import startAccountRecovery from './account/startRecovery';
import checkAccountRecovery from './account/checkRecovery';
import finishAccountRecovery from './account/finishRecovery';

// Call notes
import saveCallNote from './patient/saveCallNote';
import fetchCallNote from './patient/fetchCallNotes';

const v1 = express.Router();

// Authentication
v1.post('/account/login', keepAnonOnly, accountLogin);
v1.post('/account/recovery/start', keepAnonOnly, startAccountRecovery);
v1.post('/account/recovery/check', keepAnonOnly, checkAccountRecovery);
v1.post('/account/recovery/finish', keepAnonOnly, finishAccountRecovery);
v1.put('/account/password', keepAuthOnly, changeAccountPassword);


v1.get('/authenticated', authenticatedCheckEndpoint);
v1.post('/logout', keepAuthOnly, logoutEndpoint);

/!*
Medication Endpoints
 *!/
v1.get('/medications', keepAuthOnly, searchMedications);
v1.post('/medications', keepAuthOnly, createMedication);
v1.get('/medications/approved', keepAuthOnly, searchApprovedMedications);
v1.get('/medications/:shortId', keepAuthOnly, fetchMedicationByShortId);
v1.put('/medications/:shortId', keepAuthOnly, editMedication);
v1.put('/medications/:shortId/approve', keepAuthOnly, approveMedication);
v1.put('/medications/:shortId/deactivate', keepAuthOnly, deactivateMedication);
/!*
 PIL Endpoints
 *!/
v1.get('/medications/:shortId/pil', fetchPILByMedicationId);
v1.put('/medications/:shortId/pil', savePIL);
v1.put('/medications/:shortId/pil/publish', publishPIL);


v1.get('/orders/pending', keepAuthOnly, searchPendingOrders);
v1.get('/orders/:shortId', keepAuthOnly, fetchOrderByShortId);
v1.put('/orders/:shortId', keepAuthOnly, fulfillOrder);

v1.get('/prescriptions', keepAuthOnly, searchPrescriptions);
v1.post('/prescriptions', keepAuthOnly, createPrescription);
v1.get('/prescriptions/:shortId', keepAuthOnly, fetchRxByShortId);
v1.put('/prescriptions/:shortId', keepAuthOnly, verifyPrescription);


/!*
Non Compliant Endpoints
 *!/
v1.get('/issues/patient/:shortId', fetchPatientIssuesByPatient);
v1.get('/issues/call-list', searchPatientIssuesCallList);
v1.put('/issues/:shortId', resolvePatientIssue);
v1.delete('/issues/:shortId', cancelPatientIssue);
v1.delete('/patient/:shortId/call-list', removePatientFromCallList);

v1.post('/hcp/by/regno', keepAuthOnly, fetchHcpByRegNo);
v1.get('/patients/:shortId', keepAuthOnly, fetchPatientByShortId);
v1.get('/patients/:shortId/prescriptions', keepAuthOnly, fetchPatientPrescriptionHistory);
v1.post('/patients/by/nhi', keepAuthOnly, fetchPatientByNHI);

v1.post('/reports/token', keepAuthOnly, exportDownloadToken);
v1.get('/reports/export', keepAuthOnly, exportReportDownload);
v1.get('/reports/repeat-fee/export', keepAuthOnly, exportRepeatFeeReportDownload);
v1.get('/reports/finances/export', keepAuthOnly, exportFinanceReportDownload);

/!*
Call Note Endpoints
 *!/

v1.post('/patient/call-note/:shortId', saveCallNote);
v1.get('/patient/call-note/:shortId', fetchCallNote);


export default v1;
*!/
*/
