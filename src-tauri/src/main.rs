// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use tauri::command;

fn main() {
    // Start the backend service
    start_backend();

    tauriapp2_lib::run()
}

fn start_backend() {
    // Adjust the path and project name as needed
    let backend_command = "dotnet run --project ../backend/backend.csproj";

    // Start the backend process in the background
    Command::new("cmd")
        .args(&["/C", backend_command])
        .spawn()
        .expect("Failed to start backend process");
}
