angular.module('starter.services', [])

.factory('Schools', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var schools = [
  {
    id: 1,
    schoolname: 'Ellen Sharma Memorial Matric. Hr. Sec. School',
    schoolboard: 'Chennai',
    logo: 'http://www.thegroveschool.in/images/logo.jpg',
    SchoolZone:'Chennai',
    SchoolBoard:"CBSE",
    SchoolClass:'KG-12',
    SchoolBranch:'Chennai',
    TotalStudent:1800,
    Address:'No 8, 4th Cross Street Sterling Road, Nungambakkam, Near Loyola College & Fresh Juice Corner, Chennai 600034',
    Postal:600097,
    Principal:'Sakthi vel',
    Founder:'Sakthi vel',
    ContactName:'Contact Name',
    ContactNumber:'(91) - 9585183727',
    fax:'(91) - 9585183727',
    Landmark:'Golden Temple',
    Ratings:4.5,
    email:'chennaipublicschool.com',
    url:'http://schools.com',
    score: 5,
    facilities:['AC','Gymnasium','Pool','school ground','Library'],
    max: 10,
    isReadonly:false,
    Latitude:12.900988,
    Longitude:80.227930,
    Distance: null,
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 2,
    schoolname: 'Kendriya Vidyalaya',
    schoolboard: 'Chennai',
    logo: 'http://www.shrikrishnaswamyschools.com/images/topmast.jpg',
    SchoolZone:'Chennai',
    SchoolBoard:"CBSE",
    SchoolClass:'KG-12',
    SchoolBranch:'Chennai',
    TotalStudent:1800,
    Address:'No 8, 4th Cross Street Sterling Road, Nungambakkam, Near Loyola College & Fresh Juice Corner, Chennai 600034',
    Postal:600027,
    Principal:'Sakthi vel',
    Founder:'Sakthi vel',
    ContactName:'Contact Name',
    ContactNumber:'(91) - 9585183727',
    Landmark:'Golden Temple',
    score: 5,
    facilities:['AC','Gymnasium','Pool','school ground','Library'],
    max: 10,
    isReadonly:false,
    Ratings:4.5,
    url:'http://schools.com',
    Latitude:12.794948,
    Longitude:80.198665,
    Distance: null,
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, 
  {
    id: 3,
    schoolname: 'Shri Krishnaswamy Matriculation Higher Secondary School',
    schoolboard: 'Chennai',
    logo: 'http://www.thegroveschool.in/images/logo.jpg',
    SchoolZone:'Chennai',
    SchoolBoard:"CBSE",
    SchoolClass:'KG-12',
    SchoolBranch:'Chennai',
    TotalStudent:1800,
    Address:'No 8, 4th Cross Street Sterling Road, Nungambakkam, Near Loyola College & Fresh Juice Corner, Chennai 600034',
    Postal:600027,
    Principal:'Sakthi vel',
    Founder:'Sakthi vel',
    ContactName:'Contact Name',
    ContactNumber:'(91) - 9585183727',
    Landmark:'Golden Temple',
    Ratings:4.5,
    url:'http://schools.com',
    Latitude:12.955278,
    Longitude:80.255118,
    score: 5,
    facilities:['AC','Gymnasium','Pool','school ground','Library'],
    max: 10,
    isReadonly:false,
    Distance: null,
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

  }, 
  {
    id: 4,
    schoolname: 'Spartan Cbse School',
    schoolboard: 'Chennai',
    logo: 'http://www.thegroveschool.in/images/logo.jpg',
    SchoolZone:'Chennai',
    SchoolBoard:"CBSE",
    SchoolClass:'KG-12',
    SchoolBranch:'Chennai',
    TotalStudent:1800,
    Address:'No 8, 4th Cross Street Sterling Road, Nungambakkam, Near Loyola College & Fresh Juice Corner, Chennai 600034',
    Postal:600027,
    Principal:'Sakthi vel',
    Founder:'Sakthi vel',
    ContactName:'Contact Name',
    ContactNumber:'(91) - 9585183727',
    Landmark:'Golden Temple',
    Ratings:4.5,
    score: 5,
    facilities:['AC','Gymnasium','Pool','school ground','Library'],
    max: 10,
    isReadonly:false,
    url:'http://schools.com',
    Latitude:12.969291,
    Longitude:80.261074,
    Distance: null,
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

  },
  { 
    id: 5,
    schoolname: 'Narayana e-Techno School',
    schoolboard: 'Chennai',
    logo: 'http://www.thegroveschool.in/images/logo.jpg',
    SchoolZone:'Chennai',
    SchoolBoard:"CBSE",
    SchoolClass:'KG-12',
    SchoolBranch:'Chennai',
    TotalStudent:1800,
    Address:'No 8, 4th Cross Street Sterling Road, Nungambakkam, Near Loyola College & Fresh Juice Corner, Chennai 600034',
    Postal:600027,
    Principal:'Sakthi vel',
    Founder:'Sakthi vel',
    score: 5,
    facilities:['AC','Gymnasium','Pool','school ground','Library'],
    max: 10,
    isReadonly:false,
    ContactName:'Contact Name',
    ContactNumber:'(91) - 9585183727',
    Landmark:'Golden Temple',
    Ratings:4.5,
    url:'http://schools.com',
    Latitude:13.090732,
    Longitude:80.208340,
    Distance: null,
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

  }
  ];

  return {
    all: function() {
      return schools;
    },
   
    get: function(schoolId) {
      for (var i = 0; i < schools.length; i++) {
        if (schools[i].id === parseInt(schoolId)) {
          return schools[i];
        }
      }
      return null;
    }
   


  };
})

.factory("searchService", function() {
    return {
        doSearch: function(query, category) {
         return "searching for '" + query + "' in category '" + category + "'";   
        }
    };
});

