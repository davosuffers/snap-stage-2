const guitars = [
  {
    model: "Les Paul Standard",
    year: 1959,
    type: "Electric",
    price: 2999,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_Les_Paul_Standard_(cherry_sunburst).jpg?width=600",
  },
  {
    model: "Les Paul Custom",
    year: 1954,
    type: "Electric",
    price: 3499,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_Les_Paul_54_Custom.jpg?width=600",
  },
  {
    model: "SG Standard",
    year: 2014,
    type: "Electric",
    price: 1799,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2014_Gibson_SG_Standard_Walnut_(16342692114).jpg?width=600",
  },
  {
    model: "ES-335",
    year: 2005,
    type: "Electric",
    price: 2899,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2005_Gibson_ES-335_-_body_angled_-_BB_King_Tone_with_some_Photoshop_(2010-03-19_09.09.44_by_John_Tuggle).jpg?width=600",
  },
  {
    model: "Flying V",
    year: 1958,
    type: "Electric",
    price: 1599,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_FlyingV.jpg?width=600",
  },
  {
    model: "Explorer",
    year: 1958,
    type: "Electric",
    price: 1699,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_Explorer_dark_red.jpg?width=600",
  },
  {
    model: "Firebird",
    year: 2009,
    type: "Electric",
    price: 1899,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_Firebird_noBG.png?width=600",
  },
  {
    model: "J-45",
    year: 1942,
    type: "Acoustic",
    price: 2499,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_J-45_(by_Jim_Hutcheson).jpg?width=600",
  },
  {
    model: "Hummingbird",
    year: 1960,
    type: "Acoustic",
    price: 3999,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson-Hummingbird.jpg?width=600",
  },
  {
    model: "Thunderbird Bass",
    year: 2013,
    type: "Bass",
    price: 1999,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gibson_Thunderbird_Bass.jpg?width=600",
  },
];

function showGuitars(list) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  list.forEach((g) => {
    container.innerHTML +=
    `
      <div class="card">
        <img src="${g.image}" alt="${g.model}">
        <h2>${g.model}</h2>
        <p>Year: ${g.year}</p>
        <p>Type: ${g.type}</p>
        <p>Price: $${g.price}</p>
      </div>
    `;
  });
}

function applyFilters() {
  const query = document.getElementById("search").value.toLowerCase();
  const type = document.getElementById("type-filter").value;
  const sortBy = document.getElementById("sort").value;

  let result = guitars.filter((g) => {
    const matchesQuery = g.model.toLowerCase().includes(query);
    const matchesType = type === "All" || g.type === type;
    return matchesQuery && matchesType;
  });

  if (sortBy === "price-asc")  result.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
  if (sortBy === "year-asc")   result.sort((a, b) => a.year - b.year);
  if (sortBy === "year-desc")   result.sort((a, b) => b.year - a.year);

  showGuitars(result);
}

showGuitars(guitars);