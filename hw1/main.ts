const locations = [
  'itu.edu.tr', // İstanbul
  'metu.edu.tr', // Ankara
  'auth.gr', // Greece
  'unibocconi.it', // Italy
  'sorbonne-universite.fr', // France
  'gla.ac.uk', // Scotland
  'www.pku.edu.cn', // China
  'www.waseda.jp', // Japan
  'ucsb.edu', // USA
  'sydney.edu.au', // Australia
];

const benchmarkLocations = (index: number): Promise<void> => new Promise((resolve, reject) => {
  if (index === locations.length) return resolve();

  const start = performance.now();

  fetch(`https://${locations[index]}`)
    .then(_ => {
      console.log(`${locations[index]}: ${(performance.now() - start).toFixed(0)}ms`);

      return benchmarkLocations(index + 1);
    })
    .catch(err => {
      return reject(err);
    });
});

benchmarkLocations(0)
  .then(() => console.log('Benchmark completed'))
  .catch(err => console.error(err));
