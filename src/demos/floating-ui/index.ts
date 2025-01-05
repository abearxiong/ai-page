import { app, page, isDev, rootEl } from '@/app.ts';
import { message } from '@/modules/message';
import { computePosition, offset } from '@floating-ui/dom';

if (isDev) {
  page.addPage('/demo/floating-ui', 'floating-ui');
  page.subscribe('floating-ui', () => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode('这是可以点击后悬浮的内容'));
    div.addEventListener('click', (e) => {
      message.success('点击了');
    });
    div.style.margin = '10px';
    const floatDiv = document.createElement('div');
    floatDiv.appendChild(document.createTextNode('这是悬浮的内容'));
    floatDiv.style.position = 'absolute';
    // floatDiv.style.top = '10px';
    // floatDiv.style.left = '10px';
    floatDiv.style.backgroundColor = 'red';

    computePosition(div, floatDiv, {
      // middleware: [offset(30)],
      middleware: [offset({
        mainAxis: 20,
        crossAxis: 40,
      })],
      placement: 'bottom-start', // 'bottom' by default
    }).then((pos) => {
      console.log(pos);
      floatDiv.style.top = `${pos.y}px`;
      floatDiv.style.left = `${pos.x}px`;
    });

    rootEl.appendChild(div);
    // rootEl.appendChild(floatDiv);
    document.body.appendChild(floatDiv);
  });
}
