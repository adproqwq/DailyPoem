export default (poem: string) => {
  window.open(`https://so.gushiwen.cn/search.aspx?value=${poem}&valuej=${poem.substring(0, 1)}`);
};