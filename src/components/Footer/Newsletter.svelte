<script lang="ts">
  import { createToast } from "../../lib/createToast.ts";
  import Button from "../Button.svelte";

  let email: "";
  const endpoint =
    "https://8bb72497.sibforms.com/serve/MUIEADyvPYf60YflDxW4RB4NxMQsmiYIZSrrZFweX_cTa8jjt5VYrlGygJQq4hjT923GQpiF601Ho8OMQbZkUfr18giW8EljUSn7ccl5iGmwiibg36DGYgTvCUojL1ztxzNO9ZzgEtgoIZBqn8Avbya2MbxZfX2LxSyahXnhGj7l9MGMMP_pxyKYExzzCMQGmzTin8jSLC_TVx7T?isAjax=1";
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("EMAIL", email);
    try {
      const res = await fetch(endpoint, {
        body: formData,
        method: "POST",
      });
      const json = await res.json();
      if (!json?.success) throw Error;
      createToast(json["message"], json["success"] !== true);
    } catch (error) {
      createToast("Une erreure est survenue,true");
    }
  };
</script>

<form method="post" action={endpoint} on:submit|preventDefault={handleSubmit}>
  <label for="EMAIL"> S'inscrire à la newsletter </label>
  <div>
    <input
      type="email"
      name="EMAIL"
      id="EMAIL"
      placeholder="email"
      bind:value={email}
    />
    <Button>S'inscrire</Button>
  </div>
</form>

<style>
  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-xs);
    flex-wrap: wrap;
  }
  input {
    border: 1px solid var(--color-white);
    background-color: transparent;
    border-radius: 0.5rem;
    color: var(--color-white);
    padding-inline: var(--space-2xs);
    padding-block: var(--space-3xs);
    &::placeholder {
      color: currentColor;
    }
  }
</style>
