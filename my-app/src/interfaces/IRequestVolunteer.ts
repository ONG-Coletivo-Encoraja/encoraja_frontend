interface IRequestVolunteer {
  id: number;
  status: string;
  availability: string;
  course_experience: string;
  how_know: string;
  expectations: string;
  user: IUser;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  permission: string;
  phone: string;
  date_birthday: string;
}
