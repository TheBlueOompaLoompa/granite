<script lang='ts'>
  import type { ITab } from '../types.js';
  export let tabs: ITab[];
</script>

{#each tabs as tab}
{#if !tab.popout}
{/if}
{/each}