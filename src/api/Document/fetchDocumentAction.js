/**
 * Created by Alex Cashmore on 30/11/2018.
 */

/* Action */
export default class FetchDocumentByShortIdAction {
    constructor(documentGateway) {
        this.documentGateway = documentGateway;
    }
    async run({ shortId }) {
        console.log(shortId);
        const response = {
            isFetched: false,
            isValidData: false,
            document: null,
        };

        if (!shortId) {
            console.log('no short');
            return response;
        }
        console.log(shortId);
        response.isValidData = true;
        response.document = await this.documentGateway.fetchDocumentByShortId(shortId);
        response.isFetched = (response.document !== null);
        return response;
    }
}
