angular.module('myApp')
.service('blogService', function() {

  this.test = "Jeff is an awesome man";

  var blogcontent = [
    {
      title: 'First Blog',
      author: 'Jeff Garcia',
      date: '2016-01-07',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
    {
      title: 'Second Blog',
      author: 'Britt Garcia',
      date: '2016-01-24',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
      {
      title: 'The Meetup',
      author: 'Naya Garcia',
      date: '2015-12-24',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
      {
      title: 'Practice',
      author: 'Cam Garcia',
      date: '2015-11-5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
       {
      title: 'UPL',
      author: 'Wallys Villar',
      date: '2016-01-10',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    },
       {
      title: 'WCPPL',
      author: 'Cam Garcia',
      date: '2016-01-03',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit enim eget velit lacinia scelerisque. Sed dictum porta auctor. Aenean ut dolor vitae lectus sodales sagittis. Ut malesuada imperdiet nisi et faucibus. Quisque mi ligula, sagittis ut nunc eget, bibendum interdum erat. Integer congue purus et quam condimentum, sed malesuada tellus mollis. Vestibulum elementum justo sit amet nibh tincidunt dapibus.'
    }
  ];

  this.getblogcontent = function(blog) {
  		return blogcontent;
  };

});


