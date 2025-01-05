import { app, page, isDev, rootEl } from '@/app.ts';
import { message } from '@/modules/message';
import { computePosition, offset } from '@floating-ui/dom';

if (isDev) {
  page.addPage('/demo/floating-center', 'floating-center');
  page.subscribe('floating-center', () => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode('这是居中的内容容'));
    div.addEventListener('click', (e) => {
      message.success('点击了');
    });
    // div.style.margin = '10px';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.position = 'absolute';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.border = '1px solid #000';
    const floatDiv = document.createElement('div');
    floatDiv.appendChild(document.createTextNode('这是悬浮的内容'));
    floatDiv.style.position = 'absolute';
    // floatDiv.style.top = '10px';
    // floatDiv.style.left = '10px';
    floatDiv.style.backgroundColor = 'red';
    computePosition(div, floatDiv, {
      middleware: [offset(30)],
      // middleware: [
      //   offset({
      //     mainAxis: 20,
      //     crossAxis: 40,
      //   }),
      // ],
      placement: 'top-start', // 'bottom' by default
    }).then((pos) => {
      console.log(pos);
      floatDiv.style.top = `${pos.y}px`;
      floatDiv.style.left = `${pos.x}px`;
    });

    // rootEl.appendChild(div);
    // rootEl.appendChild(floatDiv);
    document.body.appendChild(floatDiv);
    document.body.appendChild(div);
  });
}
