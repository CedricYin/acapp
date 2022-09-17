class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="ac-game-playground"></div>`);

        this.hide();  // 由于一开始肯定不是游戏界面，所以先hide

        this.start();
    }

    get_random_color() {
        let colors = ["blue", "red", "grey", "green", "yellow", "pink"];
        return colors[Math.floor(Math.random() * 6)];
    }

    start() {
    }

    show() {  // 打开playground界面
        this.$playground.show();

        // show出来之后再初始化（适应切换界面前的窗口大小）
        this.root.$ac_game.append(this.$playground);

        // 记录游戏界面的宽和高
        this.width = this.$playground.width();
        this.height = this.$playground.height();

        this.game_map = new GameMap(this);  // 生成地图

        // 生成自己和人机
        this.players = [];
        this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, "white", this.height * 0.15, true));
        for (let i = 0; i < 5; i++) {
            this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.15, false));
        }
    }

    hide() {  // 关闭playground界面
        this.$playground.hide();
    }
}

