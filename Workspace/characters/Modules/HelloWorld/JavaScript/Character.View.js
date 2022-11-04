// @module Acme.hello_world.HelloWorld
define('Character.View'
,	[
	'PageType.Base.View',
	'Character.Model',
	'acme_hello_world_helloworld.tpl'
    ]
, function (
	PageTypeBaseView,
	CharacterModel,
	acme_hello_world_helloworld

)
{
    'use strict';
	
	// @class Acme.hello_world.HelloWorld.View @extends Backbone.View
	return PageTypeBaseView.PageTypeBaseView.extend({
        template: acme_hello_world_helloworld,
		initialize: function initialize (options) {
           
        },
		beforeShowContent: function beforeShowContent () {
			var id =  this.options.routerArguments[0];
			// TODO: si no me pasan id o no es un numero.. muestro algun tipo de error
			this.model = new CharacterModel({id:id});
            return this.model.fetch();
           
        },

        getContext: function getContext () {
            return {
                var1: this.model.get('name'),
                var2: this.model.get('gender'),
                var3: this.model.get('status'),
            }
        }
    })
});
