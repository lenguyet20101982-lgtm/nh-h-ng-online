import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { productsData } from "./data"; // Đã sửa đường dẫn này

export default function Home() {
  const categories = ["Bò nướng", "Lẩu", "Hải sản", "Quán nhậu", "Món Nhật", "Món Việt", "Món Hàn"];

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.searchSection}>
        <div className={styles.locationSearch}>
          <div className={styles.locationBox}><span>📍</span> Hồ Chí Minh</div>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Bạn muốn đặt chỗ đến đâu?" />
            <button>🔍 Tìm kiếm</button>
          </div>
        </div>

        <div className={styles.filterRow}>
          <span className={styles.filterChip}>Khu vực</span>
          <span className={styles.filterChip}>Nhà hàng</span>
          <span className={styles.filterChip}>Giá trung bình</span>
          <span className={styles.filterChip}>Đồ ăn chính</span>
          <span className={styles.filterButton}>Lọc</span>
        </div>

        <div className={styles.categoryChips}>
          {categories.map((cat, idx) => (
            <span key={idx} className={styles.chip}>{cat}</span>
          ))}
        </div>
      </div>

      <div className={styles.bottomBanner}>TỰ TIN LÀ NHÀ HÀNG GIAO NHANH NHẤT 2026</div>

      <main className={styles.item2}>
        {productsData.map((product) => (
          <Link href={`/chitietsanpham?id=${product.id}`} key={product.id}>
            <div className={styles.productBox}>
              <div className={styles.product}>
                <div className={styles.productImage}>
                  <Image src={product.image} alt={product.name} layout="fill" className={styles.imageWrapper} />
                </div>
                <div className={styles.productName}><h5>{product.name}</h5></div>
                <div className={styles.productPrice}>
                  <span className={styles.price}>{product.price.toLocaleString()}₫</span>
                  <del className={styles.oldPrice}>{product.oldPrice.toLocaleString()}₫</del>
                </div>
                <div className={styles.productRemain}>{product.remain}</div>
                <div className={styles.buyButton}><span>Mua ngay</span></div>
              </div>
            </div>
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
}