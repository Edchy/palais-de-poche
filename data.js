// Edit this list to reorder, add titles, and add captions.
// Each entry: { img, title, caption, contain?, layout? }
//          or { imgs: ["a.webp","b.webp"], title, caption }       — duo (2 stacked)
//          or { imgs: ["a.webp","b.webp","c.webp"], title, caption } — trio (3 stacked)
// layout options (single-image only): 'wide' | 'full-bleed' | 'reversed' | 'red' | 'display' | 'collage'
// Multi-image entries auto-select duo/trio — do not set layout on those.
// To reorder: move lines up/down.
const pages = [
  {
    img: "img/IMG_1947.webp",
    title: "And so it begins...",
    caption: "Specialltillverkat underrede i Borlänge",
  }, // first
  {
    img: "img/IMG_1976.webp",
    title: "The Blueprint",
    caption:
      "We bought this and used it as inspiration. We deviated from it in many ways, but it was a good starting point.",
    contain: true,
  }, // 2021-01-29
  {
    img: "img/IMG_0223.webp",
    title: "Underrede på plats",
    caption:
      "Det var en del jobb att få hit det. Lång väg och svårt att köra på vägarna med ett så brett släp.",
  }, // 2021-03-05
  {
    imgs: ["img/IMG_0793.webp", "img/IMG_0797.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-03
  {
    img: "img/IMG_0818.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-04
  {
    imgs: ["img/IMG_0843.webp", "img/IMG_0845.webp", "img/IMG_0846.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-06
  {
    imgs: ["img/IMG_1102.webp", "img/IMG_1104.webp", "img/IMG_1116.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-21
  {
    imgs: ["img/IMG_1119.webp", "img/IMG_1120.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-21
  {
    img: "img/IMG_1148.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-23
  {
    img: "img/IMG_1149.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
    contain: true,
  }, // 2021-04-23
  {
    imgs: ["img/IMG_1155.webp", "img/IMG_1159.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-23
  {
    img: "img/IMG_1172.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-24
  {
    img: "img/IMG_1194.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-27
  {
    img: "img/IMG_1196.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-28
  {
    imgs: ["img/IMG_1198.webp", "img/IMG_1200.webp", "img/IMG_1203.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-04-29
  {
    imgs: ["img/IMG_1257.webp", "img/IMG_1259.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-05-03
  {
    imgs: ["img/IMG_2360.webp", "img/IMG_2361.webp", "img/IMG_1285.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-05-06
  {
    img: "img/IMG_1420.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-05-20
  {
    img: "img/IMG_1547.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-01
  {
    imgs: ["img/IMG_1559.webp", "img/IMG_1561.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-03
  {
    img: "img/IMG_1695.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-06
  {
    img: "img/IMG_1779.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-13
  {
    imgs: ["img/IMG_1854.webp", "img/IMG_1855.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-16
  {
    img: "img/IMG_1860.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-17
  {
    img: "img/IMG_2101.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-06-29
  {
    img: "img/IMG_2166.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-01
  {
    img: "img/IMG_2456.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-10
  {
    imgs: ["img/IMG_2462.webp", "img/IMG_2478.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-13–14
  {
    imgs: ["img/IMG_2569.webp", "img/IMG_2575.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-17
  {
    img: "img/IMG_2580.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-18
  {
    imgs: ["img/IMG_2669.webp", "img/IMG_2685.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-26–27
  {
    imgs: ["img/IMG_2734.webp", "img/IMG_2740.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-07-29–31
  {
    img: "img/IMG_2855.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-02
  {
    img: "img/IMG_2881.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-07
  {
    imgs: ["img/IMG_2865.webp", "img/IMG_2867.webp", "img/IMG_2872.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-11–12
  {
    img: "img/IMG_3077.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-21
  {
    imgs: ["img/IMG_2930.webp", "img/IMG_2937.webp", "img/IMG_2941.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-30
  {
    img: "img/IMG_2944.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-08-30
  {
    img: "img/IMG_2983.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-09-03
  {
    img: "img/IMG_3328.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-09-11
  {
    imgs: ["img/IMG_3671.webp", "img/IMG_3672.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-10-10
  {
    img: "img/IMG_3882.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-10-13
  {
    img: "img/IMG_4338.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2021-11-15
  {
    img: "img/IMG_5008.webp",
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2022-01-18
  {
    imgs: ["img/IMG_6156.webp", "img/IMG_6158.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2026-03-29
  {
    imgs: ["img/IMG_6159.webp", "img/IMG_6161.webp"],
    title: "Title placeholder",
    caption: "Caption placeholder.",
  }, // 2026-03-29
];
