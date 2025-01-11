$(document).ready(function () {
    // URL API để lấy danh sách sản phẩm
    const API_URL = "https://fakestoreapi.com/products";
  
    // Hàm lấy danh sách sản phẩm từ API
    function fetchProducts() {
      $.ajax({
        url: API_URL,
        method: "GET",
        success: function (products) {
          displayProducts(products); // Hiển thị danh sách sản phẩm
        },
        error: function (error) {
          console.error("Error fetching products:", error);
          alert("Không thể kết nối đến API!");
        },
      });
    }
  
    // Hàm hiển thị danh sách sản phẩm lên bảng
    function displayProducts(products) {
      const tableBody = $("#product-table tbody");
      tableBody.empty(); // Xóa nội dung cũ (nếu có)
  
      products.forEach((product) => {
        const row = `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td><img src="${product.image}" alt="${product.title}"></td>
            <td>${product.price.toLocaleString()} USD</td>
          </tr>
        `;
        tableBody.append(row); // Thêm hàng vào bảng
      });
    }
  
    // Gọi hàm fetchProducts khi trang tải xong
    fetchProducts();
  });
  