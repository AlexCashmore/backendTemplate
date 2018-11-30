/**
 * Created by Alex Cashmore on 10/10/2017.
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
