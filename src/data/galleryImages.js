export const galleryImages = [];

const imgData = [
  { title: "chata-na-przegibku", count: 16 },
  { title: "chata-zima", count: 3 },
  { title: "bania", count: 1 },
  { title: "bendoszka-wielka", count: 2 },
  { title: "stok-narciarski-orczyk", count: 1 },
  { title: "plac-zabaw", count: 2 },
  { title: "gory", count: 2 },
  { title: "zima-w-gorach", count: 6 }, 
  { title: "pokoj-4-osobowy-lazienka", count: 4 },
  { title: "sala", count: 1 },
  { title: "przyjecia-okolicznosciowe", count: 3},
  { title: "pokoj-2-osobowy-lazienka", count: 6 },
  { title: "schody", count: 1 },
  { title: "korytarz", count: 1 },
  { title: "wiatrolap", count: 2 },
  { title: "pokoj-6-osobowy-lazienka", count: 4 },
  { title: "pokoj-4-osobowy-lazienka-kuchnia", count: 4 },
];

imgData.forEach(el => {
    for (let i = 1; i <= el.count; i++) {
        galleryImages.push(`${el.title}-${i}`);
      }
})