/**
 * Created by Alex Cashmore on 30/11/2018.
 */
import controller from './controller';
import presenter from './presenter';
const BadRequestError = ()=>{return {response:'bad request'}};
import FetchDocumentByShortIdAction from "../fetchDocumentAction";

export default {
  build({ documentStore }) {
    return {
      controller,
      presenter,
      FetchDocumentByShortIdAction: new FetchDocumentByShortIdAction(documentStore),
    };
  },
  async run(usecase, dependencies, req, res, next) {
    /* controllers unpack the HttpRequest object into a simple vanilla data structure,
    and then pass that data structure to an interactor (Usecase) object  */
    const request = dependencies.controller(req.params);
    console.log(req.params);
    if (!request) {
      next(BadRequestError());
      return;
    }
    const state = await usecase(dependencies, req, request);
    /*The Interactor then gathers the response data into another vanilla data structure and passes it back to the UI.*/
    const viewModel = dependencies.presenter(state, dependencies.config);
    res.status(200).send(viewModel);
  },
};
