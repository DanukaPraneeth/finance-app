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
    period: string;
    previousReading: number;
    currentReading: number;
    noOfUnits: number;
    amount: number;
    billNo: string;
    location: string;
    certification: string;
    certifiedDate: Date;
    datetime: Date;
    traineeStaffId: number;
    userKey: number;
}

export class CreateBillResponse {
    success: boolean;
}
