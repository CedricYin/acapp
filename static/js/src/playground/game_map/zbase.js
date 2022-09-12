class GameMap extends AcGameObject {
    constructor(playground) {
        super();  // 调用基类构造函数
        this.playground = playground;

        // 画布canvas
        this.$canvas = $(`<canvas></canvas>`)
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";  // 颜色（黑）
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);  // 矩形（左上坐标，右下坐标）
    }
}

