export class LoginResponse {
  isLoggedIn: boolean;
  userName: string;
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
