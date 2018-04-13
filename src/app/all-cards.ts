
import { CardType, Role } from './defs';

export const AllHelp = {
  Cave: [
    'When prompted to place multiple tiles, you should place them one at a time, drawing new tiles in-between.',
    'Any crystal tiles collapsed (even before the collapse) count towards the Cave\'s victory condition.',
    'Used event cards and rejected treasures are removed from the game entirely.',
    'The Cave can move a rockslide token if all 3 have been placed already.',
    'The Cave gets credit during its Collect Omens phase if the Thief has any un-stashed treasures on his board.',
    'When removing tiles, if a player piece is on it, that player must legally be able to exit the tile using their Forced Movement rules. If they cannot, the tile is not removed.',
    'Treasure must be placed on a dark, unoccupied tile.',
    'Variant/Uncertain Treasures: The Cave instead draws three treasures, puts one on the bottom of the deck. The Knight chooses one of the remaining two treasures to decide to accept or decline. The other treasure goes on the bottom of the deck.',
    'Variant/Setup: In a game with 6 or more players, the Cave should take the Crowded House variant card.'
  ],

  Dragon: [
    'When using scorch, the Dragon should reveal and orient tiles one at a time instead of all at once.',
    'The Scale cards are not added to the Dragon\'s power deck automatically, instead they are only added when the Dragon successfully uses Smash or Wrath.',
    'When removing tiles, if a player piece is on it, that player must legally be able to exit the tile using their Forced Movement rules. If they cannot, the tile is not removed.',
    'While above-ground, the Dragon cannot enter dark tiles.',
    'When revealing tiles, they must form an unbroken path to the entrance tile, if possible.',
    'The Dragon may only move one cube per track per turn to the Wakefulness track.',
    'Movement/Other Players: Entering a tile with the Knight or Goblins prompts an attack from them only if their strength is high enough that they could do so.',
    'Movement/Other Players: Entering a tile with the Ghoul while underground is always possible.',
    'Movement/Other Players: Entering a tile with the Ghoul while above ground requires that the Dragon\'s armor be greater than the Ghoul\'s defense.',
    'Variant/Setup: If the Knight is not attacking the Dragon, the Dragon should take the Ash Dragon variant card.',
    'Variant/Setup: If there is no Cave, the Dragon should take the Past Plunder variant card.',
    'Variant/Setup: In a solo game, the Dragon should take the Alone in the Dark variant card.'
  ],

  Ghost: [
    'The Ghost is unable to possess another role if any player is on a Ghost tile with a locked artifact.',
    'The Ghost may not end her turn on a space with an artifact, or a space that contains a player holding one.',
    'A player can only use Mental Block on the Ghost if they occupy the same tile at any point in time during their turn.',
    'The Ghost can use telekinesis to move a player onto a tile to lock an artifact.',
    'The Goblins artifact is assigned to the first revealed tribe. If that tribe leaves the map, so does the artifact. The artifact is then assigned to the next tribe to reveal.',
    'The Ghost may force a possessed player to drop or collect an artifact on their space during the possession turn, but the possessed player can still only hold one artifact at most.',
    'Ghost tiles without a locked artifact on them cannot be collapsed.',
    'The Cave player must have three separate piles of tiles (instead of one) with two Ghost tiles in each pile.',
    'The Cave Ghost has special rules for most Cave abilities. In general, they must be operating on tiles adjacent to the Cave Ghost.',
    'The Cave Ghost\'s possessions cannot be blocked.',
    'Treasure must be placed on a dark, unoccupied tile.',
    'Movement/Other Players: The Ghost can move through open space, so long as she does not end her turn on one.',
    'Movement/Other Players: The Ghost may always enter another players tile.',
    'Variant/Setup: In a solo game, the Ghost should take the Alone in the Dark II variant card.',
    'Variant/Setup: In a game with 6 or more players, the Cave Ghost should take the Crowded House variant card.'
  ],

  Ghoul: [
    'The Ghoul cannot attack the same player twice in the same turn.',
    'The Ghoul cannot use both a "once per turn" and a "once per game" effect on the same card.',
    'The Ghoul cannot use two of the same "once per game" effects in any turn.',
    'Movement/Other Players: The Ghoul must spend +1 movement to enter a tile without attacking a player. If he cannot attack them, he must spend +1 to enter the tile.',
    'Variant/Skittering: The Ghoul may choose the tile type, and the skitterer may choose the specific tile.',
    'Variant/Setup: If there is no Dragon and no Cave, the Vile Ghoul should take the Past Plunder variant card.',
    'Variant/Setup: In a solo game, the Ghoul should take the Alone in the Dark II variant card.'
  ],

  Goblins: [
    'The Goblins cannot use more strength tokens than allowed by the game, it is a hard limit.',
    'Card with a treasure chest in the top right are Schemes. The Goblins must pay for them with treasure. They cannot plunder and carry treasure unless they have a Scheme. Schemes cost 1 Treasure + the # of Schemes you have to buy.',
    'The Goblins may hold a maximum of 5 Secret cards at any time.',
    'Purchased Schemes do not count towards the Secret limit of 5.',
    'When removing tiles, if a player piece is on it, that player must legally be able to exit the tile using their Forced Movement rules. If they cannot, the tile is not removed.',
    'The AMBUSH section of each monster is not used when the Goblins are being played, only when no player is playing the Goblins or Vile Ghoul.',
    'When overpopulating, The Goblins may scatter any revealed tribe. If there are none, they may scatter any hidden tribe.',
    'When discarding monsters, the Bones tribe is able to choose which to discard if they have two.',
    'If there are no valid tiles for a tribe to reveal to on the map, they may lurk next to any tile. On their next turn, they may only move onto the map.',
    'Movement/Other Players: Entering a tile with the Knight or Dragon requires the Goblins strength to be greater than the targets strength or armor respectively.',
    'Movement/Other Players: The Goblins may always enter the Thiefs tile, but to attack, the Goblins must be able to exceed the stealth of the Thief.',
    'Movement/Other Players: Entering a tile with the Ghoul requires that the tribe strength be greater than the defense of the Ghoul.',
    'Variant/Setup: If there is no Dragon (or Unicorn) and no Cave, the Goblins should take the Past Plunder card.',
    'Variant/Setup: If the Goblins are playing against only the Dragon (or Unicorn), the Goblins should take the Past Plunder variant card.',
    'Variant/Setup: If the Goblins are playing against only the Cave, the Goblins should take the Flare variant card.',
    'Variant/Setup: In a solo game, the Goblins should take the Alone in the Dark variant card.'
  ],

  Knight: [
    'The Knight can\'t move if she has no encounters left.',
    'The Knight can never lose her first two Hero Cubes.',
    'The Knight may always immediately allocate Hero Cubes when they are obtained.',
    'If the Knight is attacked, she may allocate any unused Hero Cubes to strength.',
    'If a tile has multiple things to be encountered, the Knight still only has to spend one encounter to resolve all effects of that tile.',
    'The Knight gains one grit for every tile she reveals.',
    'The Knight may only attack the Dragon once per turn if he is underground.',
    'When removing tiles, if a player piece is on it, that player must legally be able to exit the tile using their Forced Movement rules. If they cannot, the tile is not removed.',
    'Movement/Other Players: The Knight may freely enter a tile with the Dragon if he is underground, but must spend an encounter to attack him.',
    'Movement/Other Players: The Knight may enter the tile with the Unicorn if her strength is greater than or equal to his armor. When equal, she must roll the dragon die to attack.',
    'Movement/Other Players: The Knight cannot enter the tile with the Dragon while he is above ground unless her strength is equal to or greater than his armor.',
    'Movement/Other Players: The Knight may only enter a tile with a Goblin tribe if her strength is greater than the tribes strength. Entering this tile prompts an attack.',
    'Movement/Other Players: The Knight may only enter a tile with the Ghoul if her strength is greater than the Ghouls defense. Entering this tile prompts an attack.',
    'Movement/Other Players: The Knight may freely enter a tile with the Thief, but must spend an encounter to attack him.',
    'Variant/Setup: If there are no Goblins or Vile Ghoul, the Knight should take the Goblin Infestation variant card.',
    'Variant/Setup: If the Knight is playing against only the Cave, the Knight should take the Flare variant card.',
    'Variant/Setup: If there is no Dragon (or Unicorn), the Knight should take the Flare variant card.',
    'Variant/Setup: In a solo game, the Knight should take the Alone in the Dark variant card.'
  ],

  Thief: [
    'The Thief may re-allocate his stats every turn.',
    'The Thief must enter the entrance tile to stash treasure, but not necessarily stop on it.',
    'The Thief may only target a particular player once per turn across all of his actions.',
    'The Thief only returns Dragon Gems to the Dragon when stashing them. At that time, they are changed into normal treasure tokens.',
    'The Thief only resets his Loot Drop Level when he stashes a treasure.',
    'After stashing any number of treasures, the Thief\'s loot drop level returns to 3.',
    'Movement/Other Players: The Thief may always enter a tile containing another player.',
    'Movement/Other Players: The Thief may only enter a tile containing the Ghoul if his stealth is greater than the Ghouls defense.',
    'Variant/Setup: If there are two or fewer other players, the Thief should take the Flare variant card (in this game, Past Plunder is not used).',
    'Variant/Setup: In a solo game, the Thief should take the Alone in the Dark variant card.'
  ],

  Unicorn: [
    'The Unicorn can turn 90 or 180 degrees.',
    'The Unicorn may only interact with a treasure token or crystal if he ends his movement, teleport, or turn on that tile (not just passing by it).',
    'The Unicorn may not interact with a treasure or crystal if his action was angry.',
    'The Unicorn teleports after the Ghoul skitters.',
    'When the Unicorn teleports (but not forced teleports), and before the collapse has begun, he may choose to teleport into an open space.',
    'The Displacement Blast action collapses the tile at the chosen destination.',
    'Attacks happen before interacting with treasures or crystals.',
    'Movement/Other Players: The Unicorn may always enter a tile containing another player. This prompts an attack against that player.',
    'Variant/Setup: If there is no Cave and no Dragon, the Unicorn should take the Past Plunder variant card.',
    'Variant/Setup: In a solo game, the Unicorn should take the Alone in the Dark II variant card.'
  ]
};

export const AllRules = {
  Cave: [
    'Cave'
  ],

  Dragon: [
    'Dragon'
  ],

  Ghost: [
    'Ghost',
    'Ghost (cont\'d)',
    'Cave Ghost'
  ],

  Ghoul: [
    'Ghoul',
    'Ghoul (cont\'d)',
    'Vile Ghoul'
  ],

  Goblins: [
    'Goblins'
  ],

  Knight: [
    'Knight'
  ],

  Thief: [
    'Thief'
  ],

  Unicorn: [
    'Nightmare Unicorn',
    'Nightmare Unicorn (cont\'d)',
    'Shadow Unicorn'
  ]
};

export const AllBoards = {
  Cave: [
    'Cave'
  ],

  Dragon: [
    'Dragon'
  ],

  Ghost: [
    'Ghost',
    'Cave Ghost'
  ],

  Ghoul: [
    'Ghoul',
    'Vile Ghoul'
  ],

  Goblins: [
    'Goblins'
  ],

  Knight: [
    'Knight'
  ],

  Thief: [
    'Thief'
  ],

  Unicorn: [
    'Nightmare Unicorn',
    'Shadow Unicorn'
  ]
};

export interface Card {
  name: string;
  role: Role;
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
