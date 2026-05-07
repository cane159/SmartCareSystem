import { RequestModel } from '../models/RequestModel';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  AddRequest: undefined;
  RequestDetail: {
    requestDetail: RequestModel;
  };
};
