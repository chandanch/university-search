import { BadRequestException } from '@nestjs/common';
import { SortOrderValidationPipe } from './order-validator.pipe';

describe('OrderValidatorPipe', () => {
  it('should be defined', () => {
    expect(new SortOrderValidationPipe()).toBeDefined();
  });

  it('should throw error if invalid sort order is specified', () => {
    let pipe;
    try {
      pipe = new SortOrderValidationPipe();
    } catch (error) {
      expect(pipe.transform('dedwd')).toThrow(BadRequestException);
    }
  });
});
