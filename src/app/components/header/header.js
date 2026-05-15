import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export function Header() { // Phải có export function 
    return (
      <header className={styles.header}>
        <div className={styles.brandArea}>
          <h1>Nhà Hàng Online</h1>
        </div>
        <nav>
          <ul className={styles.navMenu}>
            <li><Link href="/">Trang chủ</Link></li>
            <li>Sản phẩm</li>
            <li>Khuyến mãi</li>
            <li>Liên hệ</li>
          </ul>
        </nav>
        <div className={styles.userInfo}>
          <span className={styles.phone}>0931.006.005</span>
          <span className={styles.account}>Tài khoản</span>
        </div>
      </header>
    );
  }