export const filterData = (arr, key, searchKey) =>
    arr.filter((data) => data[key]?.toLowerCase().includes(searchKey.toLowerCase()));
