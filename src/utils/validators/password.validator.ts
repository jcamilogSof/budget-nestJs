import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

@ValidatorConstraint({ name: "password", async: false })
export class PasswordValidator implements ValidatorConstraintInterface {

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const rex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return rex.test(value);
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number.";
    }
}