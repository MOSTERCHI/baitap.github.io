import React from "react";
import { Component } from "react";
// Chúng ta nên chứa các component của ứng dụng vào folder có tên là components
// Tên Component phải viết hoa ký tự đầu tiên và thường trùng với tên của file
class BaiTap1 extends Component {
    render(){
        return(
            <div>
                <h2>DANH SÁCH KHÓA HỌC</h2>
                <ul>
                    <li>Javascrip</li>
                    <li>HTML</li>
                    <li>Python</li>
                    <li>C#</li>
                </ul>
            </div>
        );
    }
}
// export default theo tên của class
export default BaiTap1;