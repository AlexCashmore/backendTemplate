/**
 * Created by Alex Cashmore on 30/11/2018.
 */

export default class CreateDocumentAction {
    constructor(documentGateway, date) {
        this.documentGateway = documentGateway;
        this.date = date;
    }
    async run({ name }) {
        const response = {
            isCreated: false,
            isValidData: false,
        };
        if (
            !name
        ) {
            return response;
        }

        response.isValidData = true;
        const { shortId } = await this.createDocumentWithRetry(
            name
        );
        response.isCreated = true;
        response.shortId = shortId;
        return response;
    }


    async createDocumentWithRetry(
        name
    ) {
        const documentToStore = {
            name,
        };
        if (await this.documentGateway.createDocument(documentToStore)) {
            return { shortId: documentToStore.shortId };
        }
        /*generate id*/
        documentToStore.shortId = '123';
        if (await this.documentGateway.createDocument(documentToStore)) {
            return { shortId: documentToStore.shortId };
        }
        documentToStore.shortId = '123';
        if (await this.documentGateway.createDocument(documentToStore)) {
            return { shortId: documentToStore.shortId };
        }
        return { hasSaved: false, shortId: '' };
    }
}
