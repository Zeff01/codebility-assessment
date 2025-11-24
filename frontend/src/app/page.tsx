"use client";
import { useState } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { Poppins } from "next/font/google";
import Slider from "./components/Slider";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const main_box = [
    {
      id: 1,
      img: "/approved.png",
      heading: "Fast Approval",
      sub_heading: "Get approved within minutes—no long forms or paperwork.",
      alt: "",
      link: "/1",
    },
    {
      id: 2,
      img: "/low-price.png",
      heading: "Low Interest Rates",
      sub_heading: "Affordable and transparent rates with no hidden fees.",
      alt: "",
      link: "/1",
    },
    {
      id: 3,
      img: "/transaction.png",
      heading: " Flexible Payment Terms",
      sub_heading: "Choose a repayment plan that fits your budget.",
      alt: "",
      link: "/1",
    },
    {
      id: 4,
      img: "/shield.png",
      heading: "Secure & Trusted",
      sub_heading:
        "Your personal information is protected with bank-level security.",
      alt: "",
      link: "/1",
    },
  ];

  const Essentials = [
    {
      id: 1,
      heading: "Flexible Loan Options for Every Need",
      para: "Every month, we offer tailored personal loan options to suit your financial situation. Whether it’s a small emergency or a larger expense, choose the plan that works best for you. Apply easily, get approved quickly, and manage your repayments with flexibility and confidence.",
      button: "Check Your Eligibility",
      link: "/1",
    },
    {
      id: 2,
      heading: "Cover Your Everyday Expenses",
      para: "Unexpected bills and daily expenses can quickly add up. With our personal loans, you can manage groceries, utilities, medical costs, and other essentials without worry. Access funds quickly, stay on top of your budget, and handle everyday needs with ease and peace of mind.",
      button: "Get Funds Now",
      link: "/1",
    },
    {
      id: 3,
      heading: "Download the App & Manage Your Loan",
      para: "Get complete control of your personal loans on the go. Download our app to apply, track your application, receive funds, and manage repayments—all from your smartphone. Stay informed and in control wherever you are.",
      button: "Get the App",
      link: "/1",
    },
  ];
  return (
    <div className={poppinsFont.className}>
      <header>
        <div className="wrapper">
          <div className="header_con">
            <div className="main_logo">
              <a href="">
                {/* <figure>
                  <img src="./main_logo.svg" alt="moola" />
                </figure> */}
                <h2>
                  PLW <span>Personal Loan Website</span>
                </h2>
              </a>
            </div>

            <div className="head_nav">
              <nav>
                <ul>
                  <li>
                    <a href=""> Shop</a>
                  </li>
                  <li>
                    <a href=""> Winter Holiday Sale</a>
                  </li>
                  <li>
                    <a href=""> How it Works</a>
                  </li>
                  <li>
                    <a href=""> Refer & Earn</a>
                  </li>
                  <li>
                    <a href=""> Merchant Solutions</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header_info">
              <div className="header_btn">
                <a href="">DOWNLOAD NOW</a>
              </div>
            </div>

            <div className="toggle_nav">
              <div className="toggle_btn">
                {" "}
                <div
                  className={`hamburger ${isOpen ? "active" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={`menu ${isOpen ? "show" : ""}`}>
                <nav>
                  <ul>
                    <li>
                      <a href=""> Shop</a>
                    </li>
                    <li>
                      <a href=""> Winter Holiday Sale</a>
                    </li>
                    <li>
                      <a href=""> How it Works</a>
                    </li>
                    <li>
                      <a href=""> Refer & Earn</a>
                    </li>
                    <li>
                      <a href=""> Merchant Solutions</a>
                    </li>
                  </ul>
                </nav>

                <div className="header_info toggle">
                  <div className="header_btn">
                    <a href="">DOWNLOAD NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="search_bar">
        <div className="wrapper">
          <div className="search_con">
            <form action="" className="search_bar_form">
              <input
                type="text"
                placeholder="Search over 250 gift card brands"
              />
              <button>
                <SearchIcon style={{ color: "#fff" }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="hero">
        <div className="wrapper">
          <div className="hero_con">
            <div className="hero_slide">
              <Slider />
            </div>

            <div className="hero_boxes">
              <section>
                <div className="hero_info">
                  <h2 className="hero_heading">
                    Receive your loan instantly with no waiting.
                  </h2>
                  <a href="">Get Your Loan</a>
                  {/* <div className="hero_app">
                    <figure>
                      <a href="">
                        <img src="./app-store.svg" alt="App Store" />
                      </a>
                    </figure>
                    <figure>
                      <a href="">
                        <img src="./play-store.svg" alt="Play Store" />
                      </a>
                    </figure>
                  </div> */}
                </div>
              </section>
              <section>
                <div className="hero_info">
                  <h2 className="hero_heading">
                    Get approved for your loan and receive money instantly.
                  </h2>
                  <a href="">Instant Approval</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="wrapper">
          <div className="main_con">
            <div className="main_info">
              <h2 className="heading">Why Choose Us?</h2>
              <p>
                At PLW, we make borrowing simple, fast, and secure. Our personal
                loans are designed to give you financial flexibility with
                minimal paperwork, instant approval, and affordable repayment
                options. Whether you need funds for emergencies, education, or
                personal projects, we provide a trusted and transparent solution
                that puts you in control of your finances.
              </p>
            </div>

            <div className="main_boxes">
              {main_box.map((box) => (
                <section key={box.id}>
                  <figure>
                    <img src={box.img} alt={box.alt} />
                  </figure>
                  <div className="box_info">
                    <h5>
                      {box.heading}
                      <span>{box.sub_heading}</span>
                    </h5>
                    {/* <div className={box.percent ? "percent" : ""}>
                      {box.percent}
                    </div> */}
                  </div>
                </section>
              ))}
            </div>

            <div className="main_btm1">
              <div className="main_btm1_info">
                <h2 className="heading">Instant Loans With A Personal Touch</h2>
                <p>
                  Sometimes unexpected expenses come up, and you need cash fast.
                  With our personal loans, you can get the funds you need
                  instantly, directly to your account. Whether it’s for
                  emergencies, bills, or personal projects, we make borrowing
                  simple, quick, and secure—so you can focus on what matters
                  most.
                </p>
              </div>

              <div className="btm1_flex">
                <div className="flex_info1 flex_info">
                  <h5 className="subhead">
                    Hassle-free <br />
                    Personal Loans
                  </h5>
                  <p>
                    Say goodbye to the stress of unexpected expenses. With our
                    personal loans, you can apply quickly and receive funds in
                    minutes—no complicated forms, no delays. Get the money you
                    need instantly and manage your finances with ease.
                  </p>
                </div>
                <div className="flex_img">
                  <figure>
                    <img src="./phone.gif" alt="phone" />
                  </figure>
                </div>
                <div className="flex_info2 flex_info">
                  <h5 className="subhead">
                    Track Your Loan
                    <br /> Status Easily
                  </h5>
                  <p>
                    Stay informed about your personal loan every step of the
                    way. Monitor your application, approval, and fund
                    disbursement directly from your account or app. With
                    real-time updates, you’ll always know when your money is
                    ready to use—giving you complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="main_btm2">
              <div className="main_btm2_info">
                <h3 className="heading">
                  Save Time & Manage <br />
                  Expenses Smarter
                </h3>
                <p>
                  Managing unexpected expenses doesn’t have to be stressful.
                  With our personal loans, you can cover urgent bills,
                  emergencies, or everyday needs without disrupting your budget.
                  Quick access to funds helps you stay in control, plan better,
                  and avoid financial stress. Borrow smart, repay flexibly, and
                  keep your finances on track with ease.
                </p>
              </div>

              <div className="btm2_boxes">
                {Essentials.map((ess) => (
                  <section key={ess.id}>
                    <h3 className="subhead">{ess.heading}</h3>
                    <p>{ess.para}</p>
                    <a href="">{ess.button}</a>
                  </section>
                ))}
              </div>
            </div>

            <div className="main_btm3">
              <div className="main_btm3_info">
                <h3 className="heading">What Do Customers Think About Us</h3>
              </div>

              <div className="btm3_boxes">
                <section>
                  <figure className="profile_pic">
                    <img src="null" alt="M" />
                  </figure>
                  <div className="btm3_box_info">
                    <p>
                      “I needed a quick loan for unexpected medical expenses.
                      The approval was instant, and the funds were in my account
                      within hours. Very reliable!”
                    </p>
                    <span>Maria C., Cebu</span>
                  </div>
                  <figure>
                    <img src="./stars-5.png" alt="stars" />
                  </figure>
                  {/* <figure>
                    <img src="./apple-store-icon.png" alt="App Store" />
                  </figure> */}
                </section>
                <section>
                  <figure className="profile_pic">
                    <img src="null" alt="J" />
                  </figure>
                  <div className="btm3_box_info">
                    <p>
                      “Applying for a personal loan has never been easier. The
                      flexible repayment options allowed me to manage my budget
                      without stress.”
                    </p>
                    <span>James R., Davao</span>
                  </div>
                  <figure>
                    <img src="./stars-4.png" alt="stars" />
                  </figure>
                  {/* <figure>
                    <img
                      src="./google-store-icon.png"
                      alt="Google Play Store"
                    />
                  </figure> */}
                </section>
                <section>
                  <figure className="profile_pic">
                    <img src="null" alt="A" />
                  </figure>
                  <div className="btm3_box_info">
                    <p>
                      “I used this service to cover some urgent home repairs.
                      The process was simple, fast, and completely transparent.
                      Highly recommended!”
                    </p>
                    <span>Angela M., Manila</span>
                  </div>
                  <figure>
                    <img src="./stars-5.png" alt="stars" />
                  </figure>
                  {/* <figure>
                    <img
                      src="./google-play-store-icon.png"
                      alt="Google Play Store"
                    />
                  </figure> */}
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer_top">
          <div className="wrapper">
            <div className="footer_con">
              <div className="ftr_top_info">
                <div className="payment">
                  <p>Repay Your Loan Easily</p>
                  <div className="payment_card">
                    <img src="./visa.svg" alt="card" />
                    <img src="./mastercard.svg" alt="card" />
                    <img src="./discover.svg" alt="card" />
                  </div>
                </div>
                <div className="powered">
                  <p>Payments Powered by Dummy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_mid">
          <div className="wrapper">
            <div className="footer_con">
              <div className="footer_mid_info">
                <div className="footer_logo">
                  <a href="">
                    {/* <figure>
                    <img src="./footer_logo.svg" alt="moola" />
                  </figure> */}
                    <h2>
                      PLW <span>Personal Loan Website</span>
                    </h2>
                  </a>
                </div>

                <div className="footer_nav">
                  <nav>
                    <ul>
                      <li>
                        <a href="">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="">Help Center</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="social_media">
                <ul>
                  <li>
                    <a href="">
                      <FacebookIcon style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <InstagramIcon style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <YouTubeIcon style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <LinkedInIcon style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <XIcon style={{ fontSize: "25px" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="wrapper">
            <div className="footer_con">
              <div className="footer_btm_info">
                <p>Copyright © 2025 Moola Inc. All rights reserved. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
