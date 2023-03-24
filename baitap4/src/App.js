import React, {Component} from "react";
import CartInfor from "./components/CartInfor";
import ListProDuct from "./components/ListProDuct";
import PaymentInfor from "./components/PaymentInfor";
class App extends Component {
  render(){
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-7">
                  <h5 className="mb-3">
                    <a href="#!" className="text-body">
                      <i className="fas fa-long-arrow-alt-left me-2" />
                      Continue shopping
                    </a>
                  </h5>
                  <hr />
                  {/* cart */}

                 <CartInfor />
                  {/* List */}
                  <ListProDuct />
                </div>
                {/* payment */}
                <PaymentInfor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
  }
}

export default App;
