app.factory('UserCommands', ['$http', function ($http) {
    var path = 'https://creepypastas.com/comand';
    var userCommands = {};

    userCommands.sendPostCommand = function (user, post, command) {
        return $http({
            url: path,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: {user: user, post: post, command: command}
        });
    };

    return userCommands;

}]);
