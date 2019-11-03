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
    if(!width || !height || !pWidth || !pHeight){
        throw "Must initialize with width, height, pupWidth, and pupHeight constraints"; 
    }
    this.count = 
}
//-----------------------------------------------------------------------------
// PupHolder
//
// Container object for each pup
function PupHolder() {

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
// PupStyle
//
// The object that, when clicked, performs actions on PupMain
function PupStyle() {
    PupBase.apply(this, arguments); 
}
