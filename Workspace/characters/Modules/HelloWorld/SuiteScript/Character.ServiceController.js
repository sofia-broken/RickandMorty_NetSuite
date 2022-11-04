define("Character.ServiceController", [
  "ServiceController",
  "Character.Model",
], function (ServiceController, CharacterModel) {
  "use strict";

  return ServiceController.extend({
    name: "Character",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {},
    },

    get: function get(id) {
      //TODO: 1.Leer id query parameter 2.Si tengo id, buscarlo (CharacterModel.getById(id)) 3.Si no hay id, llamar al listado.
      if (id) {
        return CharacterModel.getById(id);
      } else {
        return JSON.stringify(CharacterModel.getList());
      }
    },
  });
});
