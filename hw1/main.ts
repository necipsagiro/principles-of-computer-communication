const repetition_count = 2;

const locations = [
  "itu.edu.tr", // İstanbul
  "metu.edu.tr", // Ankara
  "auth.gr", // Greece
  "unibocconi.it", // Italy
  "sorbonne-universite.fr", // France
  "gla.ac.uk", // Scotland
  "www.pku.edu.cn", // China
  "www.waseda.jp", // Japan
  "ucsb.edu", // USA
  "sydney.edu.au", // Australia
];

async function benchmarkLocations(index: number) {
  if (index === locations.length) return;

  const start = performance.now();

  try {
    for (let i = 0; i < repetition_count; i++)
      await fetch(`https://${locations[index]}`);

    console.log(`${locations[index]}: ${((performance.now() - start) / repetition_count).toFixed(0)}ms`);
  } catch (error) {
    console.log(`${locations[index]}: ${error}`);
  }

  return benchmarkLocations(index + 1);
}

benchmarkLocations(0);
