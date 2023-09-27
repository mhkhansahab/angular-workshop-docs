import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Angular - Zero to Hero",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Angular CLI", link: "/guides/angular-cli/" },
            { label: "Set up Tailwind CSS", link: "/guides/tailwind-css/" },
            { label: "Angular Routing", link: "/guides/routing/" },
            {
              label: "API calls in Angular",
              link: "/guides/api-calls-in-angular/",
            },
            {
              label: "Angular Signals",
              link: "/guides/angular-signals/",
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
