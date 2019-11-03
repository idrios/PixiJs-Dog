// Utils
   ///////////////////////////////////////////////////  ^
   //                                               //  |
   //                                               //  |
   //              .--------------.                 //  |
   //              |  ..|\__/|.   |                 //  |
   // marginWidth  |  ;:  O O \;  |                 //  |
   //  |           |   '',,\u/'   |                 //  |height
   //  |           '--------------'                 //  |
   //  | pupWidth          bufferWidth              //  |
   //  | <----->             --> <--                //  |
   //  V .-----. .-----. .-----. .-----. .-----.    //  |
   //<-->| i=0 | | i=1 | | ... | |     | | i=n |    //  |
   //    '-----' '-----' '-----' '-----' '-----'    //  |
   ///////////////////////////////////////////////////  v
// <--------------------width------------------------>

// n := count := number of stylePups
// aspectRatio := width / height
// pupWidth = MIN(maxPupWidth, maxPupHeight*aspectRatio)
function CalculatePixiAspectRatio(pixiSprite){
    var frame = pixiSprite._texture._frame; 
    var width = frame.width; 
    var height = frame.height; 
    return width/height; 
}

function CalculatePupWidth(pupWidthMax, pupHeightMax, aspectRatio){
    return Math.min(pupWidthMax, pupHeightMax*aspectRatio)
}

function CalculatePupHeight(pupWidthMax, pupHeightMax, aspectRatio){
    return Math.min(pupHeightMax, pupWidthMax/aspectRatio)
}

function CalculatePupCount(width, marginWidth, bufferWidth, pupWidth){
    return Math.floor((width - (2*marginWidth) - bufferWidth)/pupWidth+bufferWidth); 
    
}

function CalculateXCoordinates(pupCount, pupWidth, marginWidth){
    var coords = new Array(pupCount); 
    for(var i = 0; i < coords.length; i++){
        coords[i] = marginWidth + (pupWidth*i) + (Math.floor(pupWidth/2)); 
    }
    return coords; 
}

function CalculateYCoordinates(pupCount, pupHeight, marginHeight, canvasHeight){
    var y = canvasHeight - (marginHeight + Math.floor(pupHeight/2));
    var coords = new Array(pupCount); 
    for(var i = 0; i < pupCount.length; i++){
        coords[i] = y; 
    }
    return coords; 
}