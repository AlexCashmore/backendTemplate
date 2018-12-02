/**
 * Created by Alex Cashmore on 10/10/2017.
 */
import validator from 'validator';

export default function controller(body) {
    if (
        (!body.name && body.name !== '')
    ) {
        return false;
    }
    return {
        name: validator.trim(String(body.name))
    };
}
