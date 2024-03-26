<script lang="ts">
  import { fade } from "svelte/transition";
  export let tabs: {
    title: string;
    image: string;
    text: string;
  }[];
  let current = 0;
</script>

<div class="wrapper">
  <ul class="links" role="list">
    {#each tabs as { title }, i}
      <li>
        <button
          aria-current={i === Math.floor(current)}
          on:click={() => (current = i)}>{title}</button
        >
      </li>
    {/each}
  </ul>
  <div class="image">
    {#key current}
      <div class="imageContent" transition:fade>
        <img src={tabs[current].image} alt="" />
        <p>{tabs[current].text}</p>
      </div>
    {/key}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--space-s);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-m);
    row-gap: var(--space-xs);
  }
  button {
    background: transparent;
    opacity: 0.4;
    transition:
      color 0.2s,
      opacity 0.2s;
    border: 1px solid currentColor;
    border-radius: 999em;
    padding-inline: var(--space-2xs);
    font-size: var(--step-1);
  }
  button:where([aria-current="true"], :hover, :focus-visible) {
    opacity: 1;
  }
  button[aria-current="true"] {
    color: var(--color-blue-1);
  }
  .image {
    display: grid;
  }
  .imageContent {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    padding: var(--space-xs);
  }
  @media (width > 60rem) {
    .wrapper {
      flex-direction: row;
      gap: var(--space-xl);
    }
    ul {
      flex-wrap: nowrap;
      flex-direction: column;
      font-size: var(--step-3);
      gap: var(--space-s);
    }
    button {
      border: none;
      font-size: var(--step-3);
      font-weight: 600;
    }
  }
</style>
