import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NameValidatonPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      throw new BadRequestException('name parameter is required');
    }
    return value;
  }
}
