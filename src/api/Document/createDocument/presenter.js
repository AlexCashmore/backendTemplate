/**
 * Created by Alex Cashmore on 30/11/2018.
 */
export default function presenter(state) {
  if (state.isCreated) {
    return {
      success: true,
      document: {
        shortId: state.shortId,
      },
    };
  }
  return {
    success: false,
    err: {
    },
  };
}
