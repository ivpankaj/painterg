"use client";

import React, { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    select: "",
    message: "",
    fullName: "",
    mobile: "",
    email: "",
    pincode: "",
    agreed: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section style={{ background: "#f7f8fa", padding: "60px 16px 70px", width: "100%", boxSizing: "border-box", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <style>{`
        .git-card {
          background: #fff;
          border-radius: 10px;
          max-width: 1080px;
          margin: 0 auto;
          padding: 48px 56px 52px;
          box-shadow: 0 2px 18px rgba(0,0,0,0.06);
          box-sizing: border-box;
        }

        .git-title {
          text-align: center;
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          color: #1a237e;
          margin: 0 0 10px;
        }

        .git-subtitle {
          text-align: center;
          font-size: clamp(13px, 1.5vw, 15px);
          color: #444;
          margin: 0 0 38px;
        }

        .git-row {
          display: grid;
          gap: 28px 32px;
          margin-bottom: 28px;
        }

        .git-row-2 {
          grid-template-columns: 1fr 1fr;
        }

        .git-row-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .git-field {
          display: flex;
          flex-direction: column;
          border-bottom: 1.8px solid #b0b8cc;
          padding-bottom: 6px;
          position: relative;
          transition: border-color 0.2s;
        }

        .git-field:focus-within {
          border-color: #1a237e;
        }

        .git-field label {
          font-size: 13px;
          color: #888;
          margin-bottom: 4px;
          display: none;
        }

        .git-field input,
        .git-field select,
        .git-field textarea {
          border: none;
          outline: none;
          font-size: 15px;
          color: #222;
          background: transparent;
          font-family: inherit;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
        }

        .git-field input::placeholder,
        .git-field textarea::placeholder {
          color: #555;
        }

        .git-field select {
          color: #555;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }

        .git-field select option {
          color: #222;
        }

        .git-field textarea {
          resize: none;
          height: 28px;
        }

        /* Custom dropdown arrow for select */
        .git-select-wrap {
          position: relative;
        }

        .git-select-wrap::after {
          content: "\\203A";
          font-size: 22px;
          color: #555;
          position: absolute;
          right: 2px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          pointer-events: none;
          line-height: 1;
        }

        .git-field select:focus {
          outline: none;
        }

        /* Checkbox row */
        .git-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 28px;
        }

        .git-checkbox-row input[type="checkbox"] {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          accent-color: #1565c0;
          margin-top: 1px;
          cursor: pointer;
        }

        .git-checkbox-row span {
          font-size: 13px;
          color: #333;
          line-height: 1.5;
        }

        /* Submit button */
        .git-submit-wrap {
          display: flex;
          justify-content: center;
        }

        .git-submit {
          background: linear-gradient(90deg, #e91e8c 0%, #f43f5e 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          border: none;
          border-radius: 6px;
          padding: 14px 64px;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: opacity 0.2s, transform 0.15s;
          font-family: inherit;
        }

        .git-submit:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .git-submit:active {
          transform: translateY(0);
          opacity: 1;
        }

        /* Tablet */
        @media (max-width: 800px) {
          .git-card {
            padding: 36px 28px 42px;
          }

          .git-row-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 520px) {
          .git-card {
            padding: 28px 16px 32px;
            border-radius: 8px;
          }

          .git-row-2,
          .git-row-4 {
            grid-template-columns: 1fr;
          }

          .git-submit {
            width: 100%;
            padding: 14px 0;
          }
        }
      `}</style>

      <div className="git-card">
        <h2 className="git-title">Get in Touch</h2>
        <p className="git-subtitle">
          Looking for something else? Drop your query and we will contact you.
        </p>

        {/* Row 1: Select + Message */}
        <div className="git-row git-row-2">
          <div className="git-field git-select-wrap">
            <select name="select" value={formData.select} onChange={handleChange}>
              <option value="" disabled>- Select -</option>
              <option value="products">Products</option>
              <option value="services">Services</option>
              <option value="warranty">Warranty</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="git-field">
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2: Full Name, Mobile, Email, Pincode */}
        <div className="git-row git-row-4">
          <div className="git-field">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="git-field">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile*"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="git-field">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="git-field">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode*"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="git-checkbox-row">
          <input
            type="checkbox"
            name="agreed"
            id="git-agree"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="git-agree" style={{ display: "inline", color: "#333", fontSize: "13px", lineHeight: "1.5", cursor: "pointer" }}>
            I agree to the terms of Service and Privacy policy Yes, I would like to receive important
            updates and notifications trough calls, sms, or e-mail
          </label>
        </div>

        {/* Submit */}
        <div className="git-submit-wrap">
          <button className="git-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}