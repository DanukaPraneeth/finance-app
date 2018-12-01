export class LoginResponse {
  loggedIn: boolean;
  userName: string;
}

export class SignupResponse {
  success: boolean;
}

export class MenuItem {
  id: number;
  route: string;
  name: string;
  position: string;
  iconName: string;
  pattern: string; // EX: permission1:add,permission2:add

}

export class ElectricityBill {
  date: string;
  period: string;
  previousReading: number;
  currentReading:  number;
  units: number;
  amount: number;
  certification: string;
}

export class User {
  userName: string;
  password: string;
}

export class TempResponse {
   success: boolean;
   message: string;
}

export class Profile {
  userName: string;
  password: string;
  userRole: number;
}
