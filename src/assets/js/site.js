document.documentElement.classList.add("js");

// Menu sur téléphone
const bouton = document.querySelector(".menu-bouton");
const menu = document.getElementById("menu-principal");
if (bouton && menu) {
  bouton.addEventListener("click", () => {
    const ouvert = menu.classList.toggle("ouvert");
    bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
  });
}

// Bouton « Quitter le site » (Sortez vos griffes) : remplace la page
// dans l'historique de l'onglet et ouvre un site neutre. Touche Échap aussi.
function quitter() {
  window.location.replace("https://www.google.fr/search?q=recette+gateau+au+yaourt");
}
document.querySelectorAll("[data-quitter]").forEach((b) => b.addEventListener("click", quitter));
if (document.querySelector("[data-quitter]")) {
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") quitter(); });
}

// Page Vidéos : filtres par activité
const filtres = document.querySelectorAll("[data-filtre]");
filtres.forEach((f) => f.addEventListener("click", () => {
  const valeur = f.dataset.filtre;
  filtres.forEach((x) => x.setAttribute("aria-pressed", x === f ? "true" : "false"));
  document.querySelectorAll(".video").forEach((v) => {
    v.hidden = !(valeur === "toutes" || v.dataset.activite === valeur);
  });
}));

// Vidéos intégrables : on ne charge YouTube qu'au clic (aucune requête avant).
document.querySelectorAll("[data-integrer]").forEach((lien) => lien.addEventListener("click", (e) => {
  e.preventDefault();
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube-nocookie.com/embed/" + lien.dataset.integrer + "?autoplay=1";
  iframe.title = lien.getAttribute("aria-label") || "Vidéo";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  lien.replaceWith(iframe);
}));
