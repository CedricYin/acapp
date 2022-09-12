let AC_GAME_OBJECTS = [];

// 简易游戏引擎
class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.has_called_start = false;  // 是否执行过start函数
        this.timedelta = 0;  // 统一两帧之间的时间间隔（因为各浏览器不同）：当前帧距离上一帧的时间间隔
    }

    // 只会在第一帧执行
    start() {

    }

    // 在每一帧执行
    update() {

    }

    // 在被销毁前执行
    on_destory() {
        
    }

    // 删除该物体
    destory() {
        this.on_destory();
        for(let i = 0; i < AC_GAME_OBJECTS.length; i ++) {
            if(AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;

// 每一帧的动作，timestamp是回调函数被触发的时间
let AC_GAME_ANIMATION = function(timestamp) {
    for(let i = 0; i < AC_GAME_OBJECTS.length; i ++) {
        let obj = AC_GAME_OBJECTS[i];
        if(!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    
    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);  // 告诉浏览器希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
