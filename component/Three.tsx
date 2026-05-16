"use client";

import React, { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    service: "",
    message: "",
    fullName: "",
    mobile: "",
    email: "",
    pincode: "",
    agreed: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;

    const value =
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section
      style={{
        background: "#EEEEEE",
        padding: "45px 14px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <style>{`
        .git-wrapper {
          max-width: 980px;
          margin: 0 auto;
        }

        .git-card {
          background: #ffffff;
          border: 1px solid #d7d7d7;
          border-radius: 12px;
          padding: 32px;
          box-sizing: border-box;
        }

        .git-title {
          text-align: center;
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 900;
          color: #1E293B;
          margin: 0;
          line-height: 1.2;
        }

        .git-title span {
          color: #2FA084;
        }

        .git-subtitle {
          text-align: center;
          max-width: 680px;
          margin: 12px auto 32px;
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }

        .git-grid {
          display: grid;
          gap: 18px;
        }

        .git-grid-2 {
          grid-template-columns: 1fr 1fr;
        }

        .git-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .git-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .git-label {
          font-size: 13px;
          font-weight: 700;
          color: #1E293B;
        }

        .git-input,
        .git-select,
        .git-textarea {
          width: 100%;
          height: 46px;
          border: 1px solid #cfcfcf;
          background: #EEEEEE;
          border-radius: 8px;
          padding: 0 13px;
          font-size: 14px;
          color: #1E293B;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.25s ease,
            background 0.25s ease;
          font-family: inherit;
        }

        .git-textarea {
          min-height: 95px;
          padding-top: 13px;
          resize: vertical;
        }

        .git-input:focus,
        .git-select:focus,
        .git-textarea:focus {
          border-color: #2FA084;
          background: #ffffff;
        }

        .git-input::placeholder,
        .git-textarea::placeholder {
          color: #64748b;
        }

        .git-select {
          cursor: pointer;
        }

        .git-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 20px;
        }

        .git-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #2FA084;
          margin-top: 2px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .git-checkbox-text {
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .git-submit-wrap {
          display: flex;
          justify-content: center;
          margin-top: 26px;
        }

        .git-submit {
          height: 46px;
          padding: 0 26px;
          border: none;
          border-radius: 8px;
          background: #1E293B;
          color: white;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.25s ease;
          font-family: inherit;
        }

        .git-submit:hover {
          background: #2FA084;
        }

        .git-contact-row {
          display: flex;
          justify-content: center;
          gap: 22px;
          margin-top: 26px;
          flex-wrap: wrap;
        }

        .git-contact-box {
          text-align: center;
        }

        .git-contact-title {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 6px;
        }

        .git-contact-value {
          font-size: 14px;
          font-weight: 800;
          color: #1E293B;
        }

        @media (max-width: 900px) {
          .git-card {
            padding: 24px;
          }

          .git-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .git-grid-2,
          .git-grid-4 {
            grid-template-columns: 1fr;
          }

          .git-card {
            padding: 20px 14px;
          }

          .git-submit {
            width: 100%;
          }

          .git-contact-row {
            gap: 18px;
          }
        }
      `}</style>

      <div className="git-wrapper">
        <div className="git-card">
          <h2 className="git-title">
            Get in <span>Touch</span>
          </h2>

          <p className="git-subtitle">
            Looking for professional interior painting,
            exterior painting, waterproofing or texture wall
            finishes in Delhi NCR? Contact Painterg and our
            team will reach out with the best quotation and
            consultation.
          </p>

          {/* TOP ROW */}
          <div className="git-grid git-grid-2">
            <div className="git-field">
              <label className="git-label">
                Select Service
              </label>

              <select
                className="git-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">
                  Select Service
                </option>

                <option value="Interior Painting">
                  Interior Painting
                </option>

                <option value="Exterior Painting">
                  Exterior Painting
                </option>

                <option value="Texture Painting">
                  Texture Painting
                </option>

                <option value="Commercial Painting">
                  Commercial Painting
                </option>

                <option value="Waterproofing">
                  Waterproofing
                </option>
              </select>
            </div>

            <div className="git-field">
              <label className="git-label">
                Message
              </label>

              <textarea
                className="git-textarea"
                name="message"
                placeholder="Tell us about your painting requirement..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* DETAILS */}
          <div
            className="git-grid git-grid-4"
            style={{ marginTop: "18px" }}
          >
            <div className="git-field">
              <label className="git-label">
                Full Name
              </label>

              <input
                className="git-input"
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="git-field">
              <label className="git-label">
                Mobile Number
              </label>

              <input
                className="git-input"
                type="tel"
                name="mobile"
                placeholder="+91 9876543210"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="git-field">
              <label className="git-label">
                Email Address
              </label>

              <input
                className="git-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="git-field">
              <label className="git-label">
                Pincode
              </label>

              <input
                className="git-input"
                type="text"
                name="pincode"
                placeholder="110001"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="git-checkbox-row">
            <input
              className="git-checkbox"
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />

            <div className="git-checkbox-text">
              I agree to Painterg's terms,
              privacy policy and allow the team to
              contact me regarding painting services,
              quotations and project updates.
            </div>
          </div>

          {/* BUTTON */}
          <div className="git-submit-wrap">
            <button
              className="git-submit"
              onClick={handleSubmit}
            >
              Submit Enquiry
            </button>
          </div>

          {/* CONTACT INFO */}
          <div className="git-contact-row">
            <div className="git-contact-box">
              <div className="git-contact-title">
                Call Us
              </div>

              <div className="git-contact-value">
                +91 7048976431
              </div>
            </div>

            <div className="git-contact-box">
              <div className="git-contact-title">
                Email
              </div>

              <div className="git-contact-value">
                contact@roshanenterprises.org
              </div>
            </div>

            <div className="git-contact-box">
              <div className="git-contact-title">
                Service Areas
              </div>

              <div className="git-contact-value">
                Delhi NCR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}