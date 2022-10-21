import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import {
  filterextraneousFields,
  sortItems,
  removeDuplicates,
} from '../helpers/utils';
import { mockUniversityData } from '../constants/sample-data';
import { UniversityService } from './university.service';

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UniversityService,
          useValue: {
            searchUniversity: jest.fn(() => {
              return new Promise((resolve) => {
                // console.log('Mock Service');
                const universitiesData = mockUniversityData;
                const filteredUniversities =
                  filterextraneousFields(universitiesData);
                resolve(
                  sortItems(
                    removeDuplicates(filteredUniversities, 'name'),
                    'name',
                    'asc',
                  ),
                );
              });
            }),
          },
        },
      ],
      imports: [HttpModule],
    }).compile();

    service = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return university details', async () => {
    const universityData = await service.searchUniversity('london', 'asc');
    // console.log(universityData);
    expect(universityData.length).toBeGreaterThan(0);
  });

  it('should contain only name & country fields', async () => {
    const universityData = await service.searchUniversity('london', 'asc');
    const result = Object.keys(Object.assign({}, ...universityData));
    expect(result.length).toEqual(2);
  });
});
