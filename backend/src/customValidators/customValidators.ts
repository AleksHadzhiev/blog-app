import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'

@ValidatorConstraint({ name: 'customText', async: false })
export class WhitespaceConstraint implements ValidatorConstraintInterface {
  validate(text: string) {
    return text.trim().length > 0
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} should not be empty or contain only whitespace`
  }
}

@ValidatorConstraint({ name: 'customText', async: false })
export class IsNaN implements ValidatorConstraintInterface {
  validate(text: string) {
    return isNaN(Number(text))
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} should not be a number`
  }
}
