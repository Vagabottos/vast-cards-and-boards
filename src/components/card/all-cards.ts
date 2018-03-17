
import { CardType } from '../../app/defs';

export interface Card {
  name: string;
  type: CardType;
  index: number;
}

export const AllCards = {
  Cave: {
    Event: [
      { name: 'Ambush' },
      { name: 'Ambush' },
      { name: 'Ambush' },
      { name: 'Ambush' },
      { name: 'Light' },
      { name: 'Vantage Point' },
      { name: 'Fresh Air' },
      { name: 'Fresh Water' },
      { name: 'Cave Bread' },
      { name: 'Rats' },
      { name: 'Rats' },
      { name: 'Rats' },
      { name: 'Deep and Dark' },
      { name: 'Deep and Dark' },
      { name: 'Deep and Dark' },
      { name: 'Quake!' }
    ],
    Treasure: [
      { name: 'Silver Gauntlet' },
      { name: 'Elvish Sword' },
      { name: 'Mighty Axe' },
      { name: 'Enchanted Bow' },
      { name: 'Pixie Lantern' },
      { name: 'Treasure Trove' },
      { name: 'Cursed Amulet' },
      { name: 'Rune Staff' },
      { name: 'Heroic Boots' },
      { name: 'Javelin' }
    ]
  },

  Dragon: {
    Power: [
      { name: 'Claw' },
      { name: 'Claw' },
      { name: 'Claw' },
      { name: 'Claw' },
      { name: 'Claw' },
      { name: 'Claw' },
      { name: 'Flame' },
      { name: 'Flame' },
      { name: 'Flame' },
      { name: 'Flame' },
      { name: 'Flame' },
      { name: 'Flame' },
      { name: 'Wing' },
      { name: 'Wing' },
      { name: 'Wing' },
      { name: 'Wing' },
      { name: 'Wing' },
      { name: 'Wing' },
      { name: 'Golden Scale' },
      { name: 'Silver Scale' },
      { name: 'Platinum Scale' }
    ]
  },

  Ghost: {
    Possession: [
      { name: 'Possessed Knight' },
      { name: 'Possessed Goblins' },
      { name: 'Possessed Dragon' },
      { name: 'Possessed Cave' },
      { name: 'Possessed Thief' },
      { name: 'Possessed Ghoul' },
      { name: 'Ghost' },
      { name: 'Possessed Unicorn' },
      { name: 'Possessed Vile Ghoul' }
    ]
  },

  Ghoul: {
    Terror: [
      { name: 'Chase' },
      { name: 'Chase' },
      { name: 'Chase' },
      { name: 'Hunt' },
      { name: 'Hunt' },
      { name: 'Hunt' },
      { name: 'Sneak' },
      { name: 'Sneak' },
      { name: 'Cheat' },
      { name: 'Blink' },
      { name: 'Adapt' },
      { name: 'Seize' },
      { name: 'Scour' }
    ]
  },

  Goblins: {
    Monster: [
      { name: 'Pet Frog' },
      { name: 'Ogre' },
      { name: 'Troll' },
      { name: 'Golem' },
      { name: 'Gnome' },
      { name: 'Wisp' },
      { name: 'Bright Beetles' },
      { name: 'Underworm' },
      { name: 'Blob' },
      { name: 'Flame Giant' },
      { name: 'Ground Kraken' }
    ],
    Secret: [
      { name: 'Secret Tunnels' },
      { name: 'Cave-In' },
      { name: 'Poison' },
      { name: 'Leader' },
      { name: 'Goblin Ruby' },
      { name: 'Blind Fury' },
      { name: 'Fire Bomber' },
      { name: 'Hex' },
      { name: 'Trap' },
      { name: 'Hiding Spots' },
      { name: 'Slingshot' },
      { name: 'Cave Mushrooms' },
      { name: 'Meat!' },
      { name: 'Armory' },
      { name: 'War Banner' },
      { name: 'Underboss' },
      { name: 'Press Gangs' },
      { name: 'Ancient Rituals' },
      { name: 'Mercenaries' },
      { name: 'Eye of Rage' },
      { name: 'Cave Oil' }
    ],
    War: [
      { name: 'Thirst' },
      { name: 'Spite' },
      { name: 'Consumption' },
      { name: 'Desolation' },
      { name: 'Waste' },
      { name: 'Ruin' },
      { name: 'Hate' },
      { name: 'Fear' },
      { name: 'Desperation' },
      { name: 'Pain' }
    ]
  },

  Knight: {
    Sidequest: [
      { name: 'Stalwart' },
      { name: 'Intrepid' },
      { name: 'Daring' },
      { name: 'Fearless' },
      { name: 'Cunning' },
      { name: 'Bedecked' },
      { name: 'Adventrous' },
      { name: 'Swift' },
      { name: 'Eagle-Eyed' },
      { name: 'Persistent' },
      { name: 'Prepared' },
      { name: 'Noble Failure' }
    ]
  },

  Thief: {
    Upgrade: [
      { name: 'Charm' },
      { name: 'Warlock\'s Wand' },
      { name: 'Cloak of the Mountebank' }
    ]
  },

  Unicorn: {
    Unicorn: [
      { name: 'Turn Left (Angry)' },
      { name: 'Move 2 -or- Turn Left' },
      { name: 'Move 3 (Angry)' },
      { name: 'Move 2 -or- Turn Right' },
      { name: 'Turn Right (Angry)' },
      { name: 'Move 2 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Right' },
      { name: 'Move 2 -or- Turn Right' },
      { name: 'Move 3 (Angry)' },
      { name: 'Move 1 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Right' },
      { name: 'Move 3 (Angry)' },
      { name: 'Move 2 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Left' },
      { name: 'Move 1 -or- Turn Right' },
      { name: 'Move 1 -or- Turn Right' },
      { name: 'Move 2 -or- Turn Right' },
      { name: 'Turn Left (Angry)' },
      { name: 'Move 2 -or- Turn Left' },
      { name: 'Move 3 (Angry)' },
      { name: 'Move 2 -or- Turn Right' },
      { name: 'Turn Right (Angry)' },
    ]
  }
};
