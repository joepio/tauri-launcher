// @ts-ignore
// const { invoke } = window.__TAURI__.tauri;

import {createSignal, onCleanup} from 'solid-js';
import {render} from 'solid-js/web';

console.log('script working')

const App = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return <div>{count} + {greet()}</div>;
};

render(App, document.body)

function greet(): string {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //@ts-ignore
  return await invoke("greet", { name: greetInputEl.value }) as string;
}
