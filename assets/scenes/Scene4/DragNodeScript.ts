// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DragNodeScript extends cc.Component {

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
    }
    touchMove(e:cc.Event.EventTouch){
        this.node.x += e.getDeltaX();
        this.node.y += e.getDeltaY();
        e.bubbles = false;
    }
    // update (dt) {}
}
