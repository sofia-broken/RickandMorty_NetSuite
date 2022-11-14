// @module Acme.hello_world.HelloWorld
define('Character.View', [
    'PageType.Base.View',
    'Character.Model',
    'acme_hello_world_helloworld.tpl',
    'Utils'
], function defineCharacterView(
    PageTypeBaseView,
    CharacterModel,
    acme_hello_world_helloworld,
    Utils
) {
    'use strict';

    // @class Acme.hello_world.HelloWorld.View @extends Backbone.View
    return PageTypeBaseView.PageTypeBaseView.extend({
        template: acme_hello_world_helloworld,
        initialize: function initialize() {},
        beforeShowContent: function beforeShowContent() {
            var id = this.options.routerArguments[0];
            this.model = new CharacterModel();
            this.model.url = Utils.addParamsToUrl(this.model.url, {
                id: id
            });
            return this.model.fetch();
        },

        getContext: function getContext() {
            return {
                name: this.model.attributes[0].name,
                specie: this.model.attributes[0].specie,
                gender: this.model.attributes[0].gender
            };
        }
    });
});
