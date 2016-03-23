myApp.factory('detailFactory', function($http){
  var service = {}
  service.word = 'a word'
  service.getData = function(){
    return $http({
      method: 'GET',
      url: '/testdata'
    })
    .then(function(data){
      console.log('factory data ', data.data)
      return data
    })
  }
return service
})