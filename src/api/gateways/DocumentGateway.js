/**
 * Created by Alex Cashmore on 16/10/2017.
 */
export default class DocumentGateway {

    constructor(client) {
        this.client = client;
    }
    async fetchDocumentByShortId(shortId) {
        console.log('in the fucking mongo db');
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
/*

    async searchdocuments(search) {
        try {
            const collection = this.client.collection('documents');
            let cursor = null;
            if (search.term === '') {
                cursor = collection
                    .find();
            } else {
                cursor = collection
                    .find({
                        $text: {
                            $search: search.term,
                        },
                    });
            }
            if (cursor === null) {
                return [];
            }
            return cursor
                .sort(search.sort)
                .skip(search.pageNumber * search.pageSize)
                .limit(search.pageSize)
                .toArray();
        } catch (e) {
            return null;
        }
    }
*//*
    async editdocument({
                             _id,
                             name,
                             data,

                         }) {
        try {
            const documents = this.client.collection('documents');
            const result = await documents.updateOne({ _id }, {
                $set: {
                    name,
                    data,
                },
            });
            return result.modifiedCount > 0;
        } catch (e) {
            return false;
        }
    }*/


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
