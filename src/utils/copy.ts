export default async (text: string) => {
  await navigator.clipboard.writeText(text);
};