const locations = [
  'Brentwood',
  'California',
  'Texas',
  'Santa Monica',
  'Oregon',
  'Washington',
  'Arizona',
  'Venice',
  'Utah'
];

var [location_one, , , location_two, , , ,location_three] = locations;  
console.log(location_one, location_two, location_three); // 'Brentwood' 'Santa Monica' 'Venice'
