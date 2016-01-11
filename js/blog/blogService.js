angular.module('myApp')
.service('blogService', function() {

  this.test = "Jeff is an awesome man";

  var blogcontent = [
    {
      title: 'First Blog',
      author: 'Jeff Garcia',
      date: 'January 1, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
    {
      title: 'Second Blog',
      author: 'Britt Garcia',
      date: 'January 2, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
      {
      title: 'The Meetup',
      author: 'Naya Garcia',
      date: 'January 3, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
      {
      title: 'Practice',
      author: 'Cam Garcia',
      date: 'January 4, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
       {
      title: 'UPL',
      author: 'Wallys Villar',
      date: 'Febuary 4, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
       {
      title: 'WCPPL',
      author: 'Cam Garcia',
      date: 'March 4, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    }
  ];

  this.getblogcontent = function(blog) {
  		return blogcontent;
  };

});
