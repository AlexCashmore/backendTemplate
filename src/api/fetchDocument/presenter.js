/**
 * Created by Alex Cashmore on 29/09/2017.
 */
export default function presenter(state) {
  if (state.isFetched) {
    return {
      success: true,
      document: {
        shortId: state.document.shortId,
        name: state.document.name,
      },
    };
  }
  if (!state.isValidData) {
    return {
      success: false,
      message: 'no valid document data',
    };
  }
  return {
    success: false,
    message: 'There was an issue fetching the document',
  };
}
