<script lang='ts'>
  import type { TabType } from '../types.js';
  import Editor from './types/Editor.svelte';

  export let type: TabType;
</script>

{#if type == 'editor'}
<Editor/>
{/if}