import { snackbar } from 'mdui';

export default async (text: string) => {
  await navigator.clipboard.writeText(text);
  snackbar({
    message: '复制成功！',
    placement: 'top',
  });
};