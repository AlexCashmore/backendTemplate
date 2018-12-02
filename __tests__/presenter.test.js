/**
 * Created by Alex Cashmore on 3/12/2018.
 */
import 'babel-polyfill';
import presenter from '../src/api/Document/fetchDocument/presenter';

describe('Presenter', () => {
  it('should have success failed and non valid data response', async () => {
    const state = {
      isFetched: false,
      isValidData: false,
      document: null,
    };
    const viewModel = await presenter(state);
    expect(viewModel).toEqual(
      {
        success: false,
        message: 'no valid document data',
      });
  });
  it('should have success failed and true valid data response', async () => {
    const state = {
      isFetched: false,
      isValidData: true,
      document: null,
    };
    const viewModel = await presenter(state);
    expect(viewModel).toEqual(
      {
        success: false,
        message: 'There was an issue fetching the document',
      });
  });
  it('should have success true', async () => {
    const state = {
      isFetched: true,
      isValidData: true,
      document: {
        shortId: '1234', documentName: 'document name', documentText:'document text'

      },
    };
    const viewModel = await presenter(state);
    expect(viewModel).toEqual(
      {
        success: true,
        document: {
          shortId: '1234',
          name: 'document name',
            text:'document text'
        },
      });
  });
});
