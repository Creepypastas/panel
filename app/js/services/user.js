app.factory('user', ['UserCommands', function (userCommands) {
    var path = 'https://creepypastas.com/comand';
    var usr = {
        currentUser: {
            username: '',
            p: ''
        }
    };

    usr.login = function () {
        return userCommands.sendCommand(usr.currentUser, 'user-login');
    };

    return usr;

}]);
