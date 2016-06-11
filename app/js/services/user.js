app.factory('user', ['$http', function ($http) {
    var path = 'https://api.creepypastas.com/users';
    var usr = {
        currentUser: {
            username: '',
            p: ''
        }
    };

    usr.login = function (user) {
        return $http.post(path, user, {headers: {'Content-Type': 'application/json'}});
    };

    return usr;

}]);