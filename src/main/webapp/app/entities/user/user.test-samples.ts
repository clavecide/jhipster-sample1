import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24270,
  login: 'd6.@AeCpQU',
};

export const sampleWithPartialData: IUser = {
  id: 16512,
  login: 'W0QcXJ',
};

export const sampleWithFullData: IUser = {
  id: 15859,
  login: 'qn@MrfQi4',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
