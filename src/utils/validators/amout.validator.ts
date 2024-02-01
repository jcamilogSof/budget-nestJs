import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'custom', async: false })
export class AmountValidator implements ValidatorConstraintInterface {
  validate(amount: number) {
    return amount > 10000;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'The amount value must be greater than 10000';
  }
}