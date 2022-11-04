define(
	// id
	'Characters.Collection',
	// dependecies
	['SCCollection',
	'Character.Model',
	'Utils'
	],
	// function
	function(SCCollectionComponent, CharacterModel, Utils) {
		var SCCollection = SCCollectionComponent.SCCollection;

		function CharactersCollection(models, options) {
			SCCollection.call(this, models, options);
			this.model = CharacterModel;
			this.url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Character.Service.ss'))
			
		}
         
		// Inherit parent instance methods.
		CharactersCollection.prototype = Object.create(SCCollection.prototype);

		 CharactersCollection.prototype.parse = function parse(response) {
			return response;
		}


		CharactersCollection.prototype.constructor = CharactersCollection;
       
		// Add instance methods here...

		// Return the AMD constructor
		return CharactersCollection;
	}
);