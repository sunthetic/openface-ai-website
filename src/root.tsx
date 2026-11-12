import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
  useDocumentHead,
  useLocation,
} from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik";

import "./global.css";

const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title || "OpenFace Poker"}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
    </>
  );
});

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
