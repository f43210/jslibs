// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var utils = require("Utils");

var configManager = {};

var parseShop = data => {
    var ret = [];
    for(var i = 0; i < data.length; i++){
        var ele = {};
        ele.id = data[i][0];
        ele.name = data[i][1];
        ele.goods = utils.parseItems(data[i][2]);
        ele.icon = data[i][3];
        ele.column = data[i][4];
        ele.sellType = data[i][5];
        ele.price = data[i][6];
        ele.discount = data[i][7];
        ret.push(ele);
    }
    return ret;
};
var parseItems = data => {
    var ret = {}, itemType = {NULL: 0}, itemTooltip = "NULL: 未指定\n", weaponType = {NULL: 0}, weaponTooltip = "NULL: 未指定\n";
    for(var i = 0; i < data.length; i++){
        var ele = {};
        ele.id = data[i][0];
        ele.name = data[i][1];
        ele.icon = data[i][2];
        ele.description = data[i][3];
        ele.energy = data[i][4];
        ele.damage = data[i][5];
        ele.timeLimit = data[i][6];
        ele.editorName = data[i][7];
        ele.install = !!data[i][8];
        ret[ele.id] = ele;
        itemType[ele.editorName] = ele.id;
        itemTooltip += ele.editorName + ": " + ele.name + "\n";
        if (ele.damage > 0) {
            weaponType[ele.editorName] = ele.id;
            weaponTooltip += ele.editorName + ": " + ele.name + "\n";
        }
    }
    
    configManager.ITEM_TYPE = cc.Enum(itemType);
    configManager.WEAPON_TYPE = cc.Enum(weaponType);

    configManager.ITEM_TYPE_TOOLTIP =  configManager.ITEM_TYPE_TOOLTIP || itemTooltip;
    configManager.WEAPON_TYPE_TOOLTIP =  configManager.WEAPON_TYPE_TOOLTIP || weaponTooltip;
    return ret;
};
var parseObjectives = data => {
    var ret = [];
    for(var i = 0; i < data.length; i++){
        var ele = {};
        ele.id = data[i][0];
        ele.condition = data[i][1];
        ele.reward = data[i][2];
        ele.velocity = data[i][3];
        ret.push(ele);
    }
    return ret;
};

configManager.shop = parseShop(require("shop"));
configManager.items = parseItems(require("items"));
configManager.objectives = parseObjectives(require("objectives"));
    
module.exports = cc.dConfig = configManager;