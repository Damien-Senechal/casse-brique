class PlayerScore {
    //fonction get qui permet de recuperer le score
    get score() {
        return this._score;
    }

    //fonction set qui permet de modifier le score
    set score(value) {
        this._score = value;
        this.$score.textContent = this._score
        console.log(this)
    }

    //Constructeur de Joueur ou on initialise ces parametres
    constructor(name,scoreId) {
        this._score = 0;
        this.name = name;
        this.scoreId = scoreId;
        this.$el = document.getElementById(scoreId);
        this.$score = this.$el.querySelector(".score")
        this.$name = this.$el.querySelector(".name")
        this.$name.textContent=name;

    }
}