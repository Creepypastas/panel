app.factory('UserCommands', ['$http', function ($http) {
    var path = 'https://creepypastas.com/comand';
    var userCommands = {};

    userCommands.sendCommand = function (user, command) {
        return $http({
            url: path,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: {user: user, post: {}, command: command}
        });
    };

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
