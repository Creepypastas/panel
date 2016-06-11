/**
 * @ngdoc controller
 * @name creepypastasApp:formCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('formCtrl', ['$scope', '$http', 'notify', 'UserCommands', function ($scope, $http, notify, userCommands) {
    var formCtrl = this;
    formCtrl.post = {
        title: '',
        content: '',
        category: [],
        categoriesObj: [{name: 'categorías', term_id: 1}],
        tags: '',
        tagsList: ['etiquetas']
    };
    formCtrl.currentUser = {
        username: '',
        p: ''
    };

    formCtrl.response = {
        error: undefined,
        errors: {}
    };

    formCtrl.availableCategories = [{term_id: 14, name: "Canciones"}, {term_id: 12, name: "Caricaturas"}, {
        term_id: 464,
        name: "Cementerio"
    }];

    formCtrl.filterCategories = function (query) {
        console.log("filtering cats", formCtrl.availableCategories);
        return formCtrl.availableCategories;
    };

    formCtrl.catAdded = function (cat) {
        formCtrl.post.category = [];
        for (var i = formCtrl.post.categoriesObj.length - 1; i >= 0; i--) {
            if (formCtrl.post.categoriesObj[i].term_id !== 1)
                formCtrl.post.category.push(formCtrl.post.categoriesObj[i].term_id);
            else {
                formCtrl.post.categoriesObj.splice(i, 1);
            }
        }
    };

    formCtrl.tagAdded = function (tag) {
        formCtrl.post.tags = formCtrl.post.tagsList.join();
        for (var i = formCtrl.post.tagsList.length - 1; i > 0; i--) {
            if (formCtrl.post.tagsList[i] === "etiquetas")
                formCtrl.post.tagsList.splice(i, 1);
        }
        formCtrl.post.tags = formCtrl.post.tagsList.join();
    };

    formCtrl.validateForm = function () {
        formCtrl.post.content = document.getElementById('postContent').innerHTML;

        return true;
    };

    formCtrl.submitPost = function () {
        if (formCtrl.validateForm()) {
            formCtrl.sendCommand("post-new");
        }
    };

    formCtrl.sendCommand = function (command) {
        userCommands.sendPostCommand(formCtrl.currentUser, formCtrl.post, command)
            .then(function success(res) {
                console.log("updatePost::response");
                console.log(res.data);
                formCtrl.response = res.data;
                formCtrl.toastrAll(res.data);
            }, function error(res) {
                console.error("updatePost::response");
                console.error(res.data);
                formCtrl.response = res.data;
            });
    };

    formCtrl.toastrAll = function (data) {
        console.log("app::toastrAll::init");

        if (true === data.error && typeof data.errors === 'object') {
            console.log("app::toastrAll::toasting errors");
            for (var error in data.errors) {
                if (data.errors.hasOwnProperty(error) && typeof error == 'string') {
                    notify({
                        messageTemplate: '<span><b>Error</b>: ' + data.errors[error] + '</span>'
                    });
                }
            }
        }

        if (true === data.success && typeof data.post_id == 'number') {
            console.log("app::toastrAll::toasting success");
            notify({
                messageTemplate: '<span><b>¡Aporte guardado!</b> con el id: ' + data.post_id + '</span>'
            });
        }

        if (typeof data.error == 'undefined' && typeof data.success == 'undefined') {
            console.log("app::toastrAll::toasting ups");
            notify({
                messageTemplate: '<span><b>¡Ups!</b>, Algo extraño sucede, por favor envíanos un email</span>'
            });
        }

    }

}]);
