import { Address } from "./Address";
import { Gender } from "./Gender";
import { User } from "./User";


export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthday: Date | undefined; 
  urlLogo: string;
  gender: Gender | undefined;
  address: Address | undefined;
  user: User | undefined;
}
