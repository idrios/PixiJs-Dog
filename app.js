
// pupMain is the center pup
// pupStyle is a pup from the array of pups at the bottom (top?) of the screen
// pupStyles are basically UI pups, and while the scene takes place behind them
var LAYOUT_CONFIG = "desktop-default"
var PUP_CONFIG = "desktop-default"



// pupInfo (layout variables)
var _pupStyleCount; 
var _pupStyleWidth;
var _pupStyleHeight; 
var _pupStyleAspectRatio // (Width / Height) 
var _pupStyleWidthMax; 
var _pupStyleHeightMax;
var _pupStyleWidth; 
var _pupStyleHeight; 
var _pupStyleXCoordinates;
var _pupStyleYCoordinates; 
var _pupResource = "pup"; 

var _pupMain = new PupMain();
var _pupStyle = new PupStyle(); 

// pixijs renderer
var _renderer; 
var _stage; 

PIXI.loader // TODO: learn pixi well enough to do this initialization smarter
    .add(_pupResource, "images/pup.png")
    .load(setup); 

function setup() {
    loadConfigParameters(); 
    loadPixi(); 
    attachPixi();
    loadPupParameters();  
    loadPup(); 
    loadStylePups(); 

    animationLoop(); 
}

// INITIALIZATION
//-----------------------------------------------------------------------------

// Initialize config ---------------------------------------------
function loadConfigParameters(){
    switch(LAYOUT_CONFIG){
        case "desktop-default":
            loadConfigDesktopDefault(); 
            break;
        case "square512":
            loadConfigSquare512();
            break; 
        default:
            loadConfigDesktopDefault(); 
            break; 
    }
}

function loadConfigDesktopDefault(){
    _frameWidth = document.body.clientWidth; 
    _frameHeight = document.body.clientHeight; 
    _marginWidth = 10; 
    _marginHeight = 10; 
    _bufferWidth = 10; 
}

function loadConfigSquare512(){
    _frameWidth = 512; 
    _frameHeight = 512; 
    _marginWidth = 10; 
    _marginHeight = 10;
    _bufferWidth = 10; 
}

// Initialize pixi ---------------------------------------------
function loadPixi(){
    _renderer = PIXI.autoDetectRenderer(_frameWidth, _frameHeight, {
        transparent: true, 
        resolution: 1
    }); 
    _stage = new PIXI.Container();
}

function attachPixi(){
    document.getElementById('display').appendChild(_renderer.view); 
}

// Initialize pup -----------------------------------------------
function loadPupParameters(){
    switch(PUP_CONFIG){
        case "desktop-default":
            loadPupConfigDesktopDefault(); 
            break;
        default:
            loadPupConfigDesktopDefault(); 
            break; 
    }
}

function loadPupConfigDesktopDefault(){
    _pupMain = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );
    _pupStyleWidthMax = 100; 
    _pupStyleHeightMax = 100; 
    _pupStyleAspectRatio = CalculatePixiAspectRatio(_pupMain); 
    _pupStyleWidth = CalculatePupWidth(_pupStyleWidthMax, _pupStyleHeightMax, _pupStyleAspectRatio); 
    _pupStyleHeight = CalculatePupHeight(_pupStyleWidthMax, _pupStyleHeightMax, _pupStyleAspectRatio);
    _pupStyleCount = CalculatePupCount(_pupStyle); 
    _pupStyleXCoordinates = CalculateXCoordinates(_pupStyleCount, _pupStyleWidth, _marginWidth); // TODO: Obviously these should go in a key-value paired object but I'm still very new to
    _pupStyleYCoordinates = CalculateYCoordinates(_pupStyleCount, _pupStyleWidth, _marginHeight); // JavaScript and don't know the right way to do that. 

}

function loadPup(){
    _pupMain = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );

    _pupMain.rotdir = 1; 
    _pupMain.rotvel = 1; 

    _pupMain.interactive = true; 
    _pupMain.scale.set(0.5, 0.5);
    _pupMain.anchor.set(0.5, 0.5); 
    _pupMain.pivot.set(60, 0); 

    _pupMain.click = function() {
        _pupMain.rotdir *= -1; 
        _pupMain.rotvel *= 1.1; 
    }
    _stage.addChild(_pupMain); 
}

function loadStylePups(){

}

// Animation cycle ------------------------
function animationLoop() {
    requestAnimationFrame(animationLoop); 

    _pupMain.x = _frameWidth / 2; 
    _pupMain.y = _frameHeight / 2; 

    _pupMain.rotation += 0.01*_pupMain.rotvel*_pupMain.rotdir; 

    _renderer.render(_stage); 
}

// Pup styles ------------------------------
//
function addPupStyle(index, styles){ 
    var pup = styles; 

}

function SpinningPupStyle(callbackSprite, targetSprite){
    pup = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );
    // TODO: logic for pup that makes main pup spin

    return pup
}

function BouncingPupStyle(){
    var pup = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );
    // TODO: logic for pup that makes main pup bounce around like a happy pup


    return pup; 
}

