import { ValidationError } from 'class-validator';
import { ApiValidationError } from '../dto/validation-error.type';

export class ValidationErrorFormatter {
  static format(errors: ValidationError[]): ApiValidationError[] {
    return errors.map((error) =>
      this.mapError(error),
    );
  }

  private static mapError(error: ValidationError): ApiValidationError {
    return {
      field: error.property,
      messages: this.extractMessages(error),
      children: error.children?.length
        ? error.children.map((child) => this.mapError(child))
        : undefined,
    };
  }

  private static extractMessages(error: ValidationError): string[] {
    if (error.constraints) {
      return Object.values(error.constraints);
    }

    // fallback for nested objects or unknown cases
    if (error.children?.length) {
      return error.children.flatMap((child) =>
        Object.values(child.constraints ?? {}),
      );
    }

    return ['Invalid value'];
  }
}