import React, { Component } from "react"
import ProDuct from "./ProDuct"
class ListProDuct extends Component {
  render() {
    return (
      //       <p className="mb-0">
      //       <span className="text-muted">Sort by:</span>{" "}
      //       <a href="#!" className="text-body">
      //         price <i className="fas fa-angle-down mt-1" />
      //       </a>
      //     </p>
      //   </div>
      // </div>
      // Khi chúng ta return về nhiều thẻ thì chúng ta phải bọc các thẻ đó vào, đảm bảo chỉ trả về 1 element
// 
      <div>
        <ProDuct />
        <ProDuct />
        <ProDuct />
        <ProDuct />
      </div>

    );
  }
}
export default ListProDuct;