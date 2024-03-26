<script lang="ts">
  import { tweened } from "svelte/motion";
  import Button from "./Button.svelte";
  import Menu from "./Menu.svelte";
  import { linear } from "svelte/easing";

  let scrollY = 0;
  let lastScrollY = 0;
  let translateY = tweened(0, { duration: 300, easing: linear });
  $: {
    if (scrollY > lastScrollY) $translateY = 1;
    else $translateY = 0;
    lastScrollY = scrollY;
  }
</script>

<svelte:window bind:scrollY />
<header style="--_translate:{$translateY}">
  <a href="/" class="logo">
    <img src="/logo.png" alt="logo à fond" />
    <span>Le mag des petits mordus de sports</span>
  </a>
  <nav class="desktop">
    <ul role="list">
      <li><Button href="/">Accueil</Button></li>
      <li><Button href="/actualites">Actualités</Button></li>
      <li><Button href="/equipe">L'équipe</Button></li>
      <li><Button href="/la-boutique">La boutique</Button></li>
    </ul>
  </nav>
  <nav class="mobile">
    <Menu>
      <ul role="list">
        <li style="--_index:0;"><Button href="/">Accueil</Button></li>
        <li style="--_index:1;">
          <Button href="/actualites">Actualités</Button>
        </li>
        <li style="--_index:2;"><Button href="/equipe">L'équipe</Button></li>
        <li style="--_index:3;">
          <Button href="/la-boutique">La boutique</Button>
        </li>
      </ul>
    </Menu>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: calc(-1.3 * var(--_translate) * var(--space-2xl));
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-blue-1);
    color: var(--color-white);
    height: var(--space-2xl);
    padding-inline: var(--space-l);
    padding-block: var(--space-3xs);
    z-index: 10;
    @media (width < 60rem) {
      justify-content: center;
    }
  }
  .logo {
    position: relative;
    display: block;
    height: 100%;
    & > img {
      height: 100%;
    }
    & > span {
      position: absolute;
      white-space: nowrap;
      top: 100%;
      background-color: var(--color-black);
      padding: var(--space-3xs);
      transform: rotate(-1deg) translate(-50%, -25%);
      border-radius: 0.2rem;
      font-size: var(--step--2);
      left: 50%;
      @media (width < 60rem) {
        display: none;
      }
    }
  }

  nav.desktop {
    & > ul {
      display: flex;
      gap: var(--space-s);
    }
    @media (width < 60rem) {
      display: none;
    }
  }

  li {
    rotate: 0.8deg;
    &:nth-child(2n) {
      rotate: -0.8deg;
    }
  }
  nav.mobile {
    & ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: var(--color-green-1);
      gap: var(--space-xl);
      font-size: var(--step-2);
    }
    & li {
      animation: from-bottom 0.3s calc(0.3s + var(--_index) * 0.1s) both;
    }
    @media (width >= 60rem) {
      display: none;
    }
  }

  @keyframes from-bottom {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
    }
  }
</style>
