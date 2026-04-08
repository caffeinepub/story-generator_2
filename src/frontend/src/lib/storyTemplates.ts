export type Genre = "fairy-tale" | "horror" | "adventure" | "mystery";

export interface Story {
  title: string;
  paragraphs: string[];
}

const templates: Record<Genre, Array<(name: string) => Story>> = {
  "fairy-tale": [
    (name) => ({
      title: `${name} and the Enchanted Forest`,
      paragraphs: [
        `Once upon a time, in a kingdom nestled between silver mountains and sapphire seas, there lived a young soul named ${name}. Though ${name} was beloved by the villagers, there was a restlessness in their heart — a longing for something just beyond the horizon.`,
        `One misty morning, a golden fox appeared at ${name}'s doorstep, its tail shimmering like sunlight on water. "Follow me," it whispered, "and I shall show you the Enchanted Forest where every wish is a seed waiting to bloom." ${name} hesitated only a heartbeat before stepping into the unknown.`,
        `Deep within the forest, ${name} discovered a clearing where ancient trees hummed lullabies and fireflies wrote poems in light. At the center stood a silver spring whose waters reflected not what was, but what could be. ${name} knelt and drank deeply, feeling courage fill every hollow corner of their soul.`,
        `When ${name} returned to the village at dusk, something had changed — not the cobblestones, not the market stalls, but the way ${name} saw them. Every ordinary thing shimmered with hidden magic. From that day forward, ${name} lived not just with wonder, but as wonder itself, and the golden fox was always nearby, smiling.`,
      ],
    }),
    (name) => ({
      title: `The Three Gifts of ${name}`,
      paragraphs: [
        `In the days when stars still sang and rivers had names, there was a child called ${name} who had nothing but a kind heart and a worn pair of boots. When the winter came cold and hungry, the old witch at the edge of town offered ${name} a bargain: perform three acts of true generosity, and receive three gifts in return.`,
        `${name}'s first act was to share their last loaf of bread with a shivering sparrow. The sparrow transformed into a compass that always pointed toward what ${name} truly needed, not merely what they desired. The second act was lending a cloak to a stranger in the rain, who revealed herself as the goddess of storms — and gave ${name} the power to speak with clouds.`,
        `The third act was the hardest: ${name} forgave the merchant who had cheated their family years before. In that moment of grace, the witch appeared clapping slowly. "You have earned your final gift," she said. She handed ${name} a key carved from moonstone. "This unlocks any door that fear has shut."`,
        `Armed with compass, cloud-speech, and the moonstone key, ${name} set out to mend a world that had forgotten how to be kind. And legend tells that wherever ${name} walked, flowers bloomed in footprints, and people found the courage to give away what they feared losing most.`,
      ],
    }),
    (name) => ({
      title: `${name} and the Forgotten Dragon`,
      paragraphs: [
        `High above the village of Thornwick, a dragon named Solace had slept for three hundred years, forgotten by all except ${name}, who left flowers at the mountain's base each Sunday. The elders called it foolishness. ${name} called it kindness.`,
        `On the night of the blue moon, Solace stirred. The dragon's eyes, the color of thunderclouds, opened and found ${name} standing alone on the mountain path, arms full of wildflowers. "Why do you come?" Solace rumbled, voice like boulders shifting. "Because you seemed lonely," said ${name} simply. The dragon blinked — no one had considered a dragon's loneliness before.`,
        `Solace and ${name} talked through the night, the dragon sharing memories of a world before kingdoms and cartography. By dawn, a friendship had formed that the old songs had no words for. Solace taught ${name} the language of winds; ${name} taught Solace the names of every villager, one story at a time.`,
        `When a great flood threatened Thornwick that spring, Solace carried every soul to high ground while ${name} guided the dragon through fog and fear. The village that had once laughed at ${name}'s flowers now carved two names above their gates: Solace and ${name}, the remembered and the rememberer.`,
      ],
    }),
  ],
  horror: [
    (name) => ({
      title: `What ${name} Heard in the Walls`,
      paragraphs: [
        `${name} moved into the old Vanthorpe house on a Tuesday, which the locals insisted was a mistake. Not the house — the day. "Nothing good begins on a Tuesday in Vanthorpe," the landlord muttered, pressing the key into ${name}'s palm without making eye contact. ${name} laughed it off. By Thursday, ${name} had stopped laughing.`,
        `It started as scratching — soft, rhythmic, like fingernails tracing the inside of the plaster. ${name} assumed mice. Then the scratching began to spell things. Simple words at first: *help*. Then longer messages that ${name} would find in the morning, traced in the dust on the baseboards in handwriting that was not their own. The handwriting looked disturbingly familiar.`,
        `On the fifth night, ${name} pressed an ear to the wall and listened. What came back was not scratching but breathing — slow, patient breathing — and then a voice, thin as wire, that said: "We've been waiting for you to come back, ${name}. You lived here before, you know. A very long time ago." ${name} stumbled backward, knocking over the only lamp.`,
        `In the darkness that followed, the scratching resumed, but now it seemed to come from every wall, the floor, and the ceiling. ${name} found the door and ran into the cold night, never looking back. The landlord was standing on the sidewalk as if expecting this. "Thursday," he said sadly, collecting the key from ${name}'s shaking hand. "It's always Thursday."`,
      ],
    }),
    (name) => ({
      title: `The Last Mirror of ${name}`,
      paragraphs: [
        `${name} noticed the reflection was wrong on a gray November morning. Not dramatically wrong — just a half-second behind, like a video buffering. ${name} leaned closer to the bathroom mirror and waved. The reflection waved back. Then, two seconds later, waved again, on its own.`,
        `Over the following week, the delay grew. By Wednesday, the reflection was a full minute behind ${name}'s movements. ${name} covered every mirror in the apartment with bedsheets, but the wrongness persisted — a feeling of being watched from just outside the frame of every reflective surface. Window glass. Phone screens. The dark surface of morning coffee.`,
        `On Friday, ${name} made the mistake of uncovering the hallway mirror at midnight. The reflection was not delayed this time. It was ahead — already doing what ${name} was about to do, reaching for the light switch before ${name}'s hand moved. It turned to face ${name} directly and pressed one finger to its lips. Then it smiled, slowly and wide, in a way ${name}'s own face had never moved.`,
        `${name} did not sleep. By morning, the reflection had synchronized perfectly. It mimicked every gesture, every blink. But once, just once, when ${name} was not moving at all, the reflection tilted its head. And in its eyes — ${name}'s own eyes — there was something patient and very old, settling in for a long stay.`,
      ],
    }),
    (name) => ({
      title: `${name}'s Last Night at Camp Holloway`,
      paragraphs: [
        `Everyone warned ${name} that Cabin 7 had been locked for a reason. The camp director gave the same answer every year: "Structural issues." But ${name} had seen the scratches on the inside of the door when it blew open in the August storm — scratches made by fingernails, not tools, at a height that suggested whoever made them had been very small, or very desperate.`,
        `On the final night of summer camp, ${name} and two others pried the lock with a pocketknife and slipped inside. The air smelled of cedar and something else — something iron-sweet that made the back of the throat tighten. On every bunk mattress were stains shaped like sleeping children. The sleeping bags were still zipped from the inside.`,
        `${name} found the logbook under the counselor's cot. The last entry, dated August 14th, 1987, read: "They came back again last night. Same as always. They look like the ones we lost but they are not. Do not open the door for them no matter how much they sound like—" The entry stopped mid-sentence.`,
        `Then, from outside the cabin door, came the sound of children laughing. Small fists knocked on the wood, softly. Voices — young, sweet, perfectly familiar — called out the names of everyone inside. The other two campers moved toward the door. ${name} grabbed their arms. Outside, the laughter grew hungrier. The door began to open on its own.`,
      ],
    }),
  ],
  adventure: [
    (name) => ({
      title: `${name} and the Map That Breathed`,
      paragraphs: [
        `${name} had been a cartographer's apprentice for three years before finding the map hidden beneath the floorboards of the old guild house. It was not made of paper. It was made of something that felt like skin, and when ${name} held it near candlelight, the rivers on it moved. The mountains cast tiny shadows. And somewhere in its northern corner, a red mark pulsed like a heartbeat.`,
        `Following the map meant crossing the Sevenmile Gorge, navigating the floating markets of Dubrevka, and bribing a river pilot named Cressida who charged in stories, not coin. ${name} paid with every memory of childhood summers and arrived at the northern shore lighter but richer in a way that couldn't be catalogued.`,
        `The red mark led to a cave behind a waterfall where a civilization had built an entire library inside the rock face — ten thousand years of knowledge carved into obsidian panels, waiting for someone to read them. ${name}'s hands shook as they traced the first words. This was not treasure. This was something far more dangerous: answers.`,
        `${name} spent forty days in the cave, copying what could be copied, memorizing what couldn't. When ${name} finally emerged into daylight, Cressida was waiting on the riverbank, smoking a pipe. "Find what you were looking for?" she asked. ${name} looked back at the waterfall hiding the cave. "I found something much bigger," said ${name}. "Now I have to figure out what to do with it."`,
      ],
    }),
    (name) => ({
      title: `The Stormrider: ${name}'s First Voyage`,
      paragraphs: [
        `${name} signed onto the airship *Verity* as a deckhand with nothing but a waterproof journal and the ability to tie forty-seven different knots. The captain, a tall woman named Orla, asked only one question during the hiring: "Can you make decisions when there's no time to think?" ${name} said yes. It wasn't entirely true yet. It would become true.`,
        `Three days into the crossing of the Ashcloud Reaches, a storm the size of a small country rolled in from the east. The first mate panicked. The navigator went silent. ${name} grabbed the helm and read the wind the way the old fishers back home had taught — by smell, by the way the ropes sang, by the color the clouds turned right before they turned violent. The *Verity* banked hard and slipped between two lightning walls with forty feet to spare.`,
        `When the storm passed, the crew found themselves above an archipelago that did not appear on any chart. Below them: lush, impossible green islands rising from a copper-colored sea, with structures that might have been ruins or might have been something far more recent. Orla turned to ${name} at the helm and raised an eyebrow. "Your call, Stormrider."`,
        `${name} brought the *Verity* down through the copper clouds, heart hammering with the particular joy of standing at the exact edge of what is known. The islands were real. The structures were inhabited. And the people who emerged from the trees were smiling — as though they had been expecting exactly this ship, and exactly ${name}, for a very long time.`,
      ],
    }),
    (name) => ({
      title: `${name} at the Edge of the World`,
      paragraphs: [
        `The bet was simple: ${name} had seven days to reach the place the old sailors called the Rim — the edge where ocean became something that wasn't ocean. No one had ever returned with proof. ${name} had only a small boat, three crates of provisions, a compass that pointed toward magnetic north and also, occasionally, toward something else.`,
        `On day three, the water changed color from blue-green to a deep indigo that seemed to absorb light rather than reflect it. Schools of luminescent fish drifted beneath the hull like living constellations. At night, the stars appeared in configurations ${name} didn't recognize, as though the sky itself was different here — older somehow, less settled.`,
        `On day six, ${name} saw the Rim. It was not an edge. It was a threshold — a place where the physics of things grew polite and flexible, where waves paused mid-curl and then reversed, where the horizon curved upward instead of away. ${name} stepped the mast and climbed to the top, looking out at a world beyond the world, and felt completely, perfectly terrified and alive.`,
        `${name} returned on the seventh day. The proof: a single photograph and a jar of water from beyond the Rim that glowed faintly blue even in daylight. The sailors who had laughed at the bet gathered around in silence. ${name} placed the jar on the bar and sat down. "Seven days," said ${name}. "What do I win?" No one had ever thought to name the prize.`,
      ],
    }),
  ],
  mystery: [
    (name) => ({
      title: `The Case That Changed ${name}`,
      paragraphs: [
        `${name} had solved forty-three cases in eleven years as a private investigator — missing inheritances, forged paintings, the occasional staged death — and had developed a reliable theory: every mystery has a simple explanation and a complicated person behind it. The Hargrove case broke both rules simultaneously.`,
        `The client was a woman named Elsa Hargrove who claimed her late husband's chess set was stolen from a locked room with no windows and a door that had been in her sight for six hours. ${name} examined the room, the chess set's empty case, and the faint smell of burnt lavender that Elsa insisted hadn't been there before. Lavender, ${name} noted. That was new.`,
        `The investigation led ${name} through three city neighborhoods, two contradicting alibis, a locksmith with a memory too good to be honest, and a florist who went pale at the mention of burnt lavender. "It's a signal," the florist whispered. "It means the Vault is open." She would say nothing more. ${name} left with a business card, a headache, and the first real lead: someone was sending messages through smell.`,
        `The chess set, it turned out, was never the point. What mattered were the pieces — each one hollowed, each one carrying a fragment of a document that, assembled, revealed the location of something the city's most powerful people had agreed never to find. ${name} sat in the office that night, pieces spread across the desk, and understood for the first time that solving a mystery was not the same as finishing it.`,
      ],
    }),
    (name) => ({
      title: `${name} and the Vanishing Hour`,
      paragraphs: [
        `Every night at exactly 11:47 PM, something disappeared from Carrow Street. Not dramatically — no explosions, no screaming. A mailbox one night. A park bench the next. A storefront sign. Then, on the seventh night, a person: Dr. Emmett Vane, 68, retired, last seen walking his dog. The dog came home alone. ${name} was called in by morning.`,
        `${name} spent the first day documenting the pattern. Everything vanished from within a twenty-foot radius of the old Carrow clock tower — the one that had stopped working in 1952 and never been repaired. By mapping each disappearance, ${name} traced a slow spiral, tightening toward the tower's base. Something was pulling objects inward. Something was getting closer.`,
        `On night nine, ${name} staked out the tower at 11:40. At 11:47, the air changed pressure and a sound like a single held organ note filled the street. Then the clock began to move. Not forward — backward. The hands spun counterclockwise and the space beneath the clock face shimmered like a heat mirage. Dr. Vane stepped out of it, blinking, holding his hat.`,
        `"Tuesday," said Dr. Vane, looking confused. "It was Tuesday for a very long time." He could not explain more. The clock stopped. The spiral of disappearances stopped. ${name} filed a report that was immediately classified by people with no visible identification. The mystery was solved. The explanation was not something ${name} was permitted to write down.`,
      ],
    }),
    (name) => ({
      title: `${name}'s Last Deduction`,
      paragraphs: [
        `When the painting was stolen from the Aldwich Museum, ${name} was officially retired. The chief of detectives called anyway, at 6 AM on a Sunday, which was how ${name} knew it was serious. The painting — Voss's "Interval," one of only three remaining — had been removed from its frame without triggering a single alarm, without leaving a single print, and without being caught on any of the museum's fourteen cameras.`,
        `${name} walked the gallery for two hours without speaking. The security director hovered anxiously. What ${name} was looking for was not evidence — it was negative space. What was missing besides the painting? The dust pattern on the frame's inner edge suggested the painting had been replaced and then taken again. Someone had made a copy, swapped it, studied the alarms from the inside, then returned for the original.`,
        `The copy was the key. ${name} traced the canvas fibers to a restoration atelier that did not officially exist, run by a woman named Frost who had once been the museum's own senior conservator. Frost didn't deny it. "I wanted to see if anyone would notice the difference," she said, pouring tea. "No one did. For eleven months." She slid the original painting, wrapped in brown paper, across the table.`,
        `${name} brought the painting back. Frost was not arrested — ${name}'s report focused on security failures, not perpetrators. The chief was furious. ${name} was unmoved. "She proved the museum couldn't tell real from false for nearly a year," ${name} said. "That's the case worth solving." ${name} retired again. This time, it stuck. Mostly.`,
      ],
    }),
  ],
};

export function generateStory(genre: Genre, characterName: string): Story {
  const list = templates[genre];
  const template = list[Math.floor(Math.random() * list.length)];
  return template(characterName);
}
