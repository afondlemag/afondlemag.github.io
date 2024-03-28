import { visit } from "unist-util-visit";
// replace images url for compatibity between tina cms and astro image optimisation
export function replaceImagesPathes() {
  return function (tree) {
    visit(tree, "image", (node) => {
      node.url = node.url?.replace("/src/assets/", "../../assets/");
    });
  };
}
