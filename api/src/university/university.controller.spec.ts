import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import {
  filterextraneousFields,
  removeDuplicates,
  sortItems,
} from '../helpers/utils';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { mockUniversityData } from '../constants/sample-data';

describe('UniversityController', () => {
  let controller: UniversityController;

  // helper function to test if array is sorted
  const isSorted = (
    items: Array<any>,
    key: string,
    sortType: string,
  ): boolean => {
    items = items.map((val) => val[key]);
    // check sort type
    if (sortType === 'desc') {
      let sortedItems: Array<any> = JSON.parse(JSON.stringify(items));
      sortedItems = sortedItems.sort((a: string, b: string) =>
        b.localeCompare(a),
      );
      return JSON.stringify(items) === JSON.stringify(sortedItems);
    } else {
      let sortedItems: Array<any> = JSON.parse(JSON.stringify(items));
      sortedItems = sortedItems.sort((a: string, b: string) =>
        a.localeCompare(b),
      );
      return JSON.stringify(items) === JSON.stringify(sortedItems);
    }
  };

  const checkDuplicates = (items: Array<any>, key: string) => {
    const uniqueItems = new Set(items.map((item) => item[key]));
    return uniqueItems.size < items.length;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversityController],
      providers: [
        {
          provide: UniversityService,
          useValue: {
            searchUniversity: jest.fn((name, order = 'asc') => {
              // console.log('Sort Order', order);
              return new Promise((resolve) => {
                // console.log('Mock Service in Controller spec');
                const universitiesData = mockUniversityData;
                const filteredUniversities =
                  filterextraneousFields(universitiesData);
                resolve(
                  sortItems(
                    removeDuplicates(filteredUniversities, 'name'),
                    'name',
                    order,
                  ),
                );
              });
            }),
          },
        },
      ],
      imports: [HttpModule],
    }).compile();

    controller = module.get<UniversityController>(UniversityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return list of universities as response', async () => {
    const universitiesResponse = await controller.getUniversities(
      'london',
      'asc',
    );
    // console.log(universitiesResponse);
    expect(universitiesResponse.length).toBeGreaterThan(0);
  });

  it('should not contain duplicate universities', async () => {
    const universitiesResponse = await controller.getUniversities('london');
    // console.log(universitiesResponse);
    const isDuplicate = checkDuplicates(universitiesResponse, 'name');
    expect(isDuplicate).toStrictEqual(false);
  });

  it('should contain universities sorted in ascending order', async () => {
    const universitiesResponse = await controller.getUniversities(
      'london',
      'asc',
    );
    // console.log(universitiesResponse);
    const isSortedByName = isSorted(universitiesResponse, 'name', 'asc');
    expect(isSortedByName).toStrictEqual(true);
  });

  it('should contain universities sorted in descending order', async () => {
    const universitiesResponse = await controller.getUniversities(
      'london',
      'desc',
    );
    // console.log(universitiesResponse);
    const isSortedByName = isSorted(universitiesResponse, 'name', 'desc');
    expect(isSortedByName).toStrictEqual(true);
  });
});
