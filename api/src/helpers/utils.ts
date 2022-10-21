import { UniversityDTO } from 'src/university/dtos/university.dto';

/**
 * @desc - Remove duplicate elements based on the specified key
 * @param items - Array of Items
 * @param key - property name on which the duplicates needs to be checked
 * @returns Array - Unique Items
 */
export const removeDuplicates = (
  items: Array<UniversityDTO>,
  key: string,
): Array<UniversityDTO> => {
  const uniqueItems = [
    ...new Map(items.map((item) => [item[key], item])).values(),
  ];
  return uniqueItems;
};

/**
 * @desc Sorts Items based on the sort key and sort order
 * @param items - Items to be sorted
 * @param sortKey - Key on which sort to be applied
 * @param sortOrder - Sort order asc or desc
 * @returns Array - Sorted Item
 */
export const sortItems = (
  items: Array<UniversityDTO>,
  sortKey: string,
  sortOrder: string,
): Array<UniversityDTO> => {
  // check sort order and sort accordingly
  const sortedItems =
    sortOrder === 'asc'
      ? items.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
      : items.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
  return sortedItems;
};

/**
 * @desc Remove extra fields
 * @param data
 * @returns Array
 */
export const filterextraneousFields = (
  data: Array<any>,
): Array<UniversityDTO> => {
  const filteredData = [];
  for (const datafield of data) {
    const { name, country } = datafield;
    filteredData.push({ name, country });
  }
  return filteredData;
};
