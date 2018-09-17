/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  a = preferences;
  let count = 0;
  for (let i = 0; i<a.length; i++){
      if ((a[i] -1) == i) continue
        if((a[(a[i] -1)]-1) == (a[i] -1)) continue
          if ((a[(a[(a[i] -1)]-1)]-1) == (a[(a[i] -1)]-1)) continue
            if((a[(a[(a[i] -1)]-1)]-1) == i){
              count++
            }
  }
  return (count/3);
};