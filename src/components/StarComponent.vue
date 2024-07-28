<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { setColorScheme } from 'mdui';
import starRender from '@/utils/starRender';

export default defineComponent({
  methods: {},
  async mounted(){
    if(localStorage.getItem('colourTheme')){
      const colourHex = localStorage.getItem('colourTheme')!;
      setColorScheme(colourHex);
    }

    starRender();
  },
});
</script>

<template>
  <RouterLink to="/"><mdui-button variant="tonal">返回</mdui-button></RouterLink>
  <div id="starView"></div>
</template>
