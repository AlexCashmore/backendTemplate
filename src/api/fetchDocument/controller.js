/**
 * Created by Alex Cashmore on 29/09/2017.
 */
import validator from 'validator';

export default function controller(params) {
  console.log(params);
  if (
    (!params.shortId && params.shortId !== '')
  ) {
    return false;
  }
  return {
    shortId: validator.trim(String(params.shortId)),
  };
}
