// Model.js
// -----------------------
// @module Case
define('Character.Model', ['SCModel', 'Utils'], function defineCharacterModel(
    SCModelModule,
    Utils
) {
    'use strict';

    // @class Case.Fields.Model @extends Backbone.Model

    var SCModel = SCModelModule.SCModel;
    function CharactersModel(data) {
        SCModel.call(this);
        this.url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/Character.Service.ss'));
        this.set(data);
    }

    CharactersModel.prototype = Object.create(SCModel.prototype);

    CharactersModel.prototype.constructor = CharactersModel;

    return CharactersModel;
});
