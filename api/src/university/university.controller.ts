import { Controller, Get, Query } from '@nestjs/common';
import { NameValidatonPipe } from './pipes/name-validator.pipe';
import { SortOrderValidationPipe } from './pipes/order-validator.pipe';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private universityService: UniversityService) {}

  /**
   * @desc Get universities based on the search term
   * @param name - Search term
   * @param order - Sort Order either asc or desc
   * @returns Array<UniversityDTO> - List of Universities based on search term
   */
  @Get()
  async getUniversities(
    @Query('name', NameValidatonPipe) name: string,
    @Query('order', SortOrderValidationPipe) order?: string,
  ) {
    const universities = await this.universityService.searchUniversity(
      name,
      order,
    );

    return universities;
  }
}
