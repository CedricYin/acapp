class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);  // jQuery找html对象直接用 # + id
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);

        this.start();
    }

    start() {
    }
}

