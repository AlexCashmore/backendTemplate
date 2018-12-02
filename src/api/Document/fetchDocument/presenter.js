/**
 * Created by Alex Cashmore on 30/11/2018.
*/

/*
The views do not know about the business objects.
They just look in that data structure and present the response."
* */
export default function presenter(state) {
  if (state.isFetched) {
    return {
      success: true,
      document: {
        shortId: state.document.shortId,
          name:state.document.documentName,
        text: state.document.documentText,
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
