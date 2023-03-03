/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
/*
 itemsObject.forEach(function(o) {
     o.quantity = o.quantity *2;
     o.price = o.price *2;
 });
*/
/*
 new_array = itemsObject.filter(function(o) {
     return o.quantity > 2 && o.price > 300;
 });
*/
/*
 function getSum(total, o) {
   return total + o.price;
 }
 v = itemsObject.reduce(getSum, 0);
 console.log(v);
*/


/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
  ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const expectedReturnString =
  'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

/*
 var regexPattern = /[^A-Za-z0-9]/g;
 new_string = string.replace(regexPattern, " ").trim().toLowerCase().replace(/\s+/g, ' ');
 console.log(new_string);
 */

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
];

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
  { uuid: 1, role: 'manager', name: null },
  { uuid: 2, role: 'associate', name: 'test' },
  { uuid: 3, role: null, name: 'test3' },
  { uuid: 4, role: 'engineer', name: null },
  { uuid: 5, role: null, name: 'test5' },
  { uuid: 6, role: 'pm', name: null },
];
/*
 const mergeArrays = (arr1 = [], arr2 = []) => {
    let res1 = [];
    arr1.map(obj => {
       const index = arr2.findIndex(el => el["uuid"] == obj["uuid"]);
       if (index === -1) {
           res1.push ({"uuid": obj["uuid"], "role":null, "name": obj["name"]});
       } else {
           const{role} = arr2[index];
           res1.push ({"uuid": obj["uuid"],role,"name": obj["name"] });
       }
      }
    );
    arr2.map(obj => {
       const index = arr1.findIndex(el => el["uuid"] == obj["uuid"]);
       if (index === -1) {
           res1.push ({...obj, "name": null})
       }
    });
    res1.sort((a,b) => parseFloat(a.uuid) - parseFloat(b.uuid))
    return res1;
 };
 console.log(mergeArrays(first, second));
 */
