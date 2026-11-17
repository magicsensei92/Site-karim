// Chaque page rangée dans src/activites/<activité>/ prend automatiquement
// la mise en page, les couleurs et le menu de cette activité.
export default {
  layout: "activite.njk",
  eleventyComputed: {
    activite: (data) => data.activite || data.page.filePathStem.split("/")[2],
  },
};
