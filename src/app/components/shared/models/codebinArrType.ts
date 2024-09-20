import { SignupFormType } from './signupType';

export interface CodebinArrType extends Omit<SignupFormType, 'type'> {}
