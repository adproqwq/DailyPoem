<script lang="ts">
import { defineComponent } from 'vue';
import { type Dialog, prompt, setColorScheme, removeColorScheme } from 'mdui';
import load from '../utils/load';
import copy from '../utils/copy';
import search from '../utils/search';

export default defineComponent({
  methods: {
    async load(){
      await load();
    },
    async copy(){
      await copy((document.querySelector('#poem')! as HTMLSlotElement).textContent!);
    },
    search(){
      search((document.querySelector('#poem')! as HTMLSlotElement).textContent!);
    },
    askSearch(){
      prompt({
        headline: '诗句自助搜索',
        description: '搜索你想要查询的诗句',
        confirmText: '搜索',
        cancelText: '不搜了',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        textFieldOptions: {
          autosize: true,
          autocomplete: 'off',
          autofocus: true,
        },
        onConfirm: (value) => search(value),
      });
    },
    colourTheme(){
      prompt({
        headline: '调整配色',
        description: '输入一个以#开头的16进制颜色值，自动生成一套配色',
        confirmText: '生成',
        cancelText: '取消',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        textFieldOptions: {
          autosize: true,
          autocomplete: 'off',
          autofocus: true,
        },
        onConfirm: (value) => {
          localStorage.setItem('colourTheme', value);
          setColorScheme(value);
        },
      });
    },
    defaultColourTheme(){
      localStorage.removeItem('colourTheme');
      removeColorScheme();
    },
  },
  async mounted(){
    await load();

    if(localStorage.getItem('colourTheme')){
      const colourHex = localStorage.getItem('colourTheme')!;
      setColorScheme(colourHex);
    }

    const updateLogDialog: Dialog = document.querySelector('#updateLogDialog')!;
    updateLogDialog.open = true;
  },
});
</script>

<template>
  <mdui-dialog close-on-overlay-click id="updateLogDialog">
    <div>
      <p>
				如果觉得不错的话请到Github上给本项目点个Star吧!<br><br>
				2024.7.27：使用Vue+TypeScript+Vite+MDUI重构<br>
				完整更新日志请到项目查看<br>
        点击其他地方关闭该弹窗
			</p>
    </div>
  </mdui-dialog>

  <mdui-card variant="elevated" style="width: 400px;height: 100px">
    <div>
      <div>
        <span id="poem"></span>
      </div>
      <div>
        <span id="info"></span>
      </div>
      <div id="tags"></div>
    </div>
  </mdui-card>
  <div>
    <mdui-button variant="tonal" @click="copy()">复制诗句</mdui-button>
    <mdui-button variant="tonal" @click="search()">搜索</mdui-button>
    <mdui-button variant="tonal" @click="load()">换一句</mdui-button>
  </div>
  <mdui-divider></mdui-divider>
  <h2>诗句自助搜索</h2>
  <mdui-button variant="tonal" @click="askSearch()">输入</mdui-button>
  <mdui-divider></mdui-divider>
  <mdui-button variant="tonal" @click="colourTheme()">调整配色</mdui-button>
  <mdui-button variant="tonal" @click="defaultColourTheme()">还原</mdui-button>
</template>
