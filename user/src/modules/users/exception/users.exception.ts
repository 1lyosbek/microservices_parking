import { RpcException } from "@nestjs/microservices";

export class UserNotFoundException extends RpcException{
    constructor() {
        super("user not found_$_404")
    }
}
export class ThisPhoneAlreadyUsed extends RpcException{
    constructor() {
        super("This phone number already exist_$_400")
    }
}

export class UserByPhoneNotFoundException extends RpcException{
    constructor() {
        super("phone or password is wrong_$_400")
    }
}