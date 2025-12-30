abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackPower: number,
    protected life: number
  ) {}

  attack(character: Character): void {
    this.showAttackCatchphrase();
    character.decreaseLife(this.attackPower);
  }

  decreaseLife(attackPower: number): void {
    console.log(`${this.emoji} ${this.name} has ${this.life} life points.`);
    this.life -= attackPower;
    console.log(
      `${this.emoji} ${this.name} lost ${attackPower} life points and now has ${this.life} life points.`
    );
  }

  abstract showAttackCatchphrase(): void;
}

class Warrior extends Character {
  protected override emoji: string = "⚔️";

  override showAttackCatchphrase(): void {
    console.log(`${this.emoji} Warrior on the attack!!!`);
  }
}

class Monster extends Character {
  // override is optional on abstract implementations
  protected emoji: string = "👹";

  showAttackCatchphrase(): void {
    console.log(`${this.emoji} Monster is attacking!!!`);
  }
}

const warrior = new Warrior("Warrior", 100, 1000);
const monster = new Monster("Monster", 80, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
