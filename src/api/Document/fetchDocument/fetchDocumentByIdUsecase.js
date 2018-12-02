/**
 * Created by Alex Cashmore on 30/11/2018.
 */

export default async function fetchDocumentByShortIdUsecase(dependencies, { session }, request) {
    const response = {
        isFetched: false,
        isValidData: false,
        document: null,
    };
    /* Interactor implements the use case by invoking business objects (Actions) */
    async function run({ shortId }) {
        const response = {
            isFetched: false,
            isValidData: false,
            document: null,
        };
        if (!shortId) {
            return response;
        }
        response.isValidData = true;
       /* response.document = await this.documentGateway.fetchDocumentByShortId(shortId);*/
        response.document = {documentName:'Why Clean Architecture?',documentText:'ipsum lorem'};
        response.isFetched = (response.document !== null);
        return response;
    }
    const stateDocument = await run(request);
    /* The Interactor then gathers the response data into another
    vanilla data structure and passes it back to the UI.  */
    response.isValidData = stateDocument.isValidData;
    response.isFetched = stateDocument.isFetched;
    response.document = stateDocument.document;
    return response;
}

