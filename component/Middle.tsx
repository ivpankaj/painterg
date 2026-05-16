"use client";

import React from "react";

const steps = [
  {
    id: 1,
    label: "Book free\nsite visit",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    label: "Choose colours\n& textures",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    label: "Approve final\nquotation",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    label: "Painting work\nstarts",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PaintergSteps() {
  return (
    <section
      style={{
        background: "#EEEEEE",
        padding: "45px 14px 60px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <style>{`
        .painterg-title {
          text-align: center;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 900;
          color: #1E293B;
          margin: 0 0 10px 0;
          letter-spacing: 0.01em;
        }

        .painterg-title .green {
          color: #2FA084;
        }

        .painterg-subtitle {
          max-width: 680px;
          margin: 0 auto 38px auto;
          text-align: center;
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }

        .steps-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          max-width: 980px;
          margin: 0 auto;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .step-num {
          font-size: 32px;
          font-weight: 900;
          color: #2FA084;
          margin-bottom: 10px;
          line-height: 1;
        }

        .step-image-wrap {
          width: clamp(120px, 15vw, 180px);
          height: clamp(120px, 15vw, 180px);
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #2FA084;
          background: white;
        }

        .step-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .step-label-desktop {
          margin-top: 16px;
          font-size: 14px;
          font-weight: 700;
          color: #1E293B;
          text-align: center;
          line-height: 1.5;
          white-space: pre-line;
          max-width: 150px;
        }

        .connector {
          flex-shrink: 0;
          width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 52px;
        }

        .connector svg {
          width: 100%;
          overflow: visible;
        }

        .step-mobile-row {
          display: none;
        }

        .bottom-buttons {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn {
          height: 44px;
          padding: 0 22px;
          border: none;
          background: #1E293B;
          color: white;
          font-size: 13px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .primary-btn:hover {
          background: #2FA084;
        }

        .secondary-btn {
          height: 44px;
          padding: 0 22px;
          border: 1.5px solid #1E293B;
          background: transparent;
          color: #1E293B;
          font-size: 13px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .secondary-btn:hover {
          background: #1E293B;
          color: white;
        }

        @media (max-width: 768px) {
          .steps-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .step-item {
            flex-direction: row;
            align-items: center;
            gap: 14px;
            padding: 8px 2px;
          }

          .step-num {
            display: none;
          }

          .step-label-desktop {
            display: none;
          }

          .step-image-wrap {
            flex-shrink: 0;
            width: 90px !important;
            height: 90px !important;
          }

          .step-mobile-row {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }

          .step-mobile-num {
            font-size: 24px;
            font-weight: 800;
            color: #2FA084;
            line-height: 1;
          }

          .step-mobile-label {
            font-size: 14px;
            font-weight: 700;
            color: #1E293B;
            line-height: 1.45;
            white-space: pre-line;
          }

          .connector {
            padding-top: 0;
            width: 34px;
            height: 34px;
            margin: 0 auto;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 420px) {
          .step-image-wrap {
            width: 74px !important;
            height: 74px !important;
          }
        }
      `}</style>

      <h2 className="painterg-title">
        How <span className="green">PainterG</span> Works
      </h2>

      <p className="painterg-subtitle">
        Professional interior painting, exterior painting,
        waterproofing and texture wall finishes across Delhi NCR
        with trusted painters and premium quality finishes.
      </p>

      <div className="steps-row">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step-item">
              <div className="step-num">{step.id}</div>

              <div className="step-image-wrap">
                <img
                  src={step.image}
                  alt={step.label}
                  className="step-image"
                />
              </div>

              <div className="step-label-desktop">
                {step.label}
              </div>

              <div className="step-mobile-row">
                <div className="step-mobile-num">
                  {step.id}
                </div>

                <div className="step-mobile-label">
                  {step.label}
                </div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="connector">
                <svg
                  viewBox="0 0 56 120"
                  width="56"
                  height="120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={
                      index % 2 === 0
                        ? "M 4,22 Q 28,95 52,22"
                        : "M 4,98 Q 28,25 52,98"
                    }
                    stroke="#2FA084"
                    strokeDasharray="6 5"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bottom-buttons">
        <button className="primary-btn">
          Get Free Quote
        </button>

        <button className="secondary-btn">
          Call Now
        </button>
      </div>
    </section>
  );
}