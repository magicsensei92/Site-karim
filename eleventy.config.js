// Configuration du site. Karim n'a pas besoin de modifier ce fichier.
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Les pages marquées « brouillon: true » ne sont publiées que si
  // AFFICHER_BROUILLONS=oui (aperçu). Jamais sur le site définitif.
  // Le site d'aperçu « karim-ngosso-apercu » (protégé par connexion Netlify) les montre aussi.
  const afficherBrouillons = process.env.AFFICHER_BROUILLONS === "oui" || process.env.SITE_NAME === "karim-ngosso-apercu";
  eleventyConfig.addPreprocessor("brouillons", "*", (data) => {
    if (data.brouillon && !afficherBrouillons) return false;
  });
  eleventyConfig.addGlobalData("afficherBrouillons", afficherBrouillons);

  // Toutes les pages d'une activité, triées par « ordre » puis par titre.
  eleventyConfig.addFilter("pagesDe", (collection, slug) =>
    (collection || [])
      .filter((p) => p.data.activite === slug && !p.data.cacherDuMenu)
      .sort((a, b) => (a.data.ordre ?? 50) - (b.data.ordre ?? 50) || String(a.data.title).localeCompare(String(b.data.title), "fr"))
  );
  eleventyConfig.addFilter("activite", (liste, slug) => (liste || []).find((a) => a.slug === slug));
  eleventyConfig.addFilter("videosDe", (collection, slug) =>
    (collection || []).filter((v) => !slug || v.data.activite === slug)
  );
  // Extrait l'identifiant d'une adresse YouTube (watch?v=, youtu.be/, shorts/, embed/).
  eleventyConfig.addFilter("youtubeId", (url) => {
    if (!url) return "";
    const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : "";
  });
  eleventyConfig.addFilter("annee", () => new Date().getFullYear());

  eleventyConfig.addCollection("pagesActivites", (api) =>
    api.getFilteredByGlob("src/activites/**/*.md")
  );
  eleventyConfig.addCollection("videos", (api) =>
    api.getFilteredByGlob("src/videos/*.md").sort((a, b) => (b.data.date_video || "").localeCompare?.(a.data.date_video || "") || 0)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
