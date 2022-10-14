<script lang="ts">
  import type { ITab } from './lib/types.js';
  import { vaultStore } from './lib/stores.js';
  import { getVaultAccess } from './lib/filesystem.js';

  import Tabs from './lib/tabs/Tabs.svelte';

  let vaultHandle: FileSystemHandle;

  vaultStore.subscribe(v => vaultHandle = v);

  async function openVault() {
    vaultStore.set(await getVaultAccess());
  }

  let tabs: ITab[];
</script>

<main>
{#if vaultHandle}
<Tabs {tabs}/>
{:else}
<button on:click={openVault}>Open Vault</button>
{/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>