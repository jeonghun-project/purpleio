import { HttpException, HttpStatus } from '@nestjs/common';

export class WroungTypeException extends HttpException {
  constructor() {
    super('WroungType', HttpStatus.NOT_FOUND);
  }
}
