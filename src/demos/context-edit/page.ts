import { app, page, isDev, rootEl } from '@/app.ts';

if (isDev) {
  page.addPage('/demo/context-page', 'context-page');
  page.subscribe('context-page', () => {
    rootEl.innerHTML = `<div>
    这是可以编辑的内容
    <div>这是可以编辑的内容的子模块
      <div>这是可以编辑的内容的子模块的子模块</div>
    </div>
    <div></div>
    </div>`;

    rootEl.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      target.contentEditable = 'true';
      e.stopPropagation();
      target.addEventListener('blur', (e) => {
        target.removeAttribute('contenteditable');
        target.removeEventListener('blur', () => {});
      });
    });
  });
}
