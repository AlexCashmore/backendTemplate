/**
 * Created by Alex Cashmore on 3/12/2018.
 */
import 'babel-polyfill';
import FetchDocumentByShortIdAction from '../src/api/Document/fetchDocumentAction.js';

describe('FetchDocumentByShortIdAction #run', () => {
  it('Should have isFetched false if there was an issue with the the id', async () => {
    const DocumentGateway = { fetchDocumentByShortId: jest.fn() };
    DocumentGateway.fetchDocumentByShortId.mockReturnValue(null);
    const fetchDocument = new FetchDocumentByShortIdAction(DocumentGateway);

    const response = await fetchDocument.run({ shortId: null });

    expect(response).toEqual({
      isFetched: false,
      isValidData: false,
      document: null,
    });
  });
  it('Should have is not fetched if there was an issue with the Document gateway', async () => {

    const DocumentGateway = { fetchDocumentByShortId: jest.fn() };
    DocumentGateway.fetchDocumentByShortId.mockReturnValue(null);
    const fetchDocument = new FetchDocumentByShortIdAction(DocumentGateway);

    const response = await fetchDocument.run({ shortId: '12345678' });

    expect(response).toEqual({
      isFetched: false,
      isValidData: true,
      document: null,
    });
  });
  it('Should have is fetched and complete', async () => {

    const DocumentGateway = { fetchDocumentByShortId: jest.fn() };
    DocumentGateway.fetchDocumentByShortId.mockReturnValue({id: '1234', name: 'Document name'});
    const fetchDocument = new FetchDocumentByShortIdAction(DocumentGateway);

    const response = await fetchDocument.run({ shortId: '123' });
    expect(response).toEqual({
      isFetched: true,
      isValidData: true,
      document: {
        id: '1234',
        name: 'Document name',
      },
    });
  });
});
