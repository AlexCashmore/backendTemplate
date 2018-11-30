/**
 * Created by Alex Cashmore on 11/09/2017.
 */

export default async function fetchDocumentByShortIdUsecase(dependencies, { session }, request) {
    console.log('fetch start doco');
    // Check logic
    const response = {
        isFetched: false,
        isValidData: false,
        document: null,
    };
    /*this should be injected into dependencies*/
    async function run({ shortId }) {
        console.log('at the run',shortId);
        const response = {
            isFetched: false,
            isValidData: false,
            document: null,
        };
        if (!shortId) {
            return response;
        }
        response.isValidData = true;
      /*  response.document = await this.documentGateway.fetchDocumentByShortId(shortId);*/
        response.document = await this.documentGateway.fetchDocumentByShortId(shortId);
        response.isFetched = (response.document !== null);
        return response;
    }

    //const stateDocument = await run(request);
    const stateDocument = await dependencies.FetchDocumentByShortIdAction.run(request);
    response.isValidData = stateDocument.isValidData;
    response.isFetched = stateDocument.isFetched;
    response.document = stateDocument.document;
    return response;
}

