const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    // Kết nối đến MongoDB bằng URI trong file config
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database!");

    // Lấy cổng từ config để chạy server
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // Nếu kết nối database thất bại thì log lỗi và thoát chương trình
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
}

// Gọi hàm khởi động server
startServer();
