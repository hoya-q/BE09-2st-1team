const twAnimate = require("tw-animate-css"); // ← 설치되어 있어야 함

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ App Router 경로 포함해야 함
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [twAnimate], // ← 이걸 빠뜨리면 애니메이션 동작 안 함
};
