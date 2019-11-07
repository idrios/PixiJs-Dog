//-----------------------------------------------------------------------------
// Scene
//
// frame object containing the entire display
class Scene {

}

Object.defineProperties(Scene.prototype, {
    // layout constraints
    width: { get: function() {return this._width}, configurable: true},
    height: { get: function() {return this._height}, configurable: true},
    margin_width: { get: function() {return this._margin_width}, configurable: true}, // these really make more sense being associated with the image
    margin_height: { get: function() {return this._margin_height}, configurable: true},
    buffer_width: { get: function() {return this._buffer_width}, configurable: true},
    buffer_height: { get: function() {return this._buffer_height}, configurable: true},

    // pixijs stuff
    renderer: { get: function() {return this._renderer}},
    stage: { get: function() {return this._stage}}

    //
});

/**
 * @param {int} w Width of canvas (px)
 * @param {int} h Height of canvas (px)
 * @param {int} m_w Margin width - blank space on left and right edges (px)
 * @param {int} m_h Margin height - blank space on top and bottom edges (px)
 * @param {int} buf_w Buffer width - horizontal blank space between elements (px)
 * @param {int} buf_h Buffer height - vertial blank space between elements (px)
 */
Scene.prototype.setlayout = function(w, h, m_w, m_h, buf_w, buf_h){
    this._width = w; 
    this._height = h; 
    this._margin_width = m_w; 
    this._margin_height = m_h; 
    this._buffer_width = buf_w; 
    this._buffer_height = buf_h; 
}

Scene.prototype.initialize = function(){
    this._renderer = PIXI.autoDetectRenderer(_frameWidth, _frameHeight, {
        transparent: true, 
        resolution: 1
    }); 
    this._stage = new PIXI.Container();
}

//-----------------------------------------------------------------------------
// PupHolder
//
// Container object for each pup
// I've changed my mind htough about this and will not use it.. keeping it here
// for posterity though
class PupHolder {

}

Object.defineProperties(PupHolder.prototype, {
    // x coordinate
    x: { get: function() {return this._x}, configurable: true}, 
    // y coordinate
    y = { get: function() {return this._y}, configurable: true},
    // width
    width: { get: function() {return this._width}, configurable: true }, 
    // height
    height: { get: function() {return this._height}, configurable: true },
    // index
    index: {get: function() {return this._index}, configurable: true },
    // available
    available: {get: function() {return this._available}, configurable: true}, 
    // style pup
    pup: {get: function() {return this._pup}, configurable: true}
})


//-----------------------------------------------------------------------------
// PupBase
//
// The superclass of PupMain and PupStyle

function PupBase(width, height) {
    this._width = width; 
    this._height = height; 
    this._ar = CalculatePixiAspectRatio(width, height); 
}

Object.defineProperties(PupBase.prototype, {
    // width
    width: {get: function() {return this._width}, configurable: true},
    // height
    height: {get: function() {return this._height}, configurable: true},
    // aspect ratio
    ar: {get: function() {return this._ar}, configurable: true},
});

PupBase.prototype.info = function(){
    console.log("width: " + this._width, "height: " + this._height, "ar: " + this._ar); 
}


//-----------------------------------------------------------------------------
// PupMain
//
// The object that does stuff either by default or when pupStyle is clicked
function PupMain() {
    PupBase.apply(this, arguments); 
    
}


//-----------------------------------------------------------------------------
// PupStyleSet
//
// The layout object that contains PupStyle properties
function PupStyleSet(pupStyleMaxWidth, pupStyleMaxHeight, ) {
    this.count = count; 
}

Object.defineProperties(PupStyleSet.prototype, {
    // layout width
    width: { get: function() {return this._width}, configurable: true },
    // layout height
    height: { get: function() {return this._height}, configurable: true },
    // pup count
    count: {get: function() {return this._count}, configurable: true},
    // pup holders
    indices: {get: function() {return this._indices}, configurable: true},
    // collection of pups
    pups: {get: function() {return this._arr}, configurable: true}
});

PupStyleSet.prototype.initialize = function(){
    
}

//-----------------------------------------------------------------------------
// PupStyle
//
// The object that, when clicked, performs actions on PupMain
function PupStyle() {
    PupBase.apply(this, arguments); 
}
