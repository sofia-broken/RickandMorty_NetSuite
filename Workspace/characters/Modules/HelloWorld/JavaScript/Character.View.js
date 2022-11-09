// @module Acme.hello_world.HelloWorld
define('Character.View', [
    'PageType.Base.View',
    'Character.Model',
    'acme_hello_world_helloworld.tpl',
    'underscore',
    'Utils'
], function defineCharacterView(PageTypeBaseView, CharacterModel, acme_hello_world_helloworld, _, Utils) {
    'use strict';

    // @class Acme.hello_world.HelloWorld.View @extends Backbone.View
    return PageTypeBaseView.PageTypeBaseView.extend({
        template: acme_hello_world_helloworld,
        initialize: function initialize() {},
        beforeShowContent: function beforeShowContent() {
            var id =
            (this.options.routerArguments &&
                this.options.routerArguments.length &&
                this.options.routerArguments[0]) ||
            '';
            console.log('id', id);
            // TODO: si no me pasan id o no es un numero.. muestro algun tipo de error
            this.model = new CharacterModel();
            this.model.url = Utils.addParamsToUrl(this.model.url, {
                id: id
            });
            return this.model.fetch();
        },

        getContext: function getContext() {
            return {
                var1: this.model.get('name'),
                var2: this.model.get('gender'),
                var3: this.model.get('status')
            };
        }
    });
});
