import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { TbLetterM } from "react-icons/tb";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <table>
            <thead>
              <tr>
                <th>
                  <a href="/"> Products</a>
                </th>
                <th>
                  <a href="/"> Collaborations</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="/"> Tiramisu chocolate</a>
                </td>
                <td>
                  <a href="/"> Tiramisu chocolate</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/"> Pastry tart</a>
                </td>
                <td>
                  <a href="/"> Pastry tart</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/"> Pllipop brownie </a>
                </td>
                <td>
                  <a href="/"> Pllipop brownie </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer__middle">
          <div className="footer__socialsContainer">
            <a href="/">
              <AiFillFacebook className="footer__icon" />
            </a>
            <a href="/">
              <AiOutlineTwitter className="footer__icon" />
            </a>
            <a href="/">
              <IoLogoLinkedin className="footer__icon" />
            </a>
            <a href="/">
              <TbLetterM className="footer__icon" />
            </a>
            <a href="/">
              <AiFillGithub className="footer__icon" />
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <a href="/">
            © 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.
          </a>
          <div className="footer__bottomContainer">
            <a href="/">Legal</a>
            <a href="/">Privacy policy</a>
            <a href="/">Proud to Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
