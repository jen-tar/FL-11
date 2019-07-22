class Fighter {
    constructor(props) {
        let _props = props;
        let _wins = 0;
        let _losses = 0;


        this.getName = () => props.name;

        this.getDamage = () => props.damage;

        this.getAgility = () => props.agility;

        this.getHealth = () => props.hp;

        this.dealDamage = (x) => {
            _props.hp -= x;
            if (_props.hp < 0) {
                _props.hp = 0;
            }
        }
        this.setHealth = (x) => {
            _props.hp += x;
        }
        this.addWin = () => {
            _wins += 1;
            return _wins;
        }
        this.addLoss = () => {
            _losses += 1;
            return _losses;
        }

        this.logCombatHistory = () => {
            return console.log(`Name: ${this.getName()}, Wins:${_wins}, Losses:${_losses}`);
        }

    }
    attack(defender) {
        let total = 99;
        let chance = Math.floor(Math.random() * total);
        if (chance > defender.getAgility() - 1) {
            //if attack is successful
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage ` +
                `to ${defender.getName()}. Defender health = ${defender.getHealth()}`)
        } else {
            console.log(`${this.getName()} missed the attack`);
        }
    }


    heal(x) {
        let total = 100;
        if (x + this.getHealth() >= total) {
            this.setHealth(total - this.getHealth());
            console.log(`${this.getName()} healed to the maximum. Health = ${this.getHealth()}`)
        } else if (x + this.getHealth() < total) {
            this.setHealth(x)
            console.log(`${this.getName()} healed by ${x} points. Health = ${this.getHealth()}`)

        }
    }

}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() <= 0) {
                break;
            } else {
                fighter2.attack(fighter1);
            }
        }
        if (fighter1.getHealth() === 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter2.getName()} is a winner`);
        } else {
            fighter1.addLoss();
            fighter2.addWin();
            console.log(`${fighter1.getName()} is a winner`);

        }
    } else {
        console.log('Fighter’s is dead, can"t start new battle ')
    }

}