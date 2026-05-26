# Kiradownloader v2

<p align="center">
  <img src="./icon.png" width="70px"/>
</p>

<h1 align="center">Kiradownloader v2</h1>

<p align="center">
  Desktop application built with Electron for downloading YouTube content and converting media files.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Windows-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Electron-Latest-47848F?style=for-the-badge&logo=electron" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" />
</p>

---

# ✨ Features

## 📥 YouTube Downloader

- Download YouTube videos and audio
- Select custom video/audio quality
- Export as:
  - MP4
  - MP3
- Fast and lightweight downloading process

## 🔄 Media Converter

Convert audio, video, and image files between multiple formats.

### Examples

- `MP4 → AMV`
- `MKV → MP4`
- `WAV → MP3`
- `PNG → JPEG`
- `WEBP → PNG`

Powered by FFmpeg for high compatibility and optimized encoding.

---

# 🛠 Tech Stack

## Core

- [ElectronJS](https://www.electronjs.org)
- [ReactJS](https://reactjs.org)
- [Styled-components](https://styled-components.com)

## Libraries

- [ytdl-core](https://www.npmjs.com/package/ytdl-core)
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
- [react-icons](https://react-icons.github.io/react-icons/)

---

# 📦 Installation

## Download

You can download the latest installer from the Releases section:

👉 **[Download Latest Release](../../releases)**

---

## Notes

- The application updates automatically
- Currently available only for:
  - Windows x64

---

# 🚀 Running Locally

## Clone the repository

```bash
git clone https://github.com/hotcaffe/kiradownloader-v2.git
```

## Install dependencies

```bash
npm install
```

## Run development mode

```bash
npm run dev
```

## Build application

```bash
npm run build
```

---

# 🧩 Project Structure

```txt
src/
 ├── components/
 ├── pages/
 ├── modules/
 │    ├── downloader/
 │    └── formatter/
 ├── styles/
 └── assets/
```

---

# 💻 Development Details

## Downloader Module

The downloader module was built using the `ytdl-core` library, which allows HTTP requests to YouTube in order to retrieve and process media streams.

## Formatter Module

The formatter module uses `FFmpeg` to convert audio, video, and image files using the best codec based on the selected output container.

## Front-end

The interface was originally designed in Figma and developed using React + Styled-components.

Styled-components allows writing CSS directly inside JavaScript using tagged template literals, making the development workflow cleaner and more maintainable.

The project also uses `react-icons`, mainly from:

- Feather Icons
- Ant Design Icons

---

# 📸 Screenshots

<img width="799" height="600" alt="image" src="https://github.com/user-attachments/assets/d4ba8d27-d8dd-472c-9899-a2233ee384d5" />

<img width="799" height="601" alt="image" src="https://github.com/user-attachments/assets/29d990a8-a64d-4f5b-9914-a9a48efa1bab" />

<img width="797" height="598" alt="image" src="https://github.com/user-attachments/assets/2dd21eb3-4f66-46cc-8320-e569149e2e8e" />

---

# ⚠️ Disclaimer

This project is intended for educational and personal use only.

Users are responsible for respecting YouTube's Terms of Service and copyright laws in their country.

---

# 🤝 Contributing

If you find bugs or want to improve the project, feel free to open an issue or submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.
