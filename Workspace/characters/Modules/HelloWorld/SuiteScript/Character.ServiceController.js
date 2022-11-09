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

    get: function get() {
      var id = this.request.getParameter('id') || this.data.id
      return id ? CharacterModel.getById(id) : CharacterModel.getList();
    },
  });
});
