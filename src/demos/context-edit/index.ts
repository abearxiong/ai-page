import { app, page, isDev, rootEl } from '@/app.ts';

if (isDev) {
  page.addPage('/demo/context-edit', 'context-edit');
  page.subscribe('context-edit', () => {
    rootEl.innerHTML = `<div contenteditable="true">这是可以编辑的内容</div>`;
  });
}
