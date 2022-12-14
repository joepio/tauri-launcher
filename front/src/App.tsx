import { Component, createResource, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {

  const [name, setName] = createSignal("YourName");

  const [myGreeting] = createResource(name, greet, {
    initialValue: "loading name...",
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Name: {name()}
        </p>
        <input placeholder="Enter Your Name" onInput={e => setName(e.currentTarget.value)}/>
        <p>Greet: {myGreeting()}</p>
      </header>
    </div>
  );
};

import { register} from '@tauri-apps/api/globalShortcut';
import { window as tauriWindow } from '@tauri-apps/api';
import { WebviewWindow } from '@tauri-apps/api/window';
await register('CommandOrControl+t', async () => {
  // const webview = new WebviewWindow('theUniqueLabel', {
  //   url: '/'
  // });
  const main = tauriWindow.WebviewWindow.getByLabel('main');
  // Doesn't seem to work
  main?.setAlwaysOnTop(true);
  if (!main) {
    // open screen
  } else {
    await main.isVisible() ? main.hide() : main.show();
  }
  console.log('main', main);
});

export default App;

const { invoke } = window.__TAURI__.tauri;

async function greet(name: string): Promise<string> {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //@ts-ignore
  return await invoke("greet", { name }) as string;
}

declare global {
  interface Window {
    __TAURI__: any;
  }
}
