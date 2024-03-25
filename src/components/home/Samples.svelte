<script lang="ts">
  import { fade } from "svelte/transition";

  const tabs = [
    {
      title: "Rêver",
      text: "La grande histoire, chapitrée et illustrée, raconte le parcours d’une championne ou d’un champion.",
      img: "histoire-xl.jpg",
    },
    {
      title: "Découvrir",
      text: "Dans chaque numéro, retrouve un dossier, un photoreportage, des interviews et des rubriques rigolotes pour tout savoir sur le sport et ses spécificités.",
      img: "dossier-xl.jpg",
    },
    {
      title: "S'informer",
      text: "Avec les pages gazette, tu seras toujours au courant de l’actualité sportive et de la vie du « Club des Fondus », la communauté des abonné(e)s À fond!",
      img: "gazette-xl.jpg",
    },
    {
      title: "S'amuser",
      text: "Tu t'es souvent demandé comment réussir ton plongeon ou ta roue et mettre un panier à tous les coups ? Les champions te donnent leurs conseils dans le Geste de pro, la rubrique qui donne envie d'enfiler ses baskets. Dans chaque numéro, tu découvriras aussi des jeux, des quiz et des cartes à collectionner. Et un poster!",
      img: "jeux-xl.jpg",
    },
  ];
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
        <img src={tabs[current].img} alt="" />
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
