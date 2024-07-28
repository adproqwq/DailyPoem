import { type Button, snackbar } from 'mdui';
import type { IStarConfig } from '@/config/config';

export default () => {
  if(localStorage.getItem('stars')){
    const starView = (document.querySelector('#starView') as HTMLDivElement);
    let starPoems: IStarConfig[] = JSON.parse(localStorage.getItem('stars')!);

    starPoems.forEach(({ poem, info }, index) => {
      const div = document.createElement('div');
      const card = document.createElement('mdui-card');
      const innerDiv = document.createElement('div');
      const poemDiv = document.createElement('div');
      const infoDiv = document.createElement('div');
      const poemSpan = document.createElement('span');
      const infoSpan = document.createElement('span');
      const rmButton = document.createElement('mdui-button');

      poemSpan.textContent = poem;
      poemDiv.appendChild(poemSpan);

      infoSpan.textContent = info;
      infoDiv.appendChild(infoSpan);

      rmButton.variant = 'tonal';
      rmButton.textContent = '移除收藏';
      rmButton.onclick = (e) => {
        const targetIndex = Number((e.target as Button).closest('[data-index]')!.getAttribute('data-index'));
        starView.removeChild(starView.children[targetIndex]);
        starPoems.splice(targetIndex, 1);
        localStorage.setItem('stars', JSON.stringify(starPoems));
        snackbar({
          message: '移除收藏成功！',
          placement: 'top',
        });
      };

      innerDiv.appendChild(poemDiv);
      innerDiv.appendChild(infoDiv);
      innerDiv.appendChild(rmButton);

      card.variant = 'elevated';
      card.style.width = '400px';
      card.style.height = '100px';
      card.appendChild(innerDiv);

      div.setAttribute('data-index', String(index));
      div.appendChild(card);

      starView.appendChild(div);
    });
  }
};