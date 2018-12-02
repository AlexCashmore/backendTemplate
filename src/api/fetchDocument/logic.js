/**
 * Created by Alex Cashmore on 29/09/2017.
 */
import controller from './controller';
import presenter from './presenter';
import FetchDocumentByShortIdAction from "../actions/fetchDocumentAction";

export default {
  build({ documentStore }) {
    return {
      controller,
      presenter,
      FetchDocumentByShortIdAction: new FetchDocumentByShortIdAction(documentStore),
    };
  },
  async run(usecase, dependencies, req, res, next) {
    // Check authenticated state
    // Check permissions
/*    if (!req.session.authenticated) {
      next(new UnauthenticatedError());
      return;
    }*/
    // Check request
    const request = dependencies.controller(req.params);
    console.log(req.params);
    if (!request) {
      next(()=>{return 'bad req';});
      return;
    }
    // Check logic
    const state = await usecase(dependencies, req, request);
    const viewModel = dependencies.presenter(state, dependencies.config);
    res.status(200).send(viewModel);
  },
};
