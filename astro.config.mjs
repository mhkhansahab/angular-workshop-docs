import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const baseUrl = import.meta.env.BASE_URL;

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/mhkhansahab",
  base: "/angular-workshop-docs",
  integrations: [
    starlight({
      title: "Angular Signals",
      social: {
        github: "https://github.com/mhkhansahab/angular-workshop-docs",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Angular CLI", link: `${baseUrl}guides/angular-cli/` },
            {
              label: "Set up Tailwind CSS",
              link: `${baseUrl}guides/tailwind-css/`,
            },
            {
              label: "Create Product Listing",
              link: `${baseUrl}guides/product-listing/`,
            },
            {
              label: "Categorize Product Listing",
              link: `${baseUrl}guides/categorize-listing/`,
            },
            {
              label: "Add Product Search",
              link: `${baseUrl}guides/add-product-search/`,
            },
            {
              label: "Product Cart",
              link: `${baseUrl}guides/product-cart/`,
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
