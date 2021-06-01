export const filterData = (arr, key, searchKey) =>
    arr.filter((data) => data[key]?.toLowerCase().includes(searchKey.toLowerCase()));

export const sortComment = (a, b) => b.comments.length - a.comments.length;
export const sortLike = (a, b) => b.likes - a.likes;
