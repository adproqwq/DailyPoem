export default (poem: string) => {
  window.open(`https://www.gushiwen.cn/search.aspx?value=${poem}&valuej=${poem.substring(0, 1)}`);
};