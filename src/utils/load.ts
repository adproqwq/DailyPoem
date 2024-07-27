import { load } from 'jinrishici-ts';

export default async () => {
  const result = await load();
  const info = result.data.origin;

  (document.querySelector('#poem')! as HTMLSpanElement).textContent = result.data.content;
  (document.querySelector('#info')! as HTMLSpanElement).textContent = `${info.dynasty}·${info.author}《${info.title}》`;

  const tags = result.data.matchTags;
  tags.forEach((tag) => {
    const chip = document.createElement('mdui-chip');
    chip.variant = 'suggestion';
    chip.textContent = tag;
    (document.querySelector('#tags')! as HTMLDivElement).appendChild(chip);
  });
};