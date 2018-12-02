/**
 * Created by Alex Cashmore on 30/11/2018.
 */
import controller from './controller';
import presenter from './presenter';
import CreateDocumentAction from '../CreateDocumentAction';

export default {
  build({ documentStore }) {
    return {
      controller,
      presenter,
        CreateDocumentAction: new CreateDocumentAction(documentStore, ()=>{return 'date';}),
    };
  },
  async run(usecase, dependencies, req, res, next) {
    // Check authenticated state
    // Check permissions
   /* if (!req.session.authenticated) {
      next(new UnauthenticatedError());
      return;
    }*/
    // Check request
    const request = dependencies.controller(req.body);
    if (!request) {
      next(()=>{return 'error';});
      return;
    }
    // Check logic
    const state = await usecase(dependencies, req, request);
    const viewModel = dependencies.presenter(state);
    res.status(200).send(viewModel);
  },
};
