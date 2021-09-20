import LocalStorageMock from './localstorage';

global.localStorage = new LocalStorageMock();
