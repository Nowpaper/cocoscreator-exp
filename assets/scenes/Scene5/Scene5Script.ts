// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Scene5Script extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private count = 0;
    start () {
        let self = this;
        setInterval(()=>{
            self.count += 1;
            let str = 'loading';
            for(let i = 0 ; i < self.count % 5;i++){
                str += '.';
            }
            self.label.string = str;
        },1000)
    }
    
    // update (dt) {}
}
