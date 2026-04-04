// Edit this list to reorder, add titles, and add captions.
// Each entry: { img, title, caption, contain?, layout? }
//          or { imgs: ["a.webp","b.webp"], title, caption }       — duo (2 stacked)
//          or { imgs: ["a.webp","b.webp","c.webp"], title, caption } — trio (3 stacked)
// layout options (single-image only): 'wide' | 'reversed' | 'red' | 'display' | 'collage'
// Multi-image entries auto-select duo/trio — do not set layout on those.
// To reorder: move lines up/down.
const pages = [
  {
    img: "img/IMG_2462.webp",
    title: "Aloha!",
    caption: `Built in 2021, this gem sits on wheels making it easy to relocate if life ever takes you somewhere new.
    Two adults, two kids and a cat with strong opinions have filled this place with breakfast chaos, movie nights and memories we'll carry forever. The kids basically grew up here. And now they've outgrown it, quite literally.
    So it's time to hand over the keys to someone ready to write the next chapter. Maybe that's you?`,
    layout: "wide",
  }, // 2021-07-13–14

  {
    imgs: ["img/tb.JPG", "img/ea.jpg"],
    title: "The Dream of Four Walls",
    caption:
      "It started with the four of us and a single realization: we were done paying rent. Done building someone else’s dream. We chose to build our own house and a new life. Rejecting the “more is better” mindset, we downsized to free ourselves from upkeep and clutter. Less space meant less stuff, fewer chores, and more time. Owning less gave us more! More money, more time, more peace, and a life that truly served us.",
    layout: "duo-side",
  },

  {
    img: "img/IMG_1947.webp",
    title: "The Foundation of it All",
    caption: `Every revolution needs a solid base. For us, it started in Borlänge, Dalarna (shout out to <a href="https://tunatrailer.se" target="_blank">Tuna Trailer</a>).

    We didn’t settle for "standard." We commissioned a custom-engineered chassis, built to withstand the weight of a dream. But getting it home? That was our first true test.

    It was wide, heavy, and unapologetic. A steel giant that turned every narrow road into a high-stakes chess match. It took sweat, nerves of steel, and a fair bit of "hassle" to navigate it across the country, but seeing it finally parked on our land made one thing clear: This wasn't just a trailer. It was the immovable promise of our new life.`,
  },
  {
    img: "img/IMG_1976.webp",
    title: "The Blueprint",
    caption: `Next, we invested in a professional blueprint (actually we did this before buying the actual trailer). It was a significant expense, a high-end design from New Zealand that we hoped would be our exact map. But as we held the plans in our hands, we realized a house born in the South Pacific isn't built for a Swedish winter.

      The blueprints became a reference rather than a rulebook. We had to peel back the original vision to make room for reality.
      We kept the soul of the design but rebuilt the anatomy.
      It taught us that a "real" home isn't found in a pre-printed packet. It is found in the changes you make and the problems you solve. We didn't just follow a drawing. We took an expensive idea and forged it into a Swedish reality.`,
    contain: true,
  }, // 2021-01-29
  {
    img: "img/IMG_0223.webp",
    title: "The Arrival",
    caption: `
      The steel skeleton finally met the soil. The drive from Borlänge was a gauntlet of narrow lanes and heavy nerves, a physical test of how much we truly wanted this.

      Seeing it parked here changed everything. The "hassle" of the road faded into the background as the scale of our ambition took shape. This custom foundation was no longer a cargo on a highway; it was the literal ground beneath our feet.`,
  }, // 2021-03-05
  {
    imgs: ["img/IMG_0793.webp", "img/IMG_0797.webp"],
    title: "Creative Destruction",
    caption: `Before our new story began, we had to clear the old. A woodshed my father built stood in the way. Tearing it down was hard but necessary. Letting go is part of transition. Clearing the ground was choosing a new home over the past. With the shed gone, the foundation was ready—our freedom’s starting point. To build something meaningful, you must first clear the way.`,
  }, // 2021-04-03
  {
    img: "img/IMG_0818.webp",
    title: "The Spectacle",
    caption:
      "Once the trailer was settled, neighbors stopped to watch. In a world of sameness, our small, movable home sparked curiosity and confusion. We welcomed the attention. It showed we were doing something different—stepping off the treadmill and making a statement.",
  }, // 2021-04-04
  {
    imgs: ["img/IMG_0843.webp", "img/IMG_0845.webp", "img/IMG_0846.webp"],
    title: "The first Layer",
    caption: `The theory was over. This was the moment the steel frame began to transform into a home. With the help of a friend, we laid the first wooden beams across the trailer, bridging the gap between a machine and a living space.

    Every screw and every joint felt heavy with importance. We weren't just framing a floor; we were setting the boundaries for our new life. This was the first physical sign of the warmth and texture that would eventually define our home. After the long journey from Borlänge and the dust of the demolition, seeing wood meet steel was the most satisfying sound in the world. The skeleton finally had its first layer of skin.`,
  }, // 2021-04-06
  {
    imgs: ["img/IMG_1102.webp", "img/IMG_1104.webp", "img/IMG_1116.webp"],
    title: "To the Sky!",
    caption: `Suddenly, the dream had height. Raising the walls was the moment the project stopped being a flat platform and started being a sanctuary. It is a powerful thing to stand inside a space you carved out of nothing and watch the vertical lines cut into the horizon.

    We weren't just putting up timber; we were defining our borders. Every stud we nailed into place was a vote for a simpler life. For the first time, we could stand between the frames and see the view from our future windows. The skeleton was complete, and for the first time, it felt like it could hold us.`,
  }, // 2021-04-21
  {
    imgs: ["img/IMG_1119.webp", "img/IMG_1120.webp"],
    title: "Under one Roof",
    caption:
      "The last piece of the shell was finally in place, shielding us from the elements and turning the structure into a sanctuary. Standing beneath that ceiling, we realized we were no longer building on a trailer; we were finally standing inside a home.",
  }, // 2021-04-21
  {
    img: "img/IMG_1148.webp",
    title: "The Master",
    caption:
      "Behind every great build is a pair of hands that knows the soul of the wood. Our carpenter didn't just follow a plan; he brought the precision and heart that this project demanded, and we have him to thank for the home's incredible integrity. While we lent our strength where we could, his artistry is what turned our vision into a masterpiece of Swedish craftsmanship. (You can probably tell which one of us is the carpenter.)",
  }, // 2021-04-23
  {
    img: "img/IMG_1149.webp",
    title: "The Visionary Behind the Walls",
    caption:
      "This journey was led by grit and grace, much of it hers. She was the one constantly refining the details, pushing the aesthetic, and keeping the family's dream anchored in reality when the work felt endless. More than just a partner in construction, she is the heart behind every design choice, the reason this space feels less like a house and more like a home. This structure is a testament to her vision and unwavering belief.",
    contain: true,
  }, // 2021-04-23
  {
    imgs: ["img/IMG_1155.webp", "img/IMG_1159.webp"],
    title: "Solid Ground",
    caption:
      "As the exterior cladding went up, the skeleton vanished and the house finally found its skin. The structure transformed from a transparent frame into a solid fortress, ready to stand defiant against the Swedish winter.",
  }, // 2021-04-23
  {
    img: "img/IMG_1172.webp",
    title: "The Northern Frontier",
    caption:
      "This shot captures the pivotal transition, with the final layers of protection almost complete, wrapping the structure against the elements.",
  }, // 2021-04-24
  {
    img: "img/IMG_1194.webp",
    title: "Keeping the Heat",
    caption:
      "Winter in Sweden is no joke, so we spent the day lining the floor with Frigolit to lock in the warmth. It’s a simple but essential step to make sure the house stays cozy and efficient year-round.",
  }, // 2021-04-27
  {
    img: "img/IMG_1196.webp",
    title: "The Vapor Barrier",
    caption: `We wrapped the entire interior in "ångskydd" to protect the structure from moisture and drafts. It’s an unglamorous but vital layer that keeps the house breathing correctly and the insulation bone-dry. (Yes, i felt like Dexter Morgan )`,
  }, // 2021-04-28
  {
    imgs: ["img/IMG_1198.webp", "img/IMG_1200.webp", "img/IMG_1203.webp"],
    title: "The Grind",
    caption:
      "Construction is rarely glamorous; it’s a long series of small, repetitive tasks that eventually add up to a home.",
  }, // 2021-04-29
  {
    imgs: ["img/IMG_1257.webp", "img/IMG_1259.webp"],
    title: "The Playhouse",
    caption:
      "As the inner walls went up, the blank space transformed into a playground. Perect for climbing.",
  }, // 2021-05-03
  {
    imgs: ["img/IMG_2360.webp", "img/IMG_2361.webp", "img/IMG_1285.webp"],
    title: "Insulation",
    caption:
      "The walls were filled with insulation to keep the cold out and the warmth in. It’s a crucial step to make sure our home is energy efficient and comfortable, even during the harshest winters.",
  }, // 2021-05-06
  {
    img: "img/IMG_1420.webp",
    title: "Finding Our Form",
    caption:
      "The first layers of wooden siding are finally going up, giving the house its permanent face. It’s a rewarding phase where the raw structure begins to blend into the surrounding forest.",
  }, // 2021-05-20
  {
    img: "img/IMG_1547.webp",
    title: "Testing the Future",
    caption:
      "The build isn't over yet, but we couldn't resist a trial run with the keys. Seeing the boys unlock the front door for the first time made the dream feel closer than ever.",
  }, // 2021-06-01
  {
    imgs: ["img/IMG_1559.webp", "img/IMG_1561.webp"],
    title: "Grounded at Last",
    caption:
      "Installing the flooring finally covered the subfloor and transformed the construction site into a living space. It’s a satisfying shift to see the wood grain stretch from wall to wall, making the interior feel warm and finished.",
  }, // 2021-06-03
  {
    img: "img/IMG_1695.webp",
    title: "A new Perspective",
    caption:
      "Sitting on the second floor for the first time changed how the whole space felt. It’s no longer just a shell, but a home with levels, views, and a little boy ready to climb up and join the adventure.",
  }, // 2021-06-06
  {
    img: "img/IMG_1779.webp",
    title: "The Heart of the Home",
    caption:
      "The kitchen is finally taking shape, shifting the house from a shell into a functional living space. It’s the spot where the daily rhythm of our new life will eventually happen, and seeing the cabinets and counters go in makes it all feel real.",
  }, // 2021-06-13
  {
    imgs: ["img/IMG_1854.webp", "img/IMG_1855.webp"],
    title: "The View from Above",
    caption:
      "Looking down from the upper level, you finally get a true sense of the home’s height and open volume. It’s the perfect vantage point to see how the light fills the space and how everything we’ve built connects together.",
  }, // 2021-06-16
  {
    img: "img/IMG_1860.webp",
    title: "The Final Layer",
    caption:
      "The exterior is finally sealed, with the last of the wooden panels creating a seamless face for the house. After months of looking at wraps and insulation, the building finally looks exactly how we imagined it against the treeline.",
  }, // 2021-06-17
  {
    img: "img/IMG_2101.webp",
    title: "Sanctuary in the Clouds",
    caption:
      "Tucked away on the loft, the master bed is finally in place, turning the highest point of the house into a private retreat. It’s a simple, quiet space that makes the most of the home's verticality and the view across the grain of the wood.",
  }, // 2021-06-29

  {
    img: "img/IMG_2456.webp",
    title: "The Command Center",
    caption:
      "As you step inside, the main closet serves as the house's command center for storage. Designed to handle everything from heavy winter coats to daily gear, it's the hardworking space that keeps the rest of the home clutter-free and organized.",
  }, // 2021-07-10

  {
    imgs: ["img/IMG_2569.webp", "img/IMG_2575.webp"],
    title: "Vertigo",
    caption:
      "The exterior is officially complete, but we couldn't resist adding one last, crucial detail: a set of climbing wall holds, transforming the side of the house into a playful vertical challenge.",
  }, // 2021-07-17
  {
    img: "img/IMG_2580.webp",
    title: "Loft Details",
    caption:
      "The loft space is coming together with personal touches. We’ve added some simple custom shelving for our things and a thriving snake plant to bring some life and color to this quiet upper corner.",
  }, // 2021-07-18
  {
    imgs: ["img/IMG_2669.webp", "img/IMG_2685.webp"],
    title: "Every Inch Counts",
    caption:
      "The stairs to the loft now double as integrated storage, keeping the footprint lean. Downstairs, the sofa is perfectly positioned against the windows, framing the view and flooding the lounge with light.",
  }, // 2021-07-26–27
  {
    imgs: ["img/IMG_2734.webp", "img/IMG_2740.webp"],
    title: "Living in the Volume",
    caption:
      "Looking across the kitchen toward the loft above, you really see how the vertical space works to keep the home feeling open and airy. It’s the perfect mix of high ceilings and cozy corners. Meanwhile, the official move-in test is underway: the TV is on, and Sommarlov is playing.",
  }, // 2021-07-29–31
  {
    img: "img/IMG_2855.webp",
    title: "Mood: Maximum Cozy",
    caption:
      "There is something incredibly grounding about seeing my son enjoying a meal in this light—it’s no longer a project under inspection, just a calm, peaceful evening in our new home.",
  }, // 2021-08-02
  {
    img: "img/IMG_2881.webp",
    title: "The Grand Tour: Flip Side",
    caption:
      "A view from the opposite end shows the house’s full workflow. The entrance hall leads past the main storage closet and the bathroom door, all sitting neatly beneath the second loft. Everything has its place, and the layout finally feels complete.",
  }, // 2021-08-07
  {
    imgs: ["img/IMG_2865.webp", "img/IMG_2867.webp", "img/IMG_2872.webp"],
    title: "Pipes & Progress",
    caption:
      "A look at the land we’re building on alongside a shot of the house during a middle stage of construction. Paired with a view of the internal plumbing routed through the walls, it documents the transition from raw site to a functioning structure.",
  }, // 2021-08-11–12
  {
    img: "img/IMG_3077.webp",
    title: "Summer at the Front",
    caption:
      "The front of the house is nearly finished, framed by the garden in full bloom. The wooden facade is now set against the bright greens and colors of midsummer, showing the building in its seasonal element.",
  }, // 2021-08-21
  {
    imgs: ["img/IMG_2930.webp", "img/IMG_2937.webp", "img/IMG_2941.webp"],
    title: "The Dirty Work",
    caption:
      "The summer flowers fade into the background for a look at the gritty essentials. This set shows the water pump (engineered to handle the tough stuff)(yes poo! although we actually didn't have a toilet for the entire 4 years we lived here), the network of drains and pipes, and the final sink plumbing. It’s a sharp contrast to the garden views, but it’s the hardware that actually makes the house livable.",
  }, // 2021-08-30
  {
    img: "img/IMG_2944.webp",
    title: "Under the Hood",
    caption:
      "The view from beneath the house reveals the belly of the beast: layers of insulation and the run of pipes that keep things warm and functional. Oh yeah, i almost forgot that this entire home is built on a mobile foundation.",
  }, // 2021-08-30
  {
    imgs: ["img/IMG_3671.webp", "img/IMG_3672.webp"],
    title: "Bare Bones Bathroom",
    caption:
      "The bathroom before the final fixtures went in. It’s a tight space, but the layout is efficient and functional, with the shower, sink, and water heater all fitting neatly together.",
  }, // 2021-10-10
  {
    img: "img/IMG_2983.webp",
    title: "Bathroom Basics minus the Loo",
    caption:
      "The water heater is mounted and ready, sitting right next to the newly installed shower cabin, making the most of the limited square footage.",
  }, // 2021-09-03
  {
    img: "img/IMG_3882.webp",
    title: "Mosaic Underfoot",
    caption:
      "The bathroom floor has completely transformed. The intricate mosaic-pattern mat has been installed, bringing texture and a finished look to the space. It’s a great visual anchor that ties the room together.",
  }, // 2021-10-13
  {
    img: "img/IMG_3328.webp",
    title: "Silver & Wood",
    caption:
      "The wooden panels have taken on a beautiful, weathered character thanks to the järnvitriol (iron vitriol) treatment. This silver-grey patina allows the house to blend naturally with the landscape, giving the exterior a muted, organic finish that will only improve with time.",
  }, // 2021-09-11

  {
    img: "img/IMG_4338.webp",
    title: "Loft Life",
    caption: "A snapshot of me and the kids settled into their cozy new hideaway—the "kids loft." It’s a tight squeeze, but perfectly sized for reading, playing, and making the most of the upper levels.",
  }, // 2021-11-15
  {
    imgs: ["img/IMG_6156.webp", "img/IMG_6158.webp"],
    title: "The Front",
    caption: "These shots capture the front of the structure from two different angles. The iron vitriol treatment is settling in, giving the facade its distinct character as the house takes its place on the land.",
  }, // 2026-03-29
  {
    imgs: ["img/IMG_6159.webp", "img/IMG_6161.webp"],
    title: "The Back",
    caption: "These shots show the house from the back, offering a different perspective on the scale and the iron vitriol finish. The reverse side highlights the continuous lines of the structure as it sits against the natural backdrop.",
  }, // 2026-03-29
];
