
define(
	'Character.Entrypoint'
,   [
		'Character.View',
        'Characters.List.View'
        
	]
,   function (
		CharacterView,
        CharactersListView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var userprofilecomponent = container.getComponent("UserProfile");
            userprofilecomponent.getUserProfile().then(function(profile) {
                let isLoggedIn = profile.isloggedin;
                if(isLoggedIn){
                    var PageType = container.getComponent('PageType');

                    PageType.registerPageType({
                        name: 'hello_world',
                        routes: ['character/:id'],
                        view: CharacterView,
                        defaultTemplate: {
                            name: 'acme_hello_world_helloworld.tpl',
                            displayName: 'Hello World'
                        }
                    });
                    PageType.registerPageType({
                        name: 'characters',
                        routes: ['characters'],
                        view: CharactersListView,
                        defaultTemplate: {
                            name: 'characters_list.tpl',
                            displayName: 'characters'
                        }
                    });
                }
            })

			
		}
	};
});
