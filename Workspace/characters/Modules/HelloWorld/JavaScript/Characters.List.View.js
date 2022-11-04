// @module Acme.hello_world.HelloWorld
define('Characters.List.View'
,	[
	'PageType.Base.View',
	'Characters.Collection',
    'CharactersCollection.View',
	'characters_list.tpl',
    ]
, function (
	PageTypeBaseView,
	CharactersCollection,
    CharactersCollectionView,
	characters_list
)
{
    'use strict';
	
	// @class Acme.hello_world.HelloWorld.View @extends Backbone.View
	return PageTypeBaseView.PageTypeBaseView.extend({
        template: characters_list,
		initialize: function initialize () {
        },
		beforeShowContent: function beforeShowContent () {
			this.collection = new CharactersCollection();
            return this.collection.fetch();
        },

        getChildViews() {
            return {
                'Character.List': function() {
                    return new CharactersCollectionView({
                        collection: this.collection
                    });
                }
            };
        },

        getContext: function getContext () {
            return {
                listVar1: 'test listVar1'
            }
        }
    })
});
