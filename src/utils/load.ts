import { load } from 'jinrishici-ts';

export default async () => {
  const result = await load();
  const info = result.data.origin;

  (document.querySelector('#poem')! as HTMLSlotElement).textContent = result.data.content;
  (document.querySelector('#info')! as HTMLSlotElement).textContent = `${info.dynasty}·${info.author}《${info.title}》`;
  (document.querySelector('#tags')! as HTMLSlotElement).textContent = `Tags:${result.data.matchTags}`;
};