ig.module( 'game.levels.dungeon-template' )
.requires( 'impact.image','game.entities.void','game.entities.spawner-bonus','game.entities.spawner-heros','game.entities.player' )
.defines(function(){
LevelDungeonTemplate=/*JSON[*/{"entities":[{"type":"EntityVoid","x":48,"y":1100,"settings":{"size":{"x":50,"y":80},"name":"leftSide","flip":0}},{"type":"EntityVoid","x":1176,"y":1100,"settings":{"size":{"x":50,"y":80},"name":"rightSide","flip":1}},{"type":"EntitySpawnerBonus","x":696,"y":36,"settings":{"target":{"1":"rightSide","2":"leftSide"},"entities":"EntityGoat","delay":3.5,"name":"spawner-bonus"}},{"type":"EntitySpawnerHeros","x":476,"y":36,"settings":{"delay":2.5,"target":{"1":"leftSide","2":"rightSide"},"name":"spawner"}},{"type":"EntityPlayer","x":560,"y":-280}],"layer":[{"name":"stars","width":5,"height":5,"linkWithCollision":false,"visible":1,"tilesetName":"/media/sprites/sky-tiles.png","repeat":true,"preRender":true,"distance":"3","tilesize":80,"foreground":false,"data":[[13,10,11,12,13],[0,0,10,0,0],[21,22,0,10,13],[0,0,35,13,36],[21,10,12,0,21]]},{"name":"middle_ground","width":19,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"/media/sprites/sky-tiles.png","repeat":false,"preRender":true,"distance":"2","tilesize":80,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,1,2,1,2,3,4,0,5,6,7,8,4,5,2,6,7,8,0],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]]},{"name":"main","width":16,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"/media/sprites/sky-tiles.png","repeat":false,"preRender":true,"distance":"1","tilesize":80,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[26,15,16,17,18,19,20,27,20,27,28,29,30,31,32,26],[26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26],[25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25],[25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25],[33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33]]},{"name":"collision","width":32,"height":34,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":40,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,45],[34,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelDungeonTemplateResources=[new ig.Image('/media/sprites/sky-tiles.png'), new ig.Image('/media/sprites/sky-tiles.png'), new ig.Image('/media/sprites/sky-tiles.png')];
});