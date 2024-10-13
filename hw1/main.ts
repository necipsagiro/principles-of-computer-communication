const locations = [
  'itu.edu.tr', // İstanbul
  'metu.edu.tr', // Ankara
  'en.uoa.gr', // Greece
  'en.unipv.it', // Italy
  'sorbonne-universite.fr', // France
  'gla.ac.uk', // Scotland
  'www.pku.edu.cn', // China
  'www.waseda.jp', // Japan
  'ucsb.edu', // USA
  'sydney.edu.au', // Australia
];

const result: Record<string, string> = {};

const benchmarkLocations = (index: number) => {
  if (index === locations.length) Deno.exit(0);

  const start = performance.now();

  Deno.connect({
    hostname: locations[index],
    port: 80
  })
    .then(connection => {
      const end = performance.now();

      connection.close();

      result[locations[index]] = (end - start).toFixed(2);
      console.log(`${locations[index]}: ${(end - start).toFixed(2)}ms`);

      return benchmarkLocations(index + 1);
    })
    .catch(err => {
      console.error(err);
      Deno.exit(1);
    });
};

benchmarkLocations(0);
