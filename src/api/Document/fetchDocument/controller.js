/**
 * Created by Alex Cashmore on 30/11/2018.
 */
import validator from 'validator';

/* controllers unpack the HttpRequest object into a simple vanilla data structure,
and then pass that data structure to an Interactor object
* don’t let your controllers know anything about the business rules.  */

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
