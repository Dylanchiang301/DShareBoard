# D-Share 多元內容社群分享的平台。

D-Share 是一個開放式平台，讓使用者能輕鬆地分享他們的文章、內容及標籤。此平台使用 Next.js 進行開發，Tailwind CSS 來美化網頁，資料庫使用 MongoDB，並透過 NextAuth 進行 Google 登入驗證。

## 功能概覽
- 使用者登入：透過 Google 帳戶進行登入，方便使用者快速開始使用。
- 新增貼文：使用者可以撰寫並分享他們的貼文，包含內容、標籤及相關連結。
- 編輯貼文：使用者可以編輯自己所撰寫的貼文。
- 展示貼文：每則貼文以卡片形式顯示，包含發佈者資訊、內容及標籤。
- 篩選貼文：搜尋框提供即時過濾功能，根據發佈者、標籤或內容進行篩選，幫助使用者快速找到感興趣的內容。

## 系統需求
- Node.js 16.8.0 或更高版本。
- npm 7.20.3 或更高版本。

## 專案安裝與運行

1. 複製專案:
   ```bash
   git clone https://github.com/Dylanchiang301/DShareBoard.git
   ```
2. 安裝依賴:
    ```bash
    npm install
    ```
3. 啟動應用：
    ```bash
    npm run dev
    ```

## 使用注意事項

此專案有使用到 MongoDB Atlas 雲端資料庫和 Google Auth 的登入。因此要自行設定 .env 內容。
    ```bash
    GOOGLE_ID=
    GOOGLE_CLIENT_SECRET=
    MONGODB_URI=

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=
    ```