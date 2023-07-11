
import React, { useState } from "react";
import photo from "./contact.png";
import './Contact.css'
//https://formspree.io/f/mrgvnlnn
import { AiOutlineMail } from "react-icons/ai";
function ContactInfo() {
  const [fullName, setFullName] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
// function handleClear(){
//   setFullName('');
//     setDepartment('');
//     setEmail('');
// }
  const handleEmail = () => {
    const emailAddress = "vaishnavichatur5@gmail.com";
    const subject = "Hello";
    const body = "This is the body of the email.";

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div>
      <div className="card text-center">
        <div
          className="card-header"
          style={{
            backgroundColor: "#191938",
            fontSize: "2rem",
            color: "white",
          }}
        >
          Contact
        </div>
        <div className="card-body" style={{ backgroundColor: "#32324e" }}>
          <h5 className="card-title" style={{ color: "white" }}>
            Here you can contact me
          </h5>
          <div
            className="card mb-3"
            style={{
              backgroundColor: "#191938",
              boxShadow: "2px 2px 4px 4px white",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{ width: "30rem", backgroundColor: "#32324e" }}
                >
                  <div style={{ backgroundColor: "#32324e", margin: "28px" }}>
                    <img src={photo} class="card-img-top" alt="..."  style={{background:'#a58ac3', width: '20rem', height:'20rem', marginTop:'0',padding:'1px'}}/>
                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026.5131790049754!2d77.76195402991885!3d20.931755281095963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a592b2a37051%3A0xfd62675a94eebce9!2sLokmanya%20Colony!5e0!3m2!1sen!2sin!4v1686903515966!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{background:'#32324e', width: '20rem', height:'20rem', marginTop:'0',padding:'1px'}}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                  </div>
                  <div className="card-body" style={{backgroundColor:'#32324e', color: "white" }}>
                    <h5 className="card-title name">Vaishnavi Chatur</h5>
                    <p className="card-text">RecipeRise</p>
                    <h5 className="card-text">
                      <AiOutlineMail
                      className="icons"
                        style={{
                          backgroundColor: "white",
                          color: "red",
                          borderRadius: "3px",
                        }}
                      />{" "}
                      <a
                        style={{ color: "white" }}
                        onClick={handleEmail}
                        href="vaishnavichatur5@gmail.com"
                      >
                        vaishnavichatur5@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <form
                  action="https://formspree.io/f/mlekqkld" method="post">
 <div class="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Name &nbsp;
                    </span>
                    <input
                           onChange={event => setFullName(event.target.value)}
                           value={fullName}
                      type="text"
                      name='userName'
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                     @email
                    </span>
                    <input
                       
                      onChange={event => setEmail(event.target.value)}
                      value={email}
                      type="email"
                      name='email'
                      className="form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <span className="input-group-text">Write Message</span>
                    <textarea 
                     rows="8" cols="50"
                      className="form-control"
                      onChange={event => setDepartment(event.target.value)}
                      value={department}
                      name='department'
                      aria-label="With textarea"
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:'20px',boxShadow:'2px 2px 4px 4px white',backgroundColor:'#32324e' }}>
  <input className="btn" type="submit" value="submit"/>

</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default ContactInfo;
