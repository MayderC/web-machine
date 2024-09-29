export const filter = (arr, callback) => {
  const matched = [];
  const unmatched = [];
  console.log('filter');
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      matched.push(arr[i]);
    } else {
      unmatched.push(arr[i]);
    }
  }
  return [...matched, ...unmatched];
}