
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
    ],
    Terrain: [
      { name: 'Canyon' },
      { name: 'Lake' },
      { name: 'Magma' },
      { name: 'Mushroom Forest' },
      { name: 'Pits' },
      { name: 'River' }
    ],
    Difficulty: [
      { name: 'Lava Tube [Easiest]' },
      { name: 'Spillway [Easy]' },
      { name: 'Cave [Standard]' },
      { name: 'Great Cave [Hard]' },
      { name: 'Grand Cave [Expert]' }
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
    ],
    Difficulty: [
      { name: 'Hatchling [Easiest]' },
      { name: 'Whelp [Easy]' },
      { name: 'Dragon [Standard]' },
      { name: 'Elder Dragon [Hard]' },
      { name: 'Ancient Dragon [Expert]' }
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
    ],
    Difficulty: [
      { name: 'Spirit [Easiest]' },
      { name: 'Specter [Easy]' },
      { name: 'Ghost [Standard]' },
      { name: 'Phantom [Hard]' },
      { name: 'Wraith [Expert]' }
    ],
    Reference: [
      { name: 'Blocking the Ghost' }
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
    ],
    Difficulty: [
      { name: 'Ragpicker [Easiest]' },
      { name: 'Scavenger [Easy]' },
      { name: 'Ghoul [Standard]' },
      { name: 'Stalker [Hard]' },
      { name: 'Hunter [Expert]' }
    ],
    Reference: [
      { name: 'Attacking the Ghoul' }
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
    ],
    Difficulty: [
      { name: 'Miscreant [Easiest]' },
      { name: 'Boss [Easy]' },
      { name: 'Chief [Standard]' },
      { name: 'Master [Hard]' },
      { name: 'Warlord [Expert]' }
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
    ],
    Difficulty: [
      { name: 'Novice [Easiest]' },
      { name: 'Squire [Easy]' },
      { name: 'Knight [Standard]' },
      { name: 'Baroness [Hard]' },
      { name: 'Lady [Expert]' }
    ]
  },

  Thief: {
    Upgrade: [
      { name: 'Charm' },
      { name: 'Warlock\'s Wand' },
      { name: 'Cloak of the Mountebank' }
    ],
    Difficulty: [
      { name: 'Footpad [Easiest]' },
      { name: 'Burglar [Easy]' },
      { name: 'Thief [Standard]' },
      { name: 'Prowler [Hard]' },
      { name: 'Invader [Expert]' }
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
      { name: 'Turn Right (Angry)' }
    ],
    Difficulty: [
      { name: 'Terror Pony [Easiest]' },
      { name: 'Night Mare [Easy]' },
      { name: 'Nightmare Unicorn [Standard]' },
      { name: 'Dire Unicorn [Hard]' },
      { name: 'Phantasm Unicorn [Expert]' }
    ],
    Reference: [
      { name: 'Attacking the Unicorn' }
    ]
  },

  Miscellaneous: {
    Variant: [
      { name: 'Flare' },
      { name: 'Goblin Infestation' },
      { name: 'Ash Dragon' },
      { name: 'Past Plunder' },
      { name: 'Alone in the Dark' },
      { name: 'Alone in the Dark II' },
      { name: 'Crowded House' }
    ]
  }
};
