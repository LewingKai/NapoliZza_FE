# NapoliZza FE

NapoliZza FE là dự án website đặt bàn và đặt món trực tuyến cho chuỗi nhà hàng pizza NapoliZza. Ứng dụng cung cấp trải nghiệm đặt bàn, đặt món, theo dõi đơn hàng, quản lý tài khoản và quản trị dành cho admin.

## Tính năng nổi bật

- **Đặt bàn trực tuyến:** Chọn ngày, giờ, số lượng khách và ghi chú cho nhà hàng.
- **Đặt món ăn:** Xem menu đa dạng, thêm món vào giỏ hàng, đặt món cùng lúc với đặt bàn.
- **Theo dõi đơn hàng:** Xem lịch sử đặt bàn, trạng thái đơn hàng, thay đổi phương thức thanh toán, hủy đơn.
- **Quản lý tài khoản:** Đăng ký, đăng nhập, đổi mật khẩu, cập nhật thông tin cá nhân, thay đổi avatar.
- **Trang quản trị (Admin):** Quản lý đơn đặt bàn, duyệt/trả về đơn, quản lý món ăn, thêm/sửa/xóa sản phẩm.
- **Đánh giá món ăn:** Khách hàng có thể đánh giá và nhận xét về món ăn đã thưởng thức.
- **Chính sách & hướng dẫn:** Trang cam kết, chính sách hoạt động, hướng dẫn đặt hàng, liên hệ, v.v.

## Công nghệ sử dụng

- **Frontend:** ReactJS (Hooks, Functional Components)
- **State Management:** Redux Toolkit
- **UI Framework:** TailwindCSS, Material UI
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Thông báo:** react-toastify
- **Xử lý ngày giờ:** date-fns

## Cấu trúc thư mục

```
NapoliZza_FE/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── configs/
│   ├── helpers/
│   ├── pages/
│   ├── redux/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## Hướng dẫn cài đặt & chạy dự án

1. **Clone repository:**

   ```sh
   git clone https://github.com/yourusername/NapoliZza_FE.git
   cd NapoliZza_FE
   ```

2. **Cài đặt dependencies:**

   ```sh
   npm install
   ```

3. **Tạo file `.env` và cấu hình endpoint API nếu cần.**

4. **Chạy ứng dụng:**

   ```sh
   npm run dev
   ```

5. **Truy cập:**  
   Mở trình duyệt và truy cập [http://localhost:5173](http://localhost:5173)
