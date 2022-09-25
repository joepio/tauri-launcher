#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
tauri::Builder::default()
    .on_window_event(|event| if let tauri::WindowEvent::CloseRequested { api, .. } = event.event() {
        // Keep the app open after the window is
        event.window().hide().unwrap();
        api.prevent_close();
    })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
