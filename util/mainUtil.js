
isGreaterThanTenUtil = function(x) {
     isGreaterThanTen = x + ' is Less than 10';
     if(x >10) {
       isGreaterThanTen = x + ' is Greater than 10';
     }
     return isGreaterThanTen;
     console.log('isGeaterThanTen called -> '+isGreaterThanTen);
}
module.exports.isGreaterThanTen = isGreaterThanTenUtil;
//isGeaterThanTen(1);
