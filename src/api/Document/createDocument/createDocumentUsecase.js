/**
 * Created by Alex Cashmore on 30/11/2018.
 */

export default async function createDocumentUsecase(dependencies, { session }, request) {
    // Check logic
    const response = {
        shortId: '',
    };
    /*  The Interactor implements the use case by invoking business objects (Actions) */
    const stateDocument = await dependencies.CreateDocumentAction.run(request);
    /* The interactor then gathers the response data into another vanilla data structure and passes it back to the UI. */
    response.shortId = stateDocument.shortId;
    return response;
}

