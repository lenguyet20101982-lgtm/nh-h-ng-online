// Đường dẫn: src/app/chitietsanpham/page.js
"use client";

import React, { useMemo, useEffect } from "react"; 
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { productsData } from "../data"; 
import Image from "next/image";
import ProductSlider from "../components/slider/slider"; // Import Slider mới

export default function ChiTietSanPham() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id"); 

  // Tìm sản phẩm
  const product = useMemo(() => {
    return productsData.find((item) => item.id === Number(productId)) || productsData[0];
  }, [productId]);
  
  // Danh sách ảnh truyền vào Slider
  const displayImages = product.images || [product.image];

  // Cuộn lên đầu trang khi đổi món
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [productId]);

  // Danh sách gợi ý cố định
  const recommendedProducts = useMemo(() => {
    return productsData
      .filter(item => item.id !== Number(productId))
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [productId]);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          <Link href="/"><span>Trang chủ</span></Link> &nbsp;&gt;&nbsp; <span className={styles.active}>{product.name}</span>
        </div>

        <div className={styles.productDetailBox}>
          {/* SỬ DỤNG COMPONENT SLIDER MỚI TẠI ĐÂY */}
          <div className={styles.imageSection}>
            <ProductSlider images={displayImages} productName={product.name} />
            <p className={styles.scrollHint}>Hình ảnh thực tế từ nhà hàng</p>
          </div>

          {/* THÔNG TIN CHI TIẾT */}
          <div className={styles.infoSection}>
            <div className={styles.tags}>
              {product.tags?.map((tag, idx) => (<span key={idx} className={styles.tag}>{tag}</span>))}
            </div>
            <h1 className={styles.productNameDetail}>{product.name}</h1>
            <div className={styles.ratingRow}>
              <span>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingText}>{product.rating} ({product.reviews} đánh giá)</span>
              <span className={styles.remainInfo}>🔥 {product.remain}</span>
            </div>
            <div className={styles.priceBoxDetail}>
              <span className={styles.currentPrice}>{product.price?.toLocaleString()}₫</span>
              <del className={styles.oldPrice}>{product.oldPrice?.toLocaleString()}₫</del>
            </div>
            
            <div className={styles.description}>
              <h3>Mô tả món ăn:</h3>
              <p>{product.description}</p>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.addToCartBtn}>🛒 Thêm vào giỏ</button>
              <button className={styles.buyNowBtn}>Mua ngay</button>
            </div>
          </div>
        </div>

        {/* PHẦN NGUYÊN LIỆU & CHẾ BIẾN */}
        <div className={styles.extraDetailsSection}>
           <div className={styles.detailCard}>
              <h3>🌿 Nguyên liệu chính</h3>
              <ul className={styles.ingredientList}>
                {product.ingredients?.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
           </div>
           
           <div className={styles.detailCard}>
              <h3>👨‍🍳 Quy trình chế biến</h3>
              <p className={styles.instructionText}>{product.instruction}</p>
           </div>
        </div>

        {/* GỢI Ý MÓN KHÁC */}
        <div className={styles.recommendSection}>
          <h2 className={styles.recommendTitle}>Gợi ý món ngon khác</h2>
          <div className={styles.recommendGrid}>
            {recommendedProducts.map((item) => (
              <Link href={`/chitietsanpham?id=${item.id}`} key={item.id} className={styles.recommendCard}>
                <div className={styles.recommendImage}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.recommendInfo}>
                  <h5>{item.name}</h5>
                  <p className={styles.recommendPrice}>{item.price?.toLocaleString()}₫</p>
                  <div className={styles.recommendBtn}>Xem chi tiết</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}