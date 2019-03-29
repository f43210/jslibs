// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var instance = null;

cc.dEventManager = cc.Class({
    extends: require("PersistComponent"),

    statics: {
        on () {
            if (instance) {
                instance.node.on.apply(instance.node, arguments);
            }
        },
        off () {
            if (instance) {
                instance.node.off.apply(instance.node, arguments);
            }
        },
        emit () {
            if (instance) {
                instance.node.emit.apply(instance.node, arguments);
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (this.persist()) {
            instance = this;
        }
    },

    // start () {

    // },

    // update (dt) {},

    getInstance () {
        return instance;
    },

    onDestroy () {
        if (instance == this) {
            instance = null;
        }
    }
});
