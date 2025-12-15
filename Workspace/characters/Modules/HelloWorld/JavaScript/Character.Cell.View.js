define('Character.Cell.View', ['SCView', 'Character.Model', 'character_cell_view.tpl'], function (
    SCViewModule,
    CharacterModel,
    character_cell_view_tpl
) {
    'use strict';

    var SCView = SCViewModule.SCView;

    function CellView(options) {
        SCView.call(this, options);

        this.model = options.element;

        this.template = character_cell_view_tpl;
    }

    CellView.prototype = Object.create(SCView.prototype);
    CellView.prototype.constructor = CellView;

    CellView.prototype.getContext = function () {
        return {
            name: this.model.get('name'),
            species: this.model.get('species'),
            gender: this.model.get('gender'),
            image: this.model.get('image'),
            location: this.model.get('location'),
            origin: this.model.get('origin')
        };
    };

    return CellView;
});
//test comment
//test comment 2
//test comment 3
//test comment 4 5