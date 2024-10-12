import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '57f11673-429f-4cf6-bced-628c4ee3817e',
};

export const sampleWithPartialData: IAuthority = {
  name: '38b1dd94-18ec-40e3-8c84-7abf0fc4a933',
};

export const sampleWithFullData: IAuthority = {
  name: 'f3b65b3e-4b88-44f6-a3b4-bb464d965668',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
