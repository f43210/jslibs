
var removeInArray = function(array, item){
    var index = array.indexOf(item);
    if(index !== -1){
        return array.splice(index, 1)[0];
    }
};
var parseJson = function(str){
    if(str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
        }
    }
};

module.exports = {
    removeInArray: removeInArray,
    parseJson: parseJson
};