import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { serverUrl } from '../constants/server.config';
import { urlBuilder } from '../helpers/url-builder';
import {
  filterextraneousFields,
  removeDuplicates,
  sortItems,
} from '../helpers/utils';
import { UniversityDTO } from './dtos/university.dto';

@Injectable()
export class UniversityService {
  constructor(private httpService: HttpService) {}

  /**
   * @desc Searches university based on name and sorts based on sort order
   * @param name  - Search key
   * @param order - Sort Order
   * @returns Array<UniversityDTO> - Array of Universities
   */
  async searchUniversity(
    name: string,
    order = 'asc',
  ): Promise<Array<UniversityDTO>> {
    const searchUrl = urlBuilder(serverUrl, ['search']);
    const response = await lastValueFrom(
      this.httpService
        .get(searchUrl, {
          params: {
            name,
          },
        })
        .pipe(
          map((response) => {
            return response.data;
          }),
        ),
    );
    const filteredUniversities = filterextraneousFields(response);
    const key = 'name';
    return sortItems(removeDuplicates(filteredUniversities, key), key, order);
  }
}
