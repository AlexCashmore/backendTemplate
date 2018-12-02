/**
 * Created by Alex Cashmore on 3/12/2018.
 */
import 'babel-polyfill';
import logic from '../src/api/Document/fetchDocument/logic';
const BadRequestError = ()=>{return {response:'bad request'}};

const res = {
  status: () => ({ send: () => {} }),
};

describe('Endpoint build', () => {
  it('should return object with controller, presenter, actions', async () => {
    const dependencies = logic.build({ documentStore: false });
    expect('controller' in dependencies).toBe(true);
    expect('presenter' in dependencies).toBe(true);
    expect('FetchDocumentByShortIdAction' in dependencies).toBe(true);
  });
});
describe('Endpoint logic', () => {

  /*
  I havent figured out Authentication yet so this test is commented out

  it('should call next with unauthenticated error if request is unauthenticated (undefined)', async () => {
    const mockNext = jest.fn();
    const req = {
      session: { },
    };
    await logic.run(null, {}, req, res, mockNext);
    expect(mockNext.mock.calls[0][0]).toEqual(new UnauthenticatedError());
  });
  it('should call next with unauthenticated error if request is unauthenticated (false)', async () => {
    const mockNext = jest.fn();
    const req = {
      session: { authenticated: false },
    };
    await logic.run(null, {}, req, res, mockNext);
    expect(mockNext.mock.calls[0][0]).toEqual(new UnauthenticatedError());
  });
  */
  it('should call next with "Bad Request" error if controller fails', async () => {
    const mockNext = jest.fn();
    const dependencies = {
      controller: () => false,
    };
    const req = {
      session: { authenticated: true },
    };
    await logic.run(null, dependencies, req, {}, mockNext);
    expect(mockNext.mock.calls[0][0]).toEqual(BadRequestError());
  });

  it('should call useCase with dependencies, req and request', async () => {
    const mockUsecase = jest.fn();
    const dependencies = {
      controller: () => true,
      presenter: () => true,
    };
    const req = {
      session: {
        authenticated: true,
      },
    };
    await logic.run(mockUsecase, dependencies, req, res, null);
    expect(mockUsecase.mock.calls[0][0]).toEqual(dependencies);
    expect(mockUsecase.mock.calls[0][1]).toEqual(req);
    expect(mockUsecase.mock.calls[0][2]).toEqual(true);
  });

  it('should call presenter with state', async () => {
    const mockPresenter = jest.fn();
    const usecase = () => true;
    const dependencies = {
      controller: () => true,
      presenter: mockPresenter,
    };
    const req = {
      session: {
        authenticated: true,
      },
    };
    await logic.run(usecase, dependencies, req, res, null);
    expect(mockPresenter.mock.calls[0][0]).toEqual(true);
  });
});
