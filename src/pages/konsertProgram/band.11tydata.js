function concertsByBand(concerts) {
  const sortedConcerts = {};
  concerts.forEach((concert) => {
    concert.locations.forEach((location) => {
      location.bands.forEach((band) => {
        if (!sortedConcerts[band]) sortedConcerts[band] = [];
        sortedConcerts[band].push({
          time: concert.time,
          name: concert.name,
          location: location.name,
          bands: location.bands,
        });
      });
    });
  });
  return sortedConcerts;
}

module.exports = {
  eleventyComputed: {
    concertsByBand: (data) => concertsByBand(data.concerts),
  },
};
