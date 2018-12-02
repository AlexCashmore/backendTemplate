/**
 * Created by Alex Cashmore on 3/12/2018.
 */
import controller from '../src/api/Document/fetchDocument/controller.js';

describe('Controller', () => {
  it('should have return false if no fields', () => {
    const request = controller({});
    expect(request).toBe(false);
  });
  it('should have return false if missing fields', () => {
    const request = controller({
    });
    expect(request).toBe(false);
  });
  it('should have return request if fields are empty', () => {
    const request = controller({
      shortId: '',
    });
    expect(request).toEqual({
      shortId: '',
    });
  });
  it('should have return request fields trimmed', () => {
    const request = controller({
      shortId: '  12345 ',
    });
    expect(request).toEqual({
      shortId: '12345',
    });
  });
  it('should have return request fields as strings', () => {
    const request = controller({
      shortId: 12345,
    });
    expect(request).toEqual({
      shortId: '12345',
    });
  });
});
