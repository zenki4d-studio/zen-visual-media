# Hướng dẫn Khắc phục Lỗi Trắng Trang (GitHub Pages)

Chào bạn, tôi đã kiểm tra và phát hiện nguyên nhân khiến trang web của bạn bị trắng tinh khi đưa lên GitHub. Vấn đề nằm ở việc Vite mặc định coi ứng dụng nằm ở thư mục gốc (`/`), trong khi GitHub Pages thường đặt website ở thư mục con (ví dụ: `https://username.github.io/zen-visual-media/`).

## Các thay đổi tôi đã thực hiện:

1.  **Cập nhật `vite.config.ts`**: Đã thêm `base: './'` để các đường dẫn file (JS, CSS, hình ảnh) tự động điều chỉnh theo thư mục triển khai.
2.  **Sửa lỗi đường dẫn trong `index.html`**:
    - Thay đổi `/index.tsx` thành `./index.tsx` để Vite có thể tìm thấy file nguồn.
    - Loại bỏ tham chiếu tới `index.css` bị thiếu để tránh lỗi 404.
3.  **Kiểm tra Build**: Tôi đã chạy thử `npm run build` cục bộ và xác nhận bản build tạo ra các file với đường dẫn đúng.

## Bạn cần làm gì tiếp theo?

Để trang web hiển thị đúng, bạn có **2 cách** triển khai:

### Cách 1: Tự động hóa bằng GitHub Actions (Khuyên dùng)
Tôi đề xuất bạn tạo một file mới tại đường dẫn `.github/workflows/deploy.yml` với nội dung sau. GitHub sẽ tự động build và đưa lên web mỗi khi bạn `git push`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Cách 2: Triển khai thủ công (Nếu bạn không dùng Actions)
Nếu bạn đang deploy bằng cách chọn thư mục trên GitHub, hãy đảm bảo bạn đưa nội dung của thư mục `dist` (đã được tạo ra sau khi chạy `npm run build`) lên GitHub, chứ không phải code nguồn.

---
**Bây giờ bạn chỉ cần commit và push các thay đổi tôi đã thực hiện lên GitHub là xong!**

## Cấu hình Tên miền riêng (Custom Domain)
Tôi đã tạo file `public/CNAME` trỏ về `zenvisualmedia.com`. Để tên miền hoạt động, bạn cần:
1.  **Cấu hình DNS**: Trỏ bản ghi `A` hoặc `CNAME` tại nhà cung cấp tên miền của bạn về GitHub Pages:
    -   `185.199.108.153`
    -   `185.199.109.153`
    -   `185.199.110.153`
    -   `185.199.111.153`
2.  **Kích hoạt HTTPS**: Sau khi đẩy code lên, hãy vào phần **Settings > Pages** trong repo GitHub của bạn để kiểm tra trạng thái và bật "Enforce HTTPS".
    - GitHub sẽ tự động cấp chứng chỉ SSL cho tên miền `zenvisualmedia.com` của bạn (có thể mất một chút thời gian sau khi cấu hình DNS thành công).

