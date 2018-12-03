/**
 * Created by Alex Cashmore on 30/11/2018.
 */
export default class DocumentGateway {

    constructor(client) {
        this.client = client;
    }
    async fetchDocumentByShortId(shortId) {
        try {
            const documents = this.client.collection('documents');
            const document = await documents.findOne({ shortId });
            if (document === null) {
                return null;
            }
            return document;
        } catch (e) {
            return null;
        }
    }

    async createDocument({
                               shortId,
                               name,
                           }) {
        try {
            const documents = this.client.collection('documents');
            const result = await documents.insertOne({
                shortId,
                name,
            });
            return result.insertedCount > 0;
        } catch (e) {
            return false;
        }
    }


}
