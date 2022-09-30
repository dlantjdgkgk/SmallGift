const changeInfiniteScrollDataToArray = (pageList: any) => {
  const array: any = [];

  pageList?.pages.forEach((page) => {
    array.push(...page.result);
  });

  return array;
};

export default changeInfiniteScrollDataToArray;
