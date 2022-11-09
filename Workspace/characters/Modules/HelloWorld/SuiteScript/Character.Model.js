define('Character.Model', ['SC.Model', 'underscore'], function (SCModel, _) {
    'use strict';

    return SCModel.extend({
        name: 'Character',

        getById: function getById(id) {
            var filters = [new nlobjSearchFilter('internalid', null, 'any', id)];
            var columns = [
                new nlobjSearchColumn('custrecord_character_rickandmortycf_name'),
                new nlobjSearchColumn('custrecord_characters_rickandmortycf_spe'),
                new nlobjSearchColumn('custrecord_character_rickandmortycf_gend'),
                new nlobjSearchColumn('custrecord_character_rickandmortycf_loca'),
                new nlobjSearchColumn('custrecord_character_rickandmortycf_orig'),
                new nlobjSearchColumn('custrecord_character_rickandmorty_image')
            ];

            var searchCharacter = nlapiSearchRecord(
                'customrecord_characters',
                null,
                filters,
                columns
            );
            // var searchCharacter2 = searchCharacter[0].getValue('custrecord_character_rickandmortycf_name');

            return {
                name: searchCharacter[0].getValue('custrecord_character_rickandmortycf_name'),
                specie: searchCharacter[0].getValue('custrecord_characters_rickandmortycf_spe'),
                gender: searchCharacter[0].getValue('custrecord_character_rickandmortycf_gend'),
                location: searchCharacter[0].getValue('custrecord_character_rickandmortycf_loca'),
                origin: searchCharacter[0].getValue('custrecord_character_rickandmortycf_orig'),
                image: searchCharacter[0].getValue('custrecord_character_rickandmorty_image')
            };

            // return searchCharacter2;
        },

        getList: function getList() {
            var searchCharacters = nlapiSearchRecord(
                'customrecord_characters',
                null,
                [],
                [
                    new nlobjSearchColumn('custrecord_character_rickandmortycf_name'),
                    new nlobjSearchColumn('custrecord_characters_rickandmortycf_spe'),
                    new nlobjSearchColumn('custrecord_character_rickandmortycf_gend'),
                    new nlobjSearchColumn('custrecord_character_rickandmortycf_loca'),
                    new nlobjSearchColumn('custrecord_character_rickandmortycf_orig'),
                    new nlobjSearchColumn('custrecord_character_rickandmorty_image')
                ]
            );

            return _.map(searchCharacters, function mapNlObj(searchRecord) {
                return {
                    name: searchRecord.getValue('custrecord_character_rickandmortycf_name'),
                    specie: searchRecord.getValue('custrecord_characters_rickandmortycf_spe'),
                    gender: searchRecord.getValue('custrecord_character_rickandmortycf_gend'),
                    location: searchRecord.getValue('custrecord_character_rickandmortycf_loca'),
                    origin: searchRecord.getValue('custrecord_character_rickandmortycf_orig'),
                    image: searchRecord.getValue('custrecord_character_rickandmorty_image')
                };
            });
        }
    });
});
