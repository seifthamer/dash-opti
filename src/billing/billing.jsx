import React from 'react'; 
import './billing.css';
 function Billing() { 
  return (

    <div className="billing">
     <div className="billingbloc1">

  <div className="left-column">

    <div className="card-display-container">
      <div className="cardbil-display" style={{ backgroundImage: `url(./images/Background.svg)` }}>
        <div className="cardbil-title">
          <h5>Purity UI</h5>
          <img src="./images/circles.svg" alt="" />
        </div>
        <div className="cardbil-number">7812 2139 0823 XXXX</div>
        <div className="cardbil-info">
          <div className="valid-thru">
            <span>VALID THRU</span>
            <span>05/24</span>
          </div>
          <div className="cvv">
            <span>CVV</span>
            <span>09X</span>
          </div>
        </div>
      </div>

      <div className="cardbil-container">
        <div className="cardbil">
          <div className="icon-bg">
            <span className="iconbil">$</span>
          </div>
          <h2 className="titlebil">Incomes Urban</h2>
          <p className="amountbil">+$2000</p>
        </div>
        <div className="cardbil">
          <div className="icon-bg">
            <span className="iconbil">$</span>
          </div>
          <h2 className="titlebil">Incomes Urban</h2>
          <p className="amountbil">+$2000</p>
        </div>
      </div>
    </div>

    <div className="payment-method-section">
      <div className="payment-method-title">
        <h5>Payment Method</h5>
        <button className="add-card-btn">ADD A NEW CARD</button>
      </div>
      <div className="payment-cards">
        <div className="card-input">
          <div className="input-logo"> <img src="./images/Mastercard Icon.svg" alt="" /> <span className="card-logo mastercard-logo"></span>
          </div>
          <input type="text" placeholder="7812 2139 0823 XXXX" />
        </div>
        <div className="card-input">
          <div className="input-logo"> <img src="./images/Visa Icon.svg" alt="" /> <span className="card-logo visa-logo"></span>
          </div>
          <input type="text" placeholder="7812 2139 0823 XXXX" />
        </div>
      </div>
    </div>
  </div>







  <div className="right-column">
    <div className="invoice-section">
      <div className="invoice-header">
        <span className="invoice-title">Invoices</span>
        <button className="view-all-btn">VIEW ALL</button>
      </div>

     <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>


  <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>

      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
      <div className="invoice-item">
        <div className="item-details">
          <span className="date">March, 01, 2020</span>
          <span className="invoice-number">#MS-415646</span>
        </div>
        <div className="item-right-section">
          <span className="amountbill2">$180</span>
          <button className="pdf-btn">
            <img src="./images/text.svg" alt="PDF" className="pdf-icon" />PDF </button>
        </div>
      </div>
    </div>
  </div>
</div>




 <div className="billingbloc2">

 <div className="Billing_container">
  <h5>Billing Information</h5>
  <div className="Bill_card">
    <div className="Bill_left">
      <h6 className="Bill_name">Name Here</h6>
      <span className="Bill_title">
        Course Name : <span className="Bill_next"> UX for beginners </span>{" "}
      </span>
      <span className="Bill_title">
        Email Address : <span className="Bill_next"> user@email.com </span>{" "}
      </span>
      <span className="Bill_title">
        VAT Number : <span className="Bill_next"> FRB12121212 </span>{" "}
      </span>
    </div>
    <div className="Bill_right">
      <div className="action_buttons">
        <i className="fa-solid fa-trash-can">
          {" "}
          <span className="delete_text">Delete</span>
        </i>
        <i className="fa-solid fa-pencil">
          <span className="edit_text">Edit</span>
        </i>
      </div>
    </div>
  </div>

  <div className="Bill_card">
    <div className="Bill_left">
      <h6 className="Bill_name">Name Here</h6>
      <span className="Bill_title">
        Course Name : <span className="Bill_next"> UX for beginners </span>{" "}
      </span>
      <span className="Bill_title">
        Email Address : <span className="Bill_next"> user@email.com </span>{" "}
      </span>
      <span className="Bill_title">
        VAT Number : <span className="Bill_next"> FRB12121212 </span>{" "}
      </span>
    </div>
    <div className="Bill_right">
      <div className="action_buttons">
        <i className="fa-solid fa-trash-can">
          {" "}
          <span className="delete_text">Delete</span>
        </i>
        <i className="fa-solid fa-pencil">
          <span className="edit_text">Edit</span>
        </i>
      </div>
    </div>
  </div>


  <div className="Bill_card">
    <div className="Bill_left">
      <h6 className="Bill_name">Name Here</h6>
      <span className="Bill_title">
        Course Name : <span className="Bill_next"> UX for beginners </span>{" "}
      </span>
      <span className="Bill_title">
        Email Address : <span className="Bill_next"> user@email.com </span>{" "}
      </span>
      <span className="Bill_title">
        VAT Number : <span className="Bill_next"> FRB12121212 </span>{" "}
      </span>
    </div>
    <div className="Bill_right">
      <div className="action_buttons">
        <i className="fa-solid fa-trash-can">
          {" "}
          <span className="delete_text">Delete</span>
        </i>
        <i className="fa-solid fa-pencil">
          <span className="edit_text">Edit</span>
        </i>
      </div>
    </div>
  </div>

</div>



<div className="Transaction_container">
<h5>Your Transactions</h5>
  <div className="Transaction_card">
    <div className="Transaction_left">
      <div className="ArrowIcon">
        <img src="./images/arrowdown.svg" alt="" />
      </div>
      <div className="Transaction_details">
        <div className="Transaction_user">
          <h6 className="Transaction_username">User User</h6>
          <span className="Transaction_date">27 March 2020, at 12:30 PM</span>
        </div>
      </div>
    </div>
    <div className="Transaction_right">
      <span className="Transaction_amount_down">-$2500</span>
    </div>
  </div>
  <div className="Transaction_card">
  <div className="Transaction_left">
      <div className="ArrowIcon">
        <img src="./images/arrowtop.svg" alt="" />
      </div>
      <div className="Transaction_details">
        <div className="Transaction_user">
          <h6 className="Transaction_username">User User</h6>
          <span className="Transaction_date">27 March 2020, at 12:30 PM</span>
        </div>
      </div>
    </div>
    <div className="Transaction_right">
      <span className="Transaction_amount_up">+$2500</span>
    </div>
  </div>
</div>

        </div>

        </div>
































 ); 

} 


export default Billing;