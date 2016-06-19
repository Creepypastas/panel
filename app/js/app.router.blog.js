'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/access/login');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.blo-dashboard', {
                        url: '/vista-general',
                        templateUrl: 'partials/blo-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function () {
                                            return $ocLazyLoad.load('js/controllers/blo-dashboard.js');
                                        }
                                        )
                                        .then(
                                            function () {
                                                return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                        )
                                        .then(
                                            function () {
                                                return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                        )
                                        ;
                                }
                            ]
                        }
                    })
                    .state('app.blo-blogs', {
                        url: '/creepypastas/lista',
                        templateUrl: 'partials/blo-blogs.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/blogs-startfrom.js',
                                        'js/controllers/blogs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-blogview', {
                        url: '/creepypastas/{blogId:[0-9]{1,4}}',
                        templateUrl: 'partials/blo-blog-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-blog-view', {
                        url: '/creepypastas/view',
                        templateUrl: 'partials/blo-blog-item.html'
                    })
                    .state('app.blo-blog-add', {
                        url: '/creepypastas/enviar',
                        templateUrl: 'partials/blo-blog-add.html',
                        resolve: {
                            deps: ['uiLoad', '$ocLazyLoad',
                                function (uiLoad, $ocLazyLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']).then(
                                        function () {
                                            return $ocLazyLoad.load(['cgNotify', 'js/services/user.js', 'js/services/UserCommands.js']).then(
                                                function () {
                                                    return $ocLazyLoad.load('js/controllers/formCtrl.js');
                                                }
                                            );
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.blo-blog-edit', {
                        url: '/creepypastas/modificar',
                        templateUrl: 'partials/blo-blog-edit.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-search', {
                        url: '/creepypastas/buscar',
                        templateUrl: 'partials/blo-search.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/search-startfrom.js',
                                        'js/controllers/blo-search.js',
                                        'js/directives/ui-searchtabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.blo-users', {
                        url: '/usuarios',
                        templateUrl: 'partials/blo-users.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/controllers/blo-users.js']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-user-edit', {
                        url: '/usuarios/modificar',
                        templateUrl: 'partials/blo-user-edit.html'
                    })
                    .state('app.blo-user-profile', {
                        url: '/usuarios/perfil',
                        templateUrl: 'partials/blo-user-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.blo-categories', {
                        url: '/categorias',
                        templateUrl: 'partials/blo-categories.html'
                    })
                    .state('app.blo-category-add', {
                        url: '/categorias/crear',
                        templateUrl: 'partials/blo-category-add.html'
                    })
                    .state('app.blo-category-edit', {
                        url: '/categorias/modificar',
                        templateUrl: 'partials/blo-category-edit.html'
                    })
                    .state('app.blo-tags', {
                        url: '/etiquetas',
                        templateUrl: 'partials/blo-tags.html'
                    })
                    .state('app.blo-tag-add', {
                        url: '/etiquetas/crear',
                        templateUrl: 'partials/blo-tag-add.html'
                    })
                    .state('app.blo-tag-edit', {
                        url: '/etiquetas/modificar',
                        templateUrl: 'partials/blo-tag-edit.html'
                    })
                    .state('app.blo-pages', {
                        url: '/paginas',
                        templateUrl: 'partials/blo-pages.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/pages-startfrom.js',
                                        'js/controllers/blo-pages.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-pageview', {
                        url: '/pagina/{pageId:[0-9]{1,4}}',
                        templateUrl: 'partials/blo-page-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-page-view', {
                        url: '/paginas/ver',
                        templateUrl: 'partials/blo-page-item.html'
                    })
                    .state('app.blo-page-add', {
                        url: '/paginas/crear',
                        templateUrl: 'partials/blo-page-add.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-page-edit', {
                        url: '/paginas/modificar',
                        templateUrl: 'partials/blo-page-edit.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })

                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'partials/ui-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load([
                                      'js/services/UserCommands.js',
                                      'js/services/user.js',
                                      'js/controllers/login.js',
                                      '../bower_components/font-awesome/css/font-awesome.css'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('access.register', {
                        url: '/register',
                        templateUrl: 'partials/ui-register.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/controllers/register.js', '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'partials/ui-forgotpwd.html'
                    })
                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'partials/ui-404.html'
                    })
                    .state('access.500', {
                        url: '/500',
                        templateUrl: 'partials/ui-500.html'
                    })
                    .state('access.lockscreen', {
                        url: '/lockscreen',
                        templateUrl: 'partials/ui-lockscreen.html'
                    })


            }
        ]
    );
