app.factory('user', ['UserCommands', function (userCommands) {
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
