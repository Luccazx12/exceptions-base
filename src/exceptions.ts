import {
  ARGUMENT_INVALID,
  ARGUMENT_NOT_PROVIDED,
  ARGUMENT_OUT_OF_RANGE,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} from '.';
import { ExceptionBase } from '@libs/exceptions/exception.base';

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  private static readonly message = 'Argument invalid';

  public readonly code = ARGUMENT_INVALID;

  public constructor(message = ArgumentInvalidException.message) {
    super({ message });
  }
}

/**
 * Used to indicate that an argument was not provided (is empty object/array, null of undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  private static readonly message = 'Argument not provided';

  public readonly code = ARGUMENT_NOT_PROVIDED;

  public constructor(message = ArgumentNotProvidedException.message) {
    super({ message });
  }
}

/**
 * Used to indicate that an argument is out of allowed range
 * (for example: incorrect string/array length, number not in allowed min/max range etc)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  private static readonly message = 'Argument out of range';

  public readonly code = ARGUMENT_OUT_OF_RANGE;

  public constructor(message = ArgumentOutOfRangeException.message) {
    super({ message });
  }
}

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */
export class ConflictException extends ExceptionBase {
  private static readonly message = 'Conflict';

  public readonly code = CONFLICT;

  public constructor(message = ConflictException.message, cause?: Error) {
    super({ message, cause });
  }
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class NotFoundException extends ExceptionBase {
  private static readonly message = 'Not found';

  public readonly code = NOT_FOUND;

  public constructor(message = NotFoundException.message, cause?: Error) {
    super({ message, cause });
  }
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  private static readonly message = 'Internal server error';

  public readonly code = INTERNAL_SERVER_ERROR;

  public constructor(
    message = InternalServerErrorException.message,
    cause?: Error,
  ) {
    super({ message, cause });
  }
}
