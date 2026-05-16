"use client";

import React from "react";

const steps = [
  {
    id: 1,
    label: "Sign up for\nfree site visit",
    icon: (
      <svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <polygon points="60,12 8,58 22,58 22,102 98,102 98,58 112,58" fill="#e0e0e0" stroke="#c8c8c8" strokeWidth="1.5"/>
        <polygon points="60,12 8,58 112,58" fill="#d2d2d2" stroke="#bbb" strokeWidth="1"/>
        <rect x="44" y="70" width="18" height="32" rx="1" fill="#b8b8b8"/>
        <rect x="70" y="65" width="16" height="16" rx="1" fill="#ccc"/>
        <circle cx="70" cy="62" r="20" fill="white" stroke="#2a2a2a" strokeWidth="3.5"/>
        <circle cx="70" cy="62" r="13" fill="#f2f2f2"/>
        <line x1="84" y1="76" x2="98" y2="90" stroke="#2a2a2a" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="70" cy="62" r="5" fill="#cc0000"/>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Free colour\nconsultation",
    icon: (
      <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="5" y="8" width="28" height="84" rx="4" fill="#b0b0b0"/>
        <rect x="41" y="8" width="28" height="84" rx="4" fill="#cc0000"/>
        <rect x="77" y="8" width="28" height="84" rx="4" fill="#c0c0c0"/>
        <rect x="9" y="12" width="7" height="28" rx="2" fill="rgba(255,255,255,0.28)"/>
        <rect x="45" y="12" width="7" height="28" rx="2" fill="rgba(255,255,255,0.18)"/>
        <rect x="81" y="12" width="7" height="28" rx="2" fill="rgba(255,255,255,0.22)"/>
      </svg>
    ),
  },
  {
    id: 3,
    label: "Quotation\napproval",
    icon: (
      <svg viewBox="0 0 120 105" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="12" y="6" width="96" height="93" rx="7" fill="white" stroke="#ddd" strokeWidth="2.5"/>
        <circle cx="30" cy="24" r="8" fill="#cc0000"/>
        <rect x="30" y="42" width="60" height="5" rx="2.5" fill="#d4d4d4"/>
        <rect x="30" y="54" width="46" height="5" rx="2.5" fill="#d4d4d4"/>
        <rect x="30" y="66" width="52" height="5" rx="2.5" fill="#d4d4d4"/>
        <rect x="60" y="78" width="38" height="10" rx="3" fill="#cc0000"/>
      </svg>
    ),
  },
  {
    id: 4,
    label: "Painting work\nstarts",
    icon: (
      <svg viewBox="0 0 140 115" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect x="4" y="18" width="24" height="72" rx="4" fill="#cc0000"/>
        <rect x="4" y="14" width="24" height="14" rx="3" fill="#a80000"/>
        <ellipse cx="16" cy="14" rx="12" ry="4" fill="#bf0000"/>
        <line x1="28" y1="46" x2="44" y2="58" stroke="#999" strokeWidth="3.5" strokeLinecap="round"/>
        <rect x="42" y="64" width="90" height="40" rx="8" fill="#d8d8d8"/>
        <rect x="42" y="55" width="90" height="18" rx="6" fill="#c8c8c8"/>
        <rect x="52" y="66" width="32" height="26" rx="5" fill="#bbb"/>
        <rect x="92" y="66" width="32" height="26" rx="5" fill="#bbb"/>
        <rect x="42" y="58" width="14" height="46" rx="6" fill="#c0c0c0"/>
        <rect x="118" y="58" width="14" height="46" rx="6" fill="#c0c0c0"/>
        <rect x="52" y="100" width="9" height="12" rx="2" fill="#aaa"/>
        <rect x="113" y="100" width="9" height="12" rx="2" fill="#aaa"/>
      </svg>
    ),
  },
];

export default function NxtGenSteps() {
  return (
    <section style={{ background: "#fff", padding: "60px 16px 80px", fontFamily: "'Segoe UI', Arial, sans-serif", width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
      <style>{`
        .nxtgen-title {
          text-align: center;
          font-size: clamp(20px, 3.5vw, 34px);
          font-weight: 800;
          color: #1a237e;
          margin: 0 0 56px 0;
          letter-spacing: 0.005em;
        }

        .nxtgen-title .red {
          color: #cc0000;
        }

        .steps-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          max-width: 1160px;
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
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 700;
          font-style: italic;
          color: #cc0000;
          margin-bottom: 10px;
          line-height: 1;
        }

        .step-circle {
          width: clamp(120px, 17vw, 200px);
          height: clamp(120px, 17vw, 200px);
          border-radius: 50%;
          border: 2.5px dashed #cc0000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          box-sizing: border-box;
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-circle:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 36px rgba(204,0,0,0.13);
        }

        .step-label-desktop {
          margin-top: 18px;
          font-size: clamp(13px, 1.5vw, 16px);
          font-weight: 700;
          color: #1a1a2e;
          text-align: center;
          line-height: 1.45;
          white-space: pre-line;
          max-width: 150px;
        }

        .connector {
          flex-shrink: 0;
          width: clamp(28px, 5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: clamp(34px, 5vw, 60px);
        }

        .connector svg {
          width: 100%;
          overflow: visible;
        }

        .step-mobile-row {
          display: none;
        }

        @media (max-width: 680px) {
          .steps-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .step-item {
            flex-direction: row;
            align-items: center;
            gap: 18px;
            padding: 8px 12px;
          }

          .step-num {
            display: none;
          }

          .step-label-desktop {
            display: none;
          }

          .step-circle {
            flex-shrink: 0;
            width: 100px !important;
            height: 100px !important;
            padding: 12px;
          }

          .step-mobile-row {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .step-mobile-num {
            font-size: 26px;
            font-weight: 700;
            font-style: italic;
            color: #cc0000;
            line-height: 1;
          }

          .step-mobile-label {
            font-size: 15px;
            font-weight: 700;
            color: #1a1a2e;
            line-height: 1.45;
            white-space: pre-line;
          }

          .connector {
            padding-top: 0;
            width: 40px;
            height: 40px;
            margin: 0 auto;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 400px) {
          .step-circle {
            width: 82px !important;
            height: 82px !important;
            padding: 9px;
          }
        }
      `}</style>

      <h2 className="nxtgen-title">
        Steps of <span className="red">NxtGen</span> Painting Service
      </h2>

      <div className="steps-row">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step-item">
              {/* Desktop number */}
              <div className="step-num">{step.id}</div>

              {/* Circle icon */}
              <div className="step-circle">{step.icon}</div>

              {/* Desktop label */}
              <div className="step-label-desktop">{step.label}</div>

              {/* Mobile: number + label beside circle */}
              <div className="step-mobile-row">
                <div className="step-mobile-num">{step.id}</div>
                <div className="step-mobile-label">{step.label}</div>
              </div>
            </div>

            {/* Dashed curved connector */}
            {index < steps.length - 1 && (
              <div className="connector">
                <svg
                  viewBox="0 0 56 120"
                  width="56"
                  height="120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {index % 2 === 0 ? (
                    <g>
                      <path
                        d="M 4,22 Q 28,95 52,22"
                        stroke="#cc0000"
                        strokeDasharray="6 5"
                        strokeWidth="2.2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="0,-7 -5,5 5,5"
                        fill="#cc0000"
                        transform="translate(52,22) rotate(-140)"
                      />
                    </g>
                  ) : (
                    <g>
                      <path
                        d="M 4,98 Q 28,25 52,98"
                        stroke="#cc0000"
                        strokeDasharray="6 5"
                        strokeWidth="2.2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="0,-7 -5,5 5,5"
                        fill="#cc0000"
                        transform="translate(52,98) rotate(40)"
                      />
                    </g>
                  )}
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}