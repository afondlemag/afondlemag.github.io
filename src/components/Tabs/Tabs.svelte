<script lang="ts">
  import { currentTab } from "./tabsStore.ts";
  export let keys: string[];
  $currentTab = keys[0];
</script>

<div class="wrapper">
  <ul role="list">
    {#each keys as key}
      <li>
        <button
          aria-current={$currentTab === key}
          on:click={() => ($currentTab = key)}>{key}</button
        >
      </li>
    {/each}
  </ul>
  <div class="content">
    <slot />
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
  .content {
    display: grid;
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
