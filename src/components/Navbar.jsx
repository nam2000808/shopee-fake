import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div class="navbar d-flex justify-content-between align-items-center">
        <div class="navbar-left d-flex align-items-center">
          <span>Kênh người bán</span>
          <div class="hr1 mx-2"></div>
          <span>Trở thành Người bán Shopee</span>
          <div class="hr1 mx-2"></div>
          <span>Download</span>
          <div class="hr1 mx-2"></div>
          <span>Kết nối</span>
          <i class="bi bi-facebook mr-2 ml-2"></i>
          <i class="bi bi-instagram mr-2"></i>
          <i class="bi bi-envelope mr-2"></i>
          <i class="bi bi-whatsapp mr-2"></i>
        </div>
        <div class="navbar-right d-flex align-items-center">
          <i class="bi bi-bell"></i>
          <span class="mr-4">Thông báo</span>
          <i class="bi bi-question-circle"></i>
          <span class="mr-4">Hỗ trợ</span>
          <div className="login d-flex align-items-center">
            <span class="font-weight-bold">Đăng Ký</span>
            <div class="hr1 mx-2"></div>
            <span class="font-weight-bold">Đăng nhập</span>
          </div>
        </div>
      </div>
      <div class="d-flex  mt-3">
        <div class="Brand d-flex">
          <i class="bi bi-bag-fill d-flex"></i>
          <span class="text-brand">Shopee</span>
        </div>
        <div class="wrap-navbar-input">
          <div class="wrap-search">
            <input type="text" class="form-control" placeholder="Tìm kiếm..." />
            <div class="wrap-icon-s">
              <i class="bi bi-search"></i>
            </div>
          </div>
          <div class="recommend under-input d-flex mt-1">
            <span>aaaaaaaaaaaaaaa</span>
            <span class="mr-3">bbbbbbbbbbbb</span>
            <span class="mr-3">cccc</span>
            <span class="mr-3">ddddd</span>
            <span class="mr-3">eeeeeeeee</span>
            <span class="mr-3">ffffffffffff</span>
            <span class="mr-3">hhhhhhhhhhhh</span>
            <span class="mr-3">gggggggggg</span>
          </div>
        </div>
        <i class="cart bi bi-cart"></i>
      </div>
    </div>
  );
};

export default Navbar;
