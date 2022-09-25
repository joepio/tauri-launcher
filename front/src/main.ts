// @ts-ignore
const { invoke } = window.__TAURI__.tauri;

let greetInputEl: Element | null;
let greetMsgEl: Element | null;

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
});

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //@ts-ignore
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.greet = greet;
