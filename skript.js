fetch("data.json")
  .then(res => res.json())
  .then(spiele => {
    const container = document.getElementById("spiele-container");
    container.innerHTML = "";

    spiele.forEach(spiel => {
      const card = document.createElement("div");
      card.classList.add("spiel-card");
      card.innerHTML = `
        <h3>${spiel.datum}</h3>
        <p><strong>${spiel.gegner}</strong></p>
        <p>${spiel.wettbewerb}</p>
        <p>Ergebnis: ${spiel.ergebnis}</p>
        <a href="spiel.html?id=${spiel.id}">Details ansehen</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("spiele-container").innerHTML = "<p>Fehler beim Laden der Spiele.</p>";
    console.error(err);
  });
