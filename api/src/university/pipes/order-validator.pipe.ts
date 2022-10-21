import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

/**
 * @desc validate sort order query parameter, checks if it matches
 * the allowed sort orders
 */
@Injectable()
export class SortOrderValidationPipe implements PipeTransform {
  allowedSortOrders = ['asc', 'desc'];
  /**
   * @desc Validates sort order parameter and return Bad Request if invalid sort order
   * @param value  - Search Order
   * @returns value
   */
  transform(value: string) {
    if (value) {
      if (this.allowedSortOrders.indexOf(value) === -1) {
        throw new BadRequestException(
          'Invalid Sort Order, allowed Values: asc or desc',
        );
      }
    }
    return value;
  }
}
