export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoLocation;
}

type UserGeoLocation = {
  lat: string;
  lng: string;
}

type UserCompany =  {
  name: string;
  catchPhrase: string;
  bs: string;
}
