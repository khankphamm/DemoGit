import React, { useEffect, useState } from 'react';
import { fetchProducts, addProduct } from './apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  // Gửi dữ liệu sản phẩm mới
  const handleAddProduct = async () => {
    try {
      const product = { name: newProduct }; // Dữ liệu gửi đi
      const addedProduct = await addProduct(product);
      setProducts([...products, addedProduct]); // Cập nhật danh sách
      setNewProduct('');
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Thêm sản phẩm mới"
      />
      <button onClick={handleAddProduct}>Thêm</button>
    </div>
  );
};

export default ProductList;
