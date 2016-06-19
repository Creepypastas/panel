app.factory('user', ['$http', function ($http) {
    var path = 'https://creepypastas.com/comand';
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
