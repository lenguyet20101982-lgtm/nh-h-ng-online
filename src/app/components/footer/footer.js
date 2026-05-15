import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export function Footer() { // Phải có export function 
    return (
<footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Nhà Hàng Online</h3>
            <p>Mang hương vị tinh hoa đến tận cửa nhà bạn. Phục vụ nhanh chóng, chất lượng hàng đầu.</p>
            <div className={styles.socialIcons}>
              <span>FB</span>
              <span>IG</span>
              <span>YT</span>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Liên kết</h4>
            <ul>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Hệ thống cửa hàng</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Liên hệ</h4>
            <p>📍 123 Đường Cơm Rang, TP. Hồ Chí Minh</p>
            <p>📞 Hotline: 1900 1234</p>
            <p>✉️ Email: hello@nhahangonline.vn</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Nhà Hàng Online / Dự án báo cáo</p>
        </div>
      </footer>
    );
  }
