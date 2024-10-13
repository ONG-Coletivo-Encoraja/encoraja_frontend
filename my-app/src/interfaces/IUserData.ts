export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  date_birthday: string;
  ethnicity: string;
  gender: string;
  image_term: boolean;
  data_term: boolean;
  address: {
    street: string,
    number: string,
    neighbourhood: string,
    city: string,
    zip_code: string
},
  phone: string;
  availability: string;
  course_experience: string;
  how_know: string;
  expectations: string;
}
