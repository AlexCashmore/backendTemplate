/**
 * Created by Alex Cashmore on 30/11/2018.
 */
import logic from './logic';
import fetchDocumentByIdUsecase from './fetchDocumentByIdUsecase';

export default async function fetchDocumentById(req, res, next) {
  const dependencies = logic.build(req.app.locals.gateways);
  logic.run(fetchDocumentByIdUsecase, dependencies, req, res, next);
}
