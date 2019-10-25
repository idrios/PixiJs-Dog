
// pupMain is the center pup
// pupStyle is a pup from the array of pups at the bottom (top?) of the screen
// pupStyles are basically UI pups, and while the scene takes place behind them
var LAYOUT_CONFIG = "desktop-default"
var PUP_CONFIG = "desktop-default"

// frameData (layout constraints)
var _frameWidth; 
var _frameHeight; 
var _marginWidth; 
var _marginHeight; 
var _bufferWidth;

// pupInfo (layout variables)
var _pupStyleQuantity; 
var _pupStyleWidth;
var _pupStyleHeight; 
var _pupStyleAspectRatio // (Width / Height) 
var _maxPupWidth; 
var _maxPupHeight;
var _maxPupsPerRow; 
var _pupIndexToCoordinate;

var _pupMain;

// pixijs renderer
var _renderer; 
var _stage; 

PIXI.loader // TODO: learn pixi well enough to do this initialization smarter
    .add("pup", "images/pup.png")
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
        default:
            loadConfigDesktopDefault(); 
            break; 
    }
}

function loadConfigDesktopDefault(){
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
function addPupStyle(index, style){
    var pup = style; 

}

function SpinningPupStyle(){
    pup = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );
    // TODO: logic for pup that makes main pup spin


    return pup
}

function BouncingPupStyle(){
    pup = new PIXI.Sprite(
        PIXI.loader.resources["pup"].texture
    );
    // TODO: logic for pup that makes main pup bounce around like a happy pup


    return pup; 
}