import React, { Component } from "react";

class CartInfor extends Component {
  render() {
    return (
      //Bao trong 1 thẻ div
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1">Shopping cart</p>
          <p className="mb-0">You have 4 items in your cart</p>
        </div>
        <div>
          <p className="mb-0">
            <span className="text-muted">Sort by:</span>{" "}
            <a href="#!" className="text-body">
              price <i className="fas fa-angle-down mt-1" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default CartInfor;
// Em sử dụng JSX thì em phải tuân thủ quy tắc của nó. Em ok chỗ này . Thầy out nhé. Em làm tiếp đi, có vấn đề gì thì hỏi lại thầy