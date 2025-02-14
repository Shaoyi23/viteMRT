// 主应用目录下的 qiankun.js
import { registerMicroApps, start } from 'qiankun';

const apps = [
  {
    name: 'vitepress-doc', // 子应用名称
    entry: '//localhost:5173', // 子应用的入口地址
    container: '#root', // 子应用的挂载容器
    activeRule: '/docs', // 子应用的激活规则
    props: {}, // 传递给子应用的 props
  },
];

registerMicroApps(apps);

start({
  singular: true, // 确保只有一个子应用被挂载
});