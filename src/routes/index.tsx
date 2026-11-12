import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 class="text-4xl font-bold">OpenFace Poker</h1>
      <p class="text-lg opacity-80">Coming soon.</p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "OpenFace Poker",
  meta: [{ name: "description", content: "OpenFace Poker" }],
};
