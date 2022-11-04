define("Character.Model", [
  "underscore"
], function (_) {
  "use strict";

  return {
    
    getById: function getById(id){
    var searchCharacter = nlapiSearchRecord(
      "customrecord_characters",
      null,
      [
       new nlobjSearchFilter('internalid', null, null, id)
      ],
      [
        new nlobjSearchColumn("custrecord_character_rickandmortycf_name"),
        new nlobjSearchColumn("custrecord_characters_rickandmortycf_spe"),
        new nlobjSearchColumn("custrecord_character_rickandmortycf_gend"),
        new nlobjSearchColumn("custrecord_character_rickandmortycf_loca"),
        new nlobjSearchColumn("custrecord_character_rickandmortycf_orig"),
        new nlobjSearchColumn("custrecord_character_rickandmorty_image")
      ]
    );
    return (searchCharacter, function mapNlObj(searchRecord) {
      return {
        name: searchRecord.getValue(
          "custrecord_character_rickandmortycf_name"
        ),
        specie: searchRecord.getValue(
          "custrecord_characters_rickandmortycf_spe"
        ),
        gender: searchRecord.getValue(
          "custrecord_character_rickandmortycf_gend"
        ),
        location: searchRecord.getValue(
          "custrecord_character_rickandmortycf_loca"
        ),
        origin: searchRecord.getValue(
          "custrecord_character_rickandmortycf_orig"
        ),
        image: searchRecord.getValue(
          "custrecord_character_rickandmorty_image"
        )
      };
    });
    },
    getList: function getList() {
      var searchCharacters = nlapiSearchRecord(
        "customrecord_characters",
        null,
        [],
        [
          new nlobjSearchColumn("custrecord_character_rickandmortycf_name"),
          new nlobjSearchColumn("custrecord_characters_rickandmortycf_spe"),
          new nlobjSearchColumn("custrecord_character_rickandmortycf_gend"),
          new nlobjSearchColumn("custrecord_character_rickandmortycf_loca"),
          new nlobjSearchColumn("custrecord_character_rickandmortycf_orig"),
          new nlobjSearchColumn("custrecord_character_rickandmorty_image")
        ]
      );

     return _.map(searchCharacters, function mapNlObj(searchRecord) {
        return {
          name: searchRecord.getValue(
            "custrecord_character_rickandmortycf_name"
          ),
          specie: searchRecord.getValue(
            "custrecord_characters_rickandmortycf_spe"
          ),
          gender: searchRecord.getValue(
            "custrecord_character_rickandmortycf_gend"
          ),
          location: searchRecord.getValue(
            "custrecord_character_rickandmortycf_loca"
          ),
          origin: searchRecord.getValue(
            "custrecord_character_rickandmortycf_orig"
          ),
          image: searchRecord.getValue(
            "custrecord_character_rickandmorty_image"
          )
        };
      });
    },
  };
});
