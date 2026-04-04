// Edit this list to reorder, add titles, and add captions.
// Each entry: { img, title, caption, contain?, layout? }
//          or { imgs: ["a.webp","b.webp"], title, caption }       - duo (2 stacked)
//          or { imgs: ["a.webp","b.webp","c.webp"], title, caption } - trio (3 stacked)
// layout options (single-image only): 'wide' | 'reversed' | 'red' | 'display' | 'collage'
// Multi-image entries auto-select duo/trio - do not set layout on those.
// To reorder: move lines up/down.
const pages = [
  {
    img: "img/IMG_2462.webp",
    title: "We Built This City",
    caption: `Built in 2021 on actual wheels. Yes, the kind that roll. Four people, one strong-willed cat, and a house the size of a good idea have shared this space through every chaotic breakfast and every quiet movie night. The kids grew up here, bunk by bunk. Now they've outgrown it (literally, the ceiling is a real number). So we're handing over the keys. Maybe you're the next chapter?`,
    layout: "wide",
  }, // 2021-07-13–14

  {
    imgs: ["img/tb.JPG", "img/ea.jpg"],
    title: "Freedom! 90",
    caption:
      "It started with a simple math problem: rent money out, forever. Our solution: stop. We did not want a bigger house, we wanted a freer life. So we built our own, smaller, on purpose. Less floor plan, less stuff, less Sunday spent cleaning things we do not care about. Turns out, ditching the square footage gave us more of everything else. Money, weekends, breathing room. Funny how that works.",
    layout: "duo-side",
  },

  {
    img: "img/IMG_1947.webp",
    title: "Highway to Hell",
    caption: `Every great house starts somewhere. Ours started in Borlänge, in the form of a custom-welded steel chassis that barely fit on the roads we had to take home. (Shoutout to <a href="https://tunatrailer.se" target="_blank">Tuna Trailer</a> for building the thing.) Getting it back was less road trip, more mobile obstacle course. Wide loads, narrow lanes, a few close calls, and exactly zero chill. But when it finally sat still on our land? All of it, immediately worth it.`,
  },
  {
    img: "img/IMG_1976.webp",
    title: "Back to Black",
    caption: `We bought a blueprint from New Zealand. High-end, beautiful, completely designed for a climate that has never seen a Swedish winter. So we used it as inspiration rather than instruction. Kept the soul, rewrote the bones. Turns out the best homes aren't built from a packet. They're built from the problems you actually solve.`,
    contain: true,
  }, // 2021-01-29
  {
    img: "img/IMG_0223.webp",
    title: "Here Comes the Sun",
    caption: `The steel skeleton finally met the soil. After the long haul from Borlänge and the nerves of getting it here, seeing it parked and still changed something. It stopped being a cargo on a flatbed and started being the ground beneath our feet. The road chaos faded fast.`,
  }, // 2021-03-05
  {
    imgs: ["img/IMG_0793.webp", "img/IMG_0797.webp"],
    title: "Let It Be",
    caption: `Before our story could begin, someone else's had to end. A woodshed my father built stood exactly where we needed to build. Taking it down was hard. But some transitions ask you to choose, and we chose the future. The ground was clear. We were ready.`,
  }, // 2021-04-03
  {
    img: "img/IMG_0818.webp",
    title: "Somebody's Watching Me",
    caption:
      "Once the trailer was parked, the neighbors came out. People slowed down. Some stopped entirely. In a street of normal houses, a small steel box on wheels was apparently quite the talking point. We didn't mind. It meant we were doing something worth noticing.",
  }, // 2021-04-04
  {
    imgs: ["img/IMG_0843.webp", "img/IMG_0845.webp", "img/IMG_0846.webp"],
    title: "The First Cut Is the Deepest",
    caption: `Theory was over. With a friend alongside us, we laid the first wooden beams across the trailer frame and something shifted. We weren't just building a floor, we were drawing the borders of a new life. Steel met wood. The skeleton got its first layer of skin. Best sound we'd heard in months.`,
  }, // 2021-04-06
  {
    imgs: ["img/IMG_1102.webp", "img/IMG_1104.webp", "img/IMG_1116.webp"],
    title: "Reach for the Sky",
    caption: `Then one day the walls went up and it stopped being a flat platform. Standing between the frames and looking out at where the windows would be, you could feel it. The view from your future home is a very specific kind of excitement. The skeleton was complete. For the first time, it felt like it could hold us.`,
  }, // 2021-04-21
  {
    imgs: ["img/IMG_1119.webp", "img/IMG_1120.webp"],
    title: "Shelter from the Storm",
    caption:
      "The roof went on last. That final piece of the shell turned a construction site into something you could actually stand inside and feel protected by. We weren't building on a trailer anymore. We were standing inside a home.",
  }, // 2021-04-21
  {
    img: "img/IMG_1148.webp",
    title: "Steady as She Goes",
    caption:
      "Behind every great build is someone who actually knows what they're doing. Our carpenter didn't follow the plan, he understood it. His precision and feel for the wood is what gave this place its integrity. We helped where we could. He's the reason it stands the way it does. (You can probably tell which one of us is the carpenter.)",
  }, // 2021-04-23
  {
    img: "img/IMG_1149.webp",
    title: "Cover me in Sunshine",
    caption: `Shower me with good times.
    Tell me that the world's been spinning since the beginning.
    And everything will be alright.
    Cover me in sunshine`,
    contain: true,
  }, // 2021-04-23
  {
    imgs: ["img/IMG_1155.webp", "img/IMG_1159.webp"],
    title: "Hard as a Rock",
    caption:
      "As the cladding went up, the frame disappeared. The skeleton became a facade. What had been open and transparent was now solid, sealed, and ready for whatever a Swedish winter had in mind.",
  }, // 2021-04-23
  {
    img: "img/IMG_1172.webp",
    title: "The Final Countdown",
    caption:
      "Getting close now. The last layers of protection going on, wrapping the structure tight against the elements. The outside was nearly done.",
  }, // 2021-04-24
  {
    img: "img/IMG_1194.webp",
    title: "Cold as Ice",
    caption:
      "Swedish winters don't negotiate. So we lined the floor with Frigolit and got serious about keeping the warmth in. Not the most glamorous day of the build. Absolutely one of the most important.",
  }, // 2021-04-27
  {
    img: "img/IMG_1196.webp",
    title: "Wrapped Around Your Finger",
    caption: `Every wall got wrapped in vapour barrier. It protects the structure from moisture, keeps the insulation dry, and makes the whole thing breathe correctly. Unglamorous, essential, and yes, I absolutely felt like Dexter Morgan the entire time.`,
  }, // 2021-04-28
  {
    imgs: ["img/IMG_1198.webp", "img/IMG_1200.webp", "img/IMG_1203.webp"],
    title: "Work Hard, Play Hard",
    caption:
      "Construction is a long sequence of small, repetitive, unglamorous tasks. That's just what it is. Eventually they add up to a home.",
  }, // 2021-04-29
  {
    imgs: ["img/IMG_1257.webp", "img/IMG_1259.webp"],
    title: "Climb Every Mountain",
    caption:
      "As the inner walls started going up, the blank space turned into something the kids could actually use. Apparently raw framing is perfect for climbing.",
  }, // 2021-05-03
  {
    imgs: ["img/IMG_2360.webp", "img/IMG_2361.webp", "img/IMG_1285.webp"],
    title: "Warm It Up",
    caption:
      "The walls got filled with insulation and suddenly the house had a thermal brain. This is the layer between you and a January morning in Sweden. We took it seriously.",
  }, // 2021-05-06
  {
    img: "img/IMG_1420.webp",
    title: "Dressed for Success",
    caption:
      "The first wooden siding panels went up and the house finally got a face. After months of wraps and frames and raw structure, the building started looking like something you'd actually want to come home to.",
  }, // 2021-05-20
  {
    img: "img/IMG_1547.webp",
    title: "Don't Stop Me Now",
    caption:
      "The build wasn't finished but we couldn't help ourselves. We put the key in the lock and let the boys open the door. Watching that happen made the whole thing feel suddenly, completely real.",
  }, // 2021-06-01
  {
    imgs: ["img/IMG_1559.webp", "img/IMG_1561.webp"],
    title: "Walk This Way",
    caption:
      "The flooring went in and the construction site became a living space overnight. Wood grain wall to wall. No more subfloor. You could finally walk through the place and feel it under your feet.",
  }, // 2021-06-03
  {
    img: "img/IMG_1695.webp",
    title: "Higher Ground",
    caption:
      "First time sitting on the second floor. Looked down at everything we'd built and understood the space properly for the first time. A little boy immediately wanted to climb up and join the view.",
  }, // 2021-06-06
  {
    img: "img/IMG_1779.webp",
    title: "Soul Kitchen",
    caption:
      "The kitchen started taking shape and suddenly the house had a pulse. This is where morning happens. The counters and cabinets going in turned a shell into somewhere you could actually live.",
  }, // 2021-06-13
  {
    imgs: ["img/IMG_1854.webp", "img/IMG_1855.webp"],
    title: "Up on the Roof",
    caption:
      "From the upper level, the whole volume of the space finally made sense. The height, the light, the way everything connects. It's a good place to stand and appreciate what you've built.",
  }, // 2021-06-16
  {
    img: "img/IMG_1860.webp",
    title: "Closing Time",
    caption:
      "The last exterior panels sealed the deal. After months of looking at wraps and bare structure, the building finally had the face we'd imagined it having. The treeline framing it was a bonus.",
  }, // 2021-06-17
  {
    img: "img/IMG_2101.webp",
    title: "Up in the Air",
    caption:
      "The loft bed went in and the highest point of the house became a proper retreat. Quiet, simple, with the wood grain close above you. The perfect place to end the day.",
  }, // 2021-06-29

  {
    img: "img/IMG_2456.webp",
    title: "Everything in Its Right Place",
    caption:
      "The main closet just inside the front door is the command center. Built to handle winter coats, muddy boots, daily chaos. It's the unglamorous hero that keeps the rest of the house from falling apart.",
  }, // 2021-07-10

  {
    imgs: ["img/IMG_2569.webp", "img/IMG_2575.webp"],
    title: "Good Vibrations",
    caption:
      "The exterior was done. So obviously the next step was to bolt climbing holds to the side of the house and turn the wall into a vertical playground. Obviously.",
  }, // 2021-07-17
  {
    img: "img/IMG_2580.webp",
    title: "A Little More Love",
    caption:
      "The loft getting small personal touches. A shelf here, a plant there. A snake plant with very good energy bringing some life to the upper corner.",
  }, // 2021-07-18
  {
    imgs: ["img/IMG_2669.webp", "img/IMG_2685.webp"],
    title: "Every Little Thing She Does Is Magic",
    caption:
      "The stairs do double duty as integrated storage (every inch counts up here). And the sofa found its spot against the windows, right where the light hits it. Small house, smart house.",
  }, // 2021-07-26–27
  {
    imgs: ["img/IMG_2734.webp", "img/IMG_2740.webp"],
    title: "High and Dry",
    caption:
      "Standing in the kitchen and looking up at the loft above, you see how the vertical space keeps the whole place from feeling small. High ceilings, cozy corners. The real move-in test running in parallel: TV on, Sommarlov playing.",
  }, // 2021-07-29–31
  {
    img: "img/IMG_2855.webp",
    title: "Sittin' on the Dock of the Bay",
    caption:
      "Watching my son eat a meal in this light, no inspection mode, no checklist, just a calm evening in our home. That was the moment the project became a place.",
  }, // 2021-08-02
  {
    img: "img/IMG_2881.webp",
    title: "The Other Side",
    caption:
      "A view from the opposite end shows the full layout. Entrance, storage closet, bathroom door, all tucked neatly under the second loft. The flow of the place finally legible from one end to the other.",
  }, // 2021-08-07
  {
    imgs: ["img/IMG_2865.webp", "img/IMG_2867.webp", "img/IMG_2872.webp"],
    title: "Under Pressure",
    caption:
      "The land we built on, the house mid-construction, and the internal plumbing snaking through the walls. The messy in-between stage that everything has to pass through before it becomes finished.",
  }, // 2021-08-11–12
  {
    img: "img/IMG_3077.webp",
    title: "Here Comes Summer",
    caption:
      "The front of the house meeting midsummer. The wooden facade against the greens and garden in full bloom. The building finding its season.",
  }, // 2021-08-21
  {
    imgs: ["img/IMG_2930.webp", "img/IMG_2937.webp", "img/IMG_2941.webp"],
    title: "The Real Slim Shady",
    caption:
      "Summer flowers, meet infrastructure. The water pump, the drains, the sink plumbing. The honest, unglamorous stuff that actually makes a house work. And yes, we managed four full years without a toilet. Not a typo.",
  }, // 2021-08-30
  {
    img: "img/IMG_2944.webp",
    title: "Crawling",
    caption:
      "Look under the house and you see the whole story: insulation, pipes, the mobile foundation that everything sits on. Easy to forget this whole thing can move. It really can though.",
  }, // 2021-08-30
  {
    imgs: ["img/IMG_3671.webp", "img/IMG_3672.webp"],
    title: "Tiny Dancer",
    caption:
      "The bathroom before the fixtures arrived. A tight space doing a lot of work. Shower, sink, water heater, all squeezed in with more grace than you'd expect.",
  }, // 2021-10-10
  {
    img: "img/IMG_2983.webp",
    title: "Hot Water",
    caption:
      "Water heater mounted, shower cabin installed, small bathroom suddenly functional. Making the most of limited square footage, one fixture at a time.",
  }, // 2021-09-03
  {
    img: "img/IMG_3882.webp",
    title: "Beautiful Day",
    caption:
      "The bathroom floor got its mosaic treatment and the whole room came together. That pattern does a lot of lifting in a small space.",
  }, // 2021-10-13
  {
    img: "img/IMG_3328.webp",
    title: "Silver and Gold",
    caption:
      "The iron vitriol treatment settled into the wood and turned the exterior silver-grey. A finish that looks more at home in the landscape every season. It only gets better.",
  }, // 2021-09-11

  {
    img: "img/IMG_4338.webp",
    title: "Kids",
    caption:
      "Me and the kids in their loft. Tight, low-ceilinged, perfectly theirs. The ideal space for reading under a blanket, arguing about nothing, and being nine years old.",
  }, // 2021-11-15
  {
    imgs: ["img/IMG_6156.webp", "img/IMG_6158.webp"],
    title: "These Are the Days",
    caption:
      "The front of the house from two angles. The iron vitriol finding its character as the building settles into the land.",
  }, // 2026-03-29
  {
    imgs: ["img/IMG_6159.webp", "img/IMG_6161.webp"],
    title: "See the World",
    caption:
      "The back of the house. A different perspective on the scale and the finish. The continuous lines of the structure against the natural backdrop, uninterrupted.",
  }, // 2026-03-29
];
