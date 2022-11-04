define("CharactersCollection.View", [
  
  "SCCollectionView",
  "Character.Cell.View",
  "RowView",
  "acme_characters_collection.tpl",
  "character_collection_view_row.tpl",
  "Characters.Collection",
], function (
  
  SCCollectionView_,
  CharacterCellView,
  RowView,
  acme_characters_collection,
  character_collection_view_row_tpl,
  CharactersCollection
) {
  "use strict";

  var SCCollectionView = SCCollectionView_.SCCollectionView;

  function CharactersCollectionView(options) {
    var collection = options.collection.models;
    SCCollectionView.call(this, collection);
    this.template = acme_characters_collection;
  }

  CharactersCollectionView.prototype = Object.create(
    SCCollectionView.prototype
  );

  CharactersCollectionView.prototype.constructor = CharactersCollectionView;

  CharactersCollectionView.prototype.getContext = function () {
    return {
      // name: this.collection.get("name"),
    };
  };

  CharactersCollectionView.prototype.getCellViewsPerRow = function () {
    return 6; //The number of cells to be rendered in a row.
  };

  CharactersCollectionView.prototype.getCellViewInstance = function (
    element,
    index
  ) {
    
    return new CharacterCellView({

      element: element,
      index: index,
    });
  };

  CharactersCollectionView.prototype.getRowViewInstance = function (index) {
    return new RowView.RowView({ template: character_collection_view_row_tpl });
  };
  return CharactersCollectionView;
});
