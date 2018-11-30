/**
 * Created by Alex Cashmore on 7/09/2017.
 */


export default class FetchDocumentByShortIdAction {
    constructor(documentGateway) {
        this.documentGateway = documentGateway;
    }
    async run({ shortId }) {
        console.log('at the run');
        console.log(this.documentGateway);
        const response = {
            isFetched: false,
            isValidData: false,
            document: null,
        };
        if (shortId) {
            return response;
        }
        response.isValidData = true;
        response.document = await this.documentGateway.fetchDocumentByShortId(shortId);
        response.isFetched = (response.document !== null);
        return response;
    }
}
