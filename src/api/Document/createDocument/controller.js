/**
 * Created by Alex Cashmore on 30/11/2018.
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
