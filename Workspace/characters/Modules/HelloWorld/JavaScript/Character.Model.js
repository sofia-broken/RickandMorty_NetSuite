// Model.js
// -----------------------
// @module Case
define("Character.Model", ["SCModel", "Utils"], function(
    SCModelModule,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    
    var SCModel = SCModelModule.SCModel;
     
 
    function CharactersModel (data) {

        // if(!id) {
        //     throw new Error("You must provide the id")
        // }

        SCModel.call(this);
        
        this.urlRoot = function() {
            return  Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Character.Service.ss'))
        }
        console.log(data)
        this.set(data)
    }

    CharactersModel.prototype = Object.create(SCModel.prototype);
 
    CharactersModel.prototype.constructor = CharactersModel;

 
 
    return CharactersModel
})
