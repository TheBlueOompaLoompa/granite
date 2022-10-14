<script lang='ts'>
  import type { ITab, TabLocation } from '../types.js';
  import Tab from './Tab.svelte';

  export let tabs: ITab[];
</script>

{#each tabs as tab}
{#if tab.popout == TabLocation.Default}
<Tab type={tab.type}/>
{/if}
{/each}