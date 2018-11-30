/**
 * Created by Alex Cashmore on 30/11/2018.
 */

export default async function createDocumentUsecase(dependencies, { session }, request) {
    // Check logic
    const response = {
        shortId: '',
    };
    const stateDocument = await dependencies.CreateDocumentAction.run(request);
    response.shortId = stateDocument.shortId;
    return response;
}

