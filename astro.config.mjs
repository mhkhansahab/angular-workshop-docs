import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const baseUrl = import.meta.env.BASE_URL;

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/DevSlam-2023-Angular',
  base: '/angular-workshop-docs',
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
            { label: "Set up Tailwind CSS", link: `${baseUrl}guides/tailwind-css/` },
            { label: "Create Product Listing", link: `${baseUrl}guides/product-listing/` },
            { label: "Categorize Product Listing", link: `${baseUrl}guides/categorize-listing/` },
            {
              label: "API calls in Angular",
              link: `${baseUrl}guides/api-calls-in-angular/`,
            },
            {
              label: "Angular Signals",
              link: `${baseUrl}guides/angular-signals/`,
            },
            {
              label: "Firebase: Firestore & Hosting",
              link: `${baseUrl}guides/flying-with-firebase/`,
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    })
  ],
});
