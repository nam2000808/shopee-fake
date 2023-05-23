import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/Coupon.css";

import coupon1 from "../assets/coupon/coupon (1)";
import coupon2 from "../assets/coupon/coupon (2)";
import coupon3 from "../assets/coupon/coupon (3)";
import coupon4 from "../assets/coupon/coupon (4)";
import coupon5 from "../assets/coupon/coupon (5)";
import coupon6 from "../assets/coupon/coupon (6)";
import coupon7 from "../assets/coupon/coupon (7)";
import coupon8 from "../assets/coupon/coupon (8)";
import coupon9 from "../assets/coupon/coupon (9)";

const Coupon = () => {
  return (
    <div class="box">
      <div class="row mx-0 coupon-sale align-item-center">
        <div class="d-flex justify-content-between w-100">
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon1} alt="" />
            </div>
            <p class="mb-0 mt-2">Nạp thẻ, Dịch</p>
            <p>Vụ & Data</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon2} alt="" />
            </div>
            <p class="mb-0 mt-2">Hàng quốc tế</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon3} alt="" />
            </div>
            <p class="mb-0 mt-2">Gì Cũng Rẻ -</p>
            <p>Mua Là Freeship</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon4} alt="" />
            </div>
            <p class="mb-0 mt-2">Miễn Phí Vận </p>
            <p>Chuyển</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon5} alt="" />
            </div>
            <p class="mb-0 mt-2">Khung Giờ Săn</p>
            <p>Sale</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon6} alt="" />
            </div>
            <p class="mb-0 mt-2">Mã Giảm Giá</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon7} alt="" />
            </div>
            <p class="mb-0 mt-2">Bắt Trend - Giá</p>
            <p>Sốc</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon8} alt="" />
            </div>
            <p class="mb-0 mt-2">Hàng Hiệu Outlet</p>
            <p>Giảm 50%</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="wrap-img">
              <img src={coupon9} alt="" />
            </div>
            <p class="mb-0 mt-2">Voucher Giảm</p>
            <p>Đến 200.000Đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
