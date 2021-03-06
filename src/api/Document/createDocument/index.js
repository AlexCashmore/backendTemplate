/**
 * Created by Alex Cashmore on 30/11/2018.
 */
import logic from './logic';
import createDocumentUsecase from './createDocumentUsecase';

export default async function createDocument(req, res, next) {
  const dependencies = logic.build(req.app.locals.gateways);
  logic.run(createDocumentUsecase, dependencies, req, res, next);
}
