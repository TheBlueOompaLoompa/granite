<script lang='ts'>
  import { TabType } from '../types.js';
  import Browser from './types/Browser.svelte';
  import Editor from './types/Editor.svelte';

  export let type: TabType;
</script>

{#if type == TabType.Browser}
<Browser/>
{:else if type == TabType.Editor}
<Editor/>
{/if}