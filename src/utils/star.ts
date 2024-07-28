import type { IStarConfig } from '@/config/config';

export default () => {
  let hasStarPoems = localStorage.getItem('stars');

  if(!hasStarPoems) hasStarPoems = '[]';

  const starPoems: IStarConfig[] = JSON.parse(hasStarPoems);

  starPoems.push({
    poem: (document.querySelector('#poem')! as HTMLSpanElement).textContent!,
    info: (document.querySelector('#info')! as HTMLSpanElement).textContent!,
  });

  localStorage.setItem('stars', JSON.stringify(starPoems));
};