// Services Catalog — Work Dan Tour & Travel / Workdane Trading LLC
//
// Section fields:
//   name            : section label
//   requirements    : string[] — documents needed
//   regulations     : string[] — rules, success rates, deposits
//   terminalSection : true — skips item list; sales buttons shown directly
//   inquiry         : string — pre-filled Telegram message
//   items           : string[] | { label, requirements?, regulations?, ageOptions? }[]
//   ageOptions      : { label, requirements, regulations }[] on items — adds age selection step

export const SERVICES_CATALOG = [

  // ── 1. UAE Visa Services ──────────────────────────────────────────────────
  {
    id: "uae_visa",
    icon: "🇦🇪",
    en: {
      btnTitle: "🇦🇪 UAE Visa Services",
      title: "🇦🇪 UAE VISA SERVICES",
      tagline: "Dubai & Sharjah visit visas, Visa Change (A2A), Extension and Cancellation.",
      sections: [
        {
          name: "Dubai Visit Visa",
          items: [
            {
              label: "96 Hours",
              requirements: ["Passport (front & back page)", "Passport-size photo"],
              regulations: ["💰 Guarantee deposit: 300,000 ETB"]
            },
            {
              label: "30 Days — Single  |  24,500 ETB",
              ageOptions: [
                {
                  label: "Under 41",
                  requirements: [
                    "6-month bank statement (ending balance $4,000 USD per 4-month block)",
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: ~50%",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                },
                {
                  label: "Above 40",
                  requirements: [
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: 90%+",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                }
              ]
            },
            {
              label: "30 Days — Multiple  |  43,500 ETB",
              ageOptions: [
                {
                  label: "Under 41",
                  requirements: [
                    "6-month bank statement (ending balance $4,000 USD per 4-month block)",
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: ~50%",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                },
                {
                  label: "Above 40",
                  requirements: [
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: 90%+",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                }
              ]
            },
            {
              label: "60 Days — Single  |  49,500 ETB",
              ageOptions: [
                {
                  label: "Under 41",
                  requirements: [
                    "6-month bank statement (ending balance $4,000 USD per 4-month block)",
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: ~50%",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                },
                {
                  label: "Above 40",
                  requirements: [
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: 90%+",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                }
              ]
            },
            {
              label: "60 Days — Multiple  |  74,500 ETB",
              ageOptions: [
                {
                  label: "Under 41",
                  requirements: [
                    "6-month bank statement (ending balance $4,000 USD per 4-month block)",
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: ~50%",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                },
                {
                  label: "Above 40",
                  requirements: [
                    "Passport-size photo",
                    "Passport (front & back page)"
                  ],
                  regulations: [
                    "📊 Success rate: 90%+",
                    "❌ Non-refundable if rejected",
                    "💰 Guarantee deposit: 180,000 ETB",
                    "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
                  ]
                }
              ]
            },
            {
              label: "Family Invitation Visa",
              requirements: [
                "Bank statement",
                "Passport-size photo",
                "Passport (front & back page)"
              ],
              regulations: [
                "📊 Success rate: 80%+",
                "❌ Non-refundable if rejected"
              ]
            }
          ]
        },
        {
          name: "Sharjah Visit Visa",
          items: [
            {
              label: "30 Days — Single  |  37,500 ETB",
              requirements: ["Passport-size photo", "Passport (front & back page)"],
              regulations: [
                "❌ Non-refundable if rejected",
                "💰 Guarantee deposit: 180,000 ETB",
                "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
              ]
            },
            {
              label: "30 Days — Multiple  |  76,500 ETB",
              requirements: ["Passport-size photo", "Passport (front & back page)"],
              regulations: [
                "❌ Non-refundable if rejected",
                "💰 Guarantee deposit: 180,000 ETB",
                "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
              ]
            },
            {
              label: "60 Days — Single  |  76,500 ETB",
              requirements: ["Passport-size photo", "Passport (front & back page)"],
              regulations: [
                "❌ Non-refundable if rejected",
                "💰 Guarantee deposit: 180,000 ETB",
                "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
              ]
            },
            {
              label: "60 Days — Multiple  |  112,500 ETB",
              requirements: ["Passport-size photo", "Passport (front & back page)"],
              regulations: [
                "❌ Non-refundable if rejected",
                "💰 Guarantee deposit: 180,000 ETB",
                "↩ Deposit refundable within 24 hrs on timely return / status change — otherwise forfeited"
              ]
            },
            {
              label: "Family Invitation Visa",
              requirements: [
                "Bank statement",
                "Passport-size photo",
                "Passport (front & back page)"
              ],
              regulations: ["❌ Non-refundable if rejected"]
            }
          ]
        },
        {
          name: "Visa Change (A2A)",
          items: [
            {
              label: "Dubai  —  3,100 AED",
              regulations: ["✈️ Includes Flight Ticket & Visa"]
            },
            {
              label: "Sharjah  —  2,700 AED",
              regulations: ["✈️ Includes Flight Ticket & Visa"]
            }
          ]
        },
        {
          name: "Visa Extension",
          terminalSection: true,
          regulations: ["📝 Extends current visa validity without leaving the country (where applicable)"],
          inquiry: "Hi Work Dan! I need a Visa Extension — please provide pricing & requirements."
        },
        {
          name: "Visa Cancellation",
          terminalSection: true,
          regulations: ["📝 Cancels current active UAE visa"],
          inquiry: "Hi Work Dan! I need a Visa Cancellation — please provide pricing & requirements."
        }
      ],
      inquiry: "Hi Work Dan! I would like to inquire about UAE Visa Services."
    },
    am: {
      btnTitle: "🇦🇪 የ UAE ቪዛ አገልግሎቶች",
      title: "🇦🇪 የኤሚሬቶች (UAE) ቪዛ አገልግሎቶች",
      tagline: "የዱባይና ሻርጃህ ጉብኝት ቪዛ፣ A2A ቪዛ ቅያሬ፣ ቪዛ ማራዘሚያ እና ስረዛ።",
      sections: [
        {
          name: "የዱባይ ጉብኝት ቪዛ",
          items: [
            {
              label: "96 ሰዓታት",
              requirements: ["ፓስፖርት (የፊትና የኋላ ገጽ)", "የፓስፖርት ፎቶ"],
              regulations: ["💰 ዋስትና ተቀማጭ: 300,000 ብር"]
            },
            {
              label: "30 ቀናት — ነጠላ  |  24,500 ብር",
              ageOptions: [
                {
                  label: "ዕድሜ 41 ያልሞሉ (Under 41)",
                  requirements: [
                    "የ6 ወር Bank Statement (ለ4 ወር ቢሎክ ቢያንስ $4,000 USD ቀሪ ሂሳብ)",
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: ~50%",
                    "❌ ቪዛ ቢሰረዝ ተመላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                },
                {
                  label: "ዕድሜ 40 ያለፋቸው (Above 40)",
                  requirements: [
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: 90%+",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                }
              ]
            },
            {
              label: "30 ቀናት — ሁለቴ+  |  43,500 ብር",
              ageOptions: [
                {
                  label: "ዕድሜ 41 ያልሞሉ (Under 41)",
                  requirements: [
                    "የ6 ወር Bank Statement (ለ4 ወር ቢሎክ ቢያንስ $4,000 USD ቀሪ ሂሳብ)",
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: ~50%",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                },
                {
                  label: "ዕድሜ 40 ያለፋቸው (Above 40)",
                  requirements: [
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: 90%+",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                }
              ]
            },
            {
              label: "60 ቀናት — ነጠላ  |  49,500 ብር",
              ageOptions: [
                {
                  label: "ዕድሜ 41 ያልሞሉ (Under 41)",
                  requirements: [
                    "የ6 ወር Bank Statement (ለ4 ወር ቢሎክ ቢያንስ $4,000 USD ቀሪ ሂሳብ)",
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: ~50%",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                },
                {
                  label: "ዕድሜ 40 ያለፋቸው (Above 40)",
                  requirements: [
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: 90%+",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                }
              ]
            },
            {
              label: "60 ቀናት — ሁለቴ+  |  74,500 ብር",
              ageOptions: [
                {
                  label: "ዕድሜ 41 ያልሞሉ (Under 41)",
                  requirements: [
                    "የ6 ወር Bank Statement (ለ4 ወር ቢሎክ ቢያንስ $4,000 USD ቀሪ ሂሳብ)",
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: ~50%",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                },
                {
                  label: "ዕድሜ 40 ያለፋቸው (Above 40)",
                  requirements: [
                    "የፓስፖርት ፎቶ",
                    "ፓስፖርት (የፊትና የኋላ ገጽ)"
                  ],
                  regulations: [
                    "📊 የስኬት ዕድል: 90%+",
                    "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                    "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                    "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
                  ]
                }
              ]
            },
            {
              label: "የቤተሰብ ግብዣ ቪዛ",
              requirements: [
                "Bank Statement",
                "የፓስፖርት ፎቶ",
                "ፓስፖርት (የፊትና የኋላ ገጽ)"
              ],
              regulations: [
                "📊 የስኬት ዕድል: 80%+",
                "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ"
              ]
            }
          ]
        },
        {
          name: "የሻርጃህ ጉብኝት ቪዛ",
          items: [
            {
              label: "30 ቀናት — ነጠላ  |  37,500 ብር",
              requirements: ["የፓስፖርት ፎቶ", "ፓስፖርት (የፊትና የኋላ ገጽ)"],
              regulations: [
                "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
              ]
            },
            {
              label: "30 ቀናት — ሁለቴ+  |  76,500 ብር",
              requirements: ["የፓስፖርት ፎቶ", "ፓስፖርት (የፊትና የኋላ ገጽ)"],
              regulations: [
                "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
              ]
            },
            {
              label: "60 ቀናት — ነጠላ  |  76,500 ብር",
              requirements: ["የፓስፖርት ፎቶ", "ፓስፖርት (የፊትና የኋላ ገጽ)"],
              regulations: [
                "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
              ]
            },
            {
              label: "60 ቀናት — ሁለቴ+  |  112,500 ብር",
              requirements: ["የፓስፖርት ፎቶ", "ፓስፖርት (የፊትና የኋላ ገጽ)"],
              regulations: [
                "❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ",
                "💰 ዋስትና ተቀማጭ: 180,000 ብር",
                "↩ ውስጥ 24 ሰዓት በወቅቱ ሲወጡ / ስታተስ ሲቀይሩ ተቀማጩ ይመለሳል — ካልሆነ ይቀርታል"
              ]
            },
            {
              label: "የቤተሰብ ግብዣ ቪዛ",
              requirements: [
                "Bank Statement",
                "የፓስፖርት ፎቶ",
                "ፓስፖርት (የፊትና የኋላ ገጽ)"
              ],
              regulations: ["❌ ቪዛ ቢሰረዝ ተምላሽ ያልሆነ"]
            }
          ]
        },
        {
          name: "ቪዛ ቅያሬ (A2A)",
          items: [
            {
              label: "ዱባይ  —  3,100 AED",
              regulations: ["✈️ የበረራ ትኬት እና ቪዛ ጨምሮ"]
            },
            {
              label: "ሻርጃህ  —  2,700 AED",
              regulations: ["✈️ የበረራ ትኬት እና ቪዛ ጨምሮ"]
            }
          ]
        },
        {
          name: "ቪዛ ማራዘሚያ",
          terminalSection: true,
          regulations: ["📝 ያለው ቪዛ ሳይወጡ ያራዝማል (ሲፈቀድ)"],
          inquiry: "ሰላም ወርቅ ዳን! ቪዛ ማራዘሚያ እፈልጋለሁ — ዋጋና መስፈርቶች ያሳውቁኝ።"
        },
        {
          name: "ቪዛ ስረዛ",
          terminalSection: true,
          regulations: ["📝 ያለውን ንቁ UAE ቪዛ ይሰርዛል"],
          inquiry: "ሰላም ወርቅ ዳን! ቪዛ ስረዛ እፈልጋለሁ — ዋጋና መስፈርቶች ያሳውቁኝ።"
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ UAE ቪዛ አገልግሎቶች መረጃ ማግኘት እፈልጋለሁ።"
    }
  },

  // ── 2. Flight Tickets ─────────────────────────────────────────────────────
  {
    id: "flight_tickets",
    icon: "✈️",
    en: {
      btnTitle: "✈️ Flight Tickets",
      title: "✈️ FLIGHT TICKETS",
      tagline: "Local & international airline ticketing — one way, round trip, reservation, rebooking, cancellation and refund.",
      sections: [
        {
          name: "Local Tickets",
          items: ["One Way", "Round Trip", "Reservation", "Rebooking", "Cancellation", "Refund"]
        },
        {
          name: "International Tickets",
          items: ["One Way", "Round Trip", "Reservation", "Rebooking", "Cancellation", "Refund"]
        }
      ],
      inquiry: "Hi Work Dan! I need assistance with Flight Tickets (Local / International)."
    },
    am: {
      btnTitle: "✈️ የበረራ ትኬቶች",
      title: "✈️ የበረራ ትኬት አገልግሎቶች",
      tagline: "የሀገር ውስጥ እና ዓለም አቀፍ ትኬቶች — አንድ አቅጣጫ፣ ደርሶ መልስ፣ ቦታ ማስያዝ፣ ቀን መቀየር፣ ስረዛ እና ተመላሽ።",
      sections: [
        {
          name: "የሀገር ውስጥ ትኬቶች",
          items: ["አንድ አቅጣጫ (One Way)", "ደርሶ መልስ (Round Trip)", "ቦታ ማስያዝ (Reservation)", "ቀን መቀየር (Rebooking)", "ስረዛ (Cancellation)", "ተመላሽ ገንዘብ (Refund)"]
        },
        {
          name: "ዓለም አቀፍ ትኬቶች",
          items: ["አንድ አቅጣጫ (One Way)", "ደርሶ መልስ (Round Trip)", "ቦታ ማስያዝ (Reservation)", "ቀን መቀየር (Rebooking)", "ስረዛ (Cancellation)", "ተመላሽ ገንዘብ (Refund)"]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! የበረራ ትኬት (ሀገር ውስጥ / ዓለም አቀፍ) እፈልጋለሁ።"
    }
  },

  // ── 3. Hotel & Accommodation ──────────────────────────────────────────────
  {
    id: "hotel_accommodation",
    icon: "🏨",
    en: {
      btnTitle: "🏨 Hotel & Accommodation",
      title: "🏨 HOTEL & ACCOMMODATION",
      tagline: "Booking, confirmation, cancellation and refund — local and international (UAE, Africa, Asia, Europe, Middle East).",
      sections: [
        {
          name: "Booking",
          items: [
            "Local",
            "International — UAE (Dubai)",
            "International — UAE (Sharjah)",
            "International — UAE (Abu Dhabi)",
            "International — UAE (Other Emirates)",
            "International — Africa",
            "International — Asia",
            "International — Europe",
            "International — Middle East"
          ]
        },
        {
          name: "Confirmation",
          items: [
            "Local",
            "International — UAE (Dubai)",
            "International — UAE (Sharjah)",
            "International — UAE (Abu Dhabi)",
            "International — UAE (Other Emirates)",
            "International — Africa",
            "International — Asia",
            "International — Europe",
            "International — Middle East"
          ]
        },
        {
          name: "Cancellation",
          items: [
            "Local",
            "International — UAE (Dubai)",
            "International — UAE (Sharjah)",
            "International — UAE (Abu Dhabi)",
            "International — UAE (Other Emirates)",
            "International — Africa",
            "International — Asia",
            "International — Europe",
            "International — Middle East"
          ]
        },
        {
          name: "Refund",
          items: [
            "Local",
            "International — UAE (Dubai)",
            "International — UAE (Sharjah)",
            "International — UAE (Abu Dhabi)",
            "International — UAE (Other Emirates)",
            "International — Africa",
            "International — Asia",
            "International — Europe",
            "International — Middle East"
          ]
        }
      ],
      inquiry: "Hi Work Dan! I would like to inquire about Hotel Booking / Confirmation / Cancellation / Refund."
    },
    am: {
      btnTitle: "🏨 ሆቴል እና ማረፊያ",
      title: "🏨 ሆቴል እና ማረፊያ ቦታ",
      tagline: "ቦታ ማስያዝ፣ ማረጋገጫ፣ ስረዛ እና ተመላሽ — ሀገር ውስጥ እና ዓለም አቀፍ (UAE፣ አፍሪካ፣ እስያ፣ አውሮፓ፣ መካከለኛው ምስራቅ)።",
      sections: [
        {
          name: "ቦታ ማስያዝ (Booking)",
          items: [
            "ሀገር ውስጥ (Local)",
            "ዓለም አቀፍ — UAE (ዱባይ)",
            "ዓለም አቀፍ — UAE (ሻርጃህ)",
            "ዓለም አቀፍ — UAE (አቡ ዳቢ)",
            "ዓለም አቀፍ — UAE (ሌሎች ኤሚሬቶች)",
            "ዓለም አቀፍ — አፍሪካ",
            "ዓለም አቀፍ — እስያ",
            "ዓለም አቀፍ — አውሮፓ",
            "ዓለም አቀፍ — መካከለኛው ምስራቅ"
          ]
        },
        {
          name: "ማረጋገጫ (Confirmation)",
          items: [
            "ሀገር ውስጥ (Local)",
            "ዓለም አቀፍ — UAE (ዱባይ)",
            "ዓለም አቀፍ — UAE (ሻርጃህ)",
            "ዓለም አቀፍ — UAE (አቡ ዳቢ)",
            "ዓለም አቀፍ — UAE (ሌሎች ኤሚሬቶች)",
            "ዓለም አቀፍ — አፍሪካ",
            "ዓለም አቀፍ — እስያ",
            "ዓለም አቀፍ — አውሮፓ",
            "ዓለም አቀፍ — መካከለኛው ምስራቅ"
          ]
        },
        {
          name: "ስረዛ (Cancellation)",
          items: [
            "ሀገር ውስጥ (Local)",
            "ዓለም አቀፍ — UAE (ዱባይ)",
            "ዓለም አቀፍ — UAE (ሻርጃህ)",
            "ዓለም አቀፍ — UAE (አቡ ዳቢ)",
            "ዓለም አቀፍ — UAE (ሌሎች ኤሚሬቶች)",
            "ዓለም አቀፍ — አፍሪካ",
            "ዓለም አቀፍ — እስያ",
            "ዓለም አቀፍ — አውሮፓ",
            "ዓለም አቀፍ — መካከለኛው ምስራቅ"
          ]
        },
        {
          name: "ተመላሽ ገንዘብ (Refund)",
          items: [
            "ሀገር ውስጥ (Local)",
            "ዓለም አቀፍ — UAE (ዱባይ)",
            "ዓለም አቀፍ — UAE (ሻርጃህ)",
            "ዓለም አቀፍ — UAE (አቡ ዳቢ)",
            "ዓለም አቀፍ — UAE (ሌሎች ኤሚሬቶች)",
            "ዓለም አቀፍ — አፍሪካ",
            "ዓለም አቀፍ — እስያ",
            "ዓለም አቀፍ — አውሮፓ",
            "ዓለም አቀፍ — መካከለኛው ምስራቅ"
          ]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ ሆቴል ቦታ ማስያዝ / ማረጋገጫ / ስረዛ / ተመላሽ ጥያቄ ነበረኝ።"
    }
  },

  // ── 4. Tour Packages ──────────────────────────────────────────────────────
  {
    id: "tour_packages",
    icon: "🌍",
    en: {
      btnTitle: "🌍 Tour Packages",
      title: "🌍 TOUR PACKAGES",
      tagline: "Local tours, UAE activities (City Tour 100 AED, Desert Safari 100 AED, Cross Dinner 150 AED) and international destinations.",
      sections: [
        {
          name: "Local Tour",
          terminalSection: true,
          inquiry: "Hi Work Dan! I'm interested in a Local Tour Package."
        },
        {
          name: "UAE Tours & Activities",
          items: [
            "City Tour (100 AED)",
            "Desert Safari (100 AED)",
            "Cross Dinner (150 AED)",
            "Dhow Cruise",
            "Museum of the Future",
            "Jet Ski & Water Sports",
            "Private Yacht"
          ]
        },
        {
          name: "International Destinations",
          items: [
            "China",
            "Thailand",
            "Nairobi (Kenya)",
            "Maldives",
            "Singapore",
            "Armenia",
            "Seychelles",
            "Other Destinations"
          ]
        }
      ],
      inquiry: "Hi Work Dan! I would like to inquire about Tour Packages."
    },
    am: {
      btnTitle: "🌍 የቱር ፓኬጆች",
      title: "🌍 የቱር ፓኬጆች",
      tagline: "ሀገር ውስጥ ቱር፣ UAE ጉብኝቶች (City Tour 100 AED፣ Desert Safari 100 AED፣ Cross Dinner 150 AED) እና ዓለም አቀፍ መዳረሻዎች።",
      sections: [
        {
          name: "ሀገር ውስጥ ቱር (Local Tour)",
          terminalSection: true,
          inquiry: "ሰላም ወርቅ ዳን! ሀገር ውስጥ የቱር ፓኬጅ እፈልጋለሁ።"
        },
        {
          name: "UAE ጉብኝቶችና እንቅስቃሴዎች",
          items: [
            "City Tour (100 AED)",
            "Desert Safari (100 AED)",
            "Cross Dinner (150 AED)",
            "Dhow Cruise",
            "Museum of the Future",
            "Jet Ski እና የውሃ ስፖርቶች",
            "Private Yacht"
          ]
        },
        {
          name: "ዓለም አቀፍ መዳረሻዎች",
          items: [
            "ቻይና (China)",
            "ታይላንድ (Thailand)",
            "ናይሮቢ (Kenya)",
            "ማልዲቭስ (Maldives)",
            "ሲንጋፖር (Singapore)",
            "አርሜኒያ (Armenia)",
            "ሴሼልስ (Seychelles)",
            "ሌሎች መዳረሻዎች"
          ]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ ቱር ፓኬጆች መረጃ እፈልጋለሁ።"
    }
  },

  // ── 5. International Visa ─────────────────────────────────────────────────
  {
    id: "intl_visa",
    icon: "🛂",
    en: {
      btnTitle: "🛂 International Visa",
      title: "🛂 INTERNATIONAL VISA SERVICES",
      tagline: "Asia, Europe, Middle East & Africa — professional visa processing with full document guidance.",
      sections: [
        {
          name: "Asia",
          requirements: [
            "Valid passport (min 6 months validity)",
            "Recent passport-size photo (white background)",
            "Bank statement / proof of sufficient funds",
            "Flight itinerary (confirmed or provisional)"
          ],
          items: ["China", "Thailand", "Malaysia", "Indonesia"]
        },
        {
          name: "Europe",
          requirements: [
            "Valid passport",
            "Biometric passport-size photo",
            "Travel insurance (min coverage required)",
            "Flight reservation",
            "Hotel booking confirmation",
            "Bank statements (proof of sufficient funds)",
            "Employment or business proof"
          ],
          items: ["Schengen", "Hungary", "France", "Italy"]
        },
        {
          name: "Middle East & Africa",
          requirements: [
            "Valid passport (min 6 months validity)",
            "Passport-size photo",
            "Yellow fever vaccination card (applicable African countries)",
            "Flight itinerary",
            "Hotel booking confirmation"
          ],
          items: ["Saudi Arabia", "Qatar", "Oman", "Kenya", "Tanzania", "Uganda", "Rwanda", "Zambia"]
        }
      ],
      inquiry: "Hi Work Dan! I need assistance with an International Visa."
    },
    am: {
      btnTitle: "🛂 ዓለም አቀፍ ቪዛ",
      title: "🛂 ዓለም አቀፍ የቪዛ አገልግሎቶች",
      tagline: "እስያ፣ አውሮፓ፣ መካከለኛው ምስራቅ እና አፍሪካ — ሙሉ ሰነድ ዝግጅትና ቀጠሮ ጨምሮ።",
      sections: [
        {
          name: "እስያ (Asia)",
          requirements: [
            "ህጋዊ ፓስፖርት (ቢያንስ 6 ወር የሚቆይ)",
            "ቅርብ ጊዜ የፓስፖርት ፎቶ (ነጭ ዳራ)",
            "Bank Statement / የፋይናንስ ማስረጃ",
            "የበረራ ቅድሚያ ቦታ ማስያዝ (Provisional / Confirmed)"
          ],
          items: ["ቻይና (China)", "ታይላንድ (Thailand)", "ማሌዥያ (Malaysia)", "ኢንዶኔዢያ (Indonesia)"]
        },
        {
          name: "አውሮፓ (Europe)",
          requirements: [
            "ህጋዊ ፓስፖርት",
            "ባዮሜትሪክ የፓስፖርት ፎቶ",
            "Travel Insurance (የሚጠበቀው ዝቅተኛ ሽፋን ጨምሮ)",
            "የበረራ ቅድሚያ ቦታ ማስያዝ",
            "የሆቴል ቦታ ማስያዝ ማረጋገጫ",
            "Bank Statements (የፋይናንስ ማስረጃ)",
            "የሥራ ወይም የንግድ ማስረጃ"
          ],
          items: ["ሼንገን (Schengen)", "ሀንጋሪ (Hungary)", "ፈረንሳይ (France)", "ጣሊያን (Italy)"]
        },
        {
          name: "መካከለኛው ምስራቅ እና አፍሪካ",
          requirements: [
            "ህጋዊ ፓስፖርት (ቢያንስ 6 ወር የሚቆይ)",
            "የፓስፖርት ፎቶ",
            "የቢጫ ወባ ክትባት ካርድ (ለሚመለከቱ የአፍሪካ ሀገራት)",
            "የበረራ ቅድሚያ ቦታ ማስያዝ",
            "የሆቴል ቦታ ማስያዝ ማረጋገጫ"
          ],
          items: ["ሳውዲ አረቢያ", "ኳታር", "ኦማን", "ኬንያ", "ታንዛኒያ", "ዩጋንዳ", "ሩዋንዳ", "ዛምቢያ"]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ ዓለም አቀፍ ቪዛ አገልግሎት እገዛ እፈልጋለሁ።"
    }
  },

  // ── 6. Document & Attestation ─────────────────────────────────────────────
  {
    id: "document_attestation",
    icon: "📄",
    en: {
      btnTitle: "📄 Document & Attestation",
      title: "📄 DOCUMENT & ATTESTATION SERVICES",
      tagline: "PCC (Telesign & UAE Attestation), Birth Certificate, Education Document, Driving Licence — UAE attestation with full requirements.",
      sections: [
        {
          name: "PCC — Local (Telesign)",
          requirements: [
            "Valid ID or passport copy",
            "Fingerprint record or local reference details"
          ],
          terminalSection: true,
          inquiry: "Hi Work Dan! I need PCC — Local Telesign service."
        },
        {
          name: "PCC — International (UAE Attestation)",
          requirements: [
            "Police Clearance Certificate (original)",
            "Passport copy",
            "💰  Payment Only: 25,000 ETB   |   With Delivery: 32,000 ETB"
          ],
          items: ["Payment Only (25,000 ETB)", "With Delivery (32,000 ETB)"]
        },
        {
          name: "Birth Certificate — UAE Attestation",
          requirements: [
            "Original birth certificate",
            "Parents' ID or passport copies"
          ],
          terminalSection: true,
          inquiry: "Hi Work Dan! I need Birth Certificate UAE Attestation."
        },
        {
          name: "Education Document — UAE Attestation",
          requirements: [
            "Original degree or academic transcript",
            "University/college verification letter",
            "Passport copy"
          ],
          terminalSection: true,
          inquiry: "Hi Work Dan! I need Education Document UAE Attestation."
        },
        {
          name: "Driving Licence — UAE Attestation",
          requirements: [
            "Original driving licence",
            "Passport copy",
            "Certified translation (if applicable)"
          ],
          terminalSection: true,
          inquiry: "Hi Work Dan! I need Driving Licence UAE Attestation."
        }
      ],
      inquiry: "Hi Work Dan! I need assistance with Document Attestation / PCC."
    },
    am: {
      btnTitle: "📄 ሰነዶች እና PCC",
      title: "📄 የሰነዶች ማረጋገጫ (Attestation) እና PCC",
      tagline: "PCC (Telesign ና UAE Attestation)፣ የልደት ማስረጃ፣ የትምህርት ሰነድ፣ ሹፌር ፍቃድ — ሙሉ ሰነዶች ዝርዝር ጨምሮ።",
      sections: [
        {
          name: "PCC — ሀገር ውስጥ (Telesign)",
          requirements: [
            "ህጋዊ መታወቂያ ወይም ፓስፖርት ቅጂ",
            "የጣት አሻራ ወይም ሀገር ውስጥ ማጣቀሻ ዝርዝሮች"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅ ዳን! PCC — ሀገር ውስጥ Telesign አገልግሎት እፈልጋለሁ።"
        },
        {
          name: "PCC — ዓለም አቀፍ (UAE Attestation)",
          requirements: [
            "ዋናው የፖሊስ ክሊራንስ ሰርተፊኬት",
            "የፓስፖርት ቅጂ",
            "💰  ክፍያ ብቻ፡ 25,000 ብር   |   ከደሊቨሪ ጋር፡ 32,000 ብር"
          ],
          items: ["ክፍያ ብቻ (25,000 ብር)", "ከደሊቨሪ ጋር (32,000 ብር)"]
        },
        {
          name: "የልደት ማስረጃ — UAE Attestation",
          requirements: [
            "ዋናው የልደት ማስረጃ",
            "የወላጆች መታወቂያ ወይም ፓስፖርት ቅጂ"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅ ዳን! የልደት ማስረጃ UAE Attestation አገልግሎት እፈልጋለሁ።"
        },
        {
          name: "የትምህርት ሰነድ — UAE Attestation",
          requirements: [
            "ዋናው ዲግሪ ወይም የሴርተፊኬት ሰርተፊኬት",
            "ዩኒቨርሲቲ / ኮሌጅ ማስረጃ ደብዳቤ",
            "የፓስፖርት ቅጂ"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅ ዳን! የትምህርት ሰነድ UAE Attestation አገልግሎት እፈልጋለሁ።"
        },
        {
          name: "ሹፌር ፍቃድ — UAE Attestation",
          requirements: [
            "ዋናው ሹፌር ፍቃድ",
            "የፓስፖርት ቅጂ",
            "የቋንቋ ትርጉም (አስፈላጊ ከሆነ)"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅ ዳን! ሹፌር ፍቃድ UAE Attestation አገልግሎት እፈልጋለሁ።"
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ ሰነዶች ማረጋገጫ (MOFA) ወይም PCC አገልግሎት ጥያቄ ነበረኝ።"
    }
  },

  // ── 7. Business & Consultancy ─────────────────────────────────────────────
  {
    id: "business_consultancy",
    icon: "💼",
    en: {
      btnTitle: "💼 Business & Consultancy",
      title: "💼 BUSINESS & CONSULTANCY (Workdane Trading LLC)",
      tagline: "UAE company setup — Free Zone (all 7 Emirates) & Mainland, Tax Filing, Bank Account and PRO services.",
      sections: [
        {
          name: "Free Zone Setup — Dubai",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: [
            "Partner — DMCC", "Partner — JAFZA", "Partner — DIFC", "Partner — DIC", "Partner — DMC",
            "100% Shareholder — DMCC", "100% Shareholder — JAFZA", "100% Shareholder — DIFC",
            "100% Shareholder — DIC", "100% Shareholder — DMC"
          ]
        },
        {
          name: "Free Zone Setup — Abu Dhabi",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: [
            "Partner — ADGM", "Partner — KEZAD", "Partner — Masdar City", "Partner — twofour54",
            "100% Shareholder — ADGM", "100% Shareholder — KEZAD",
            "100% Shareholder — Masdar City", "100% Shareholder — twofour54"
          ]
        },
        {
          name: "Free Zone Setup — Sharjah",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: [
            "Partner — SAIF Zone", "Partner — Hamriyah Free Zone", "Partner — SPC",
            "100% Shareholder — SAIF Zone", "100% Shareholder — Hamriyah Free Zone", "100% Shareholder — SPC"
          ]
        },
        {
          name: "Free Zone Setup — Ras Al Khaimah",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Partner — RAKEZ", "100% Shareholder — RAKEZ"]
        },
        {
          name: "Free Zone Setup — Ajman",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Partner — Ajman Free Zone", "100% Shareholder — Ajman Free Zone"]
        },
        {
          name: "Free Zone Setup — Fujairah",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Partner — Fujairah Free Zone", "100% Shareholder — Fujairah Free Zone"]
        },
        {
          name: "Free Zone Setup — Umm Al Quwain",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Partner — UAQ FTZ", "100% Shareholder — UAQ FTZ"]
        },
        {
          name: "Mainland Setup — Partner",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
        },
        {
          name: "Mainland Setup — 100% Shareholder",
          requirements: ["Passport copy", "Passport-size photo", "Bank statement", "Police Clearance Certificate (PCC)"],
          items: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
        },
        {
          name: "Tax Filing",
          items: [
            {
              label: "Corporate Tax Registration",
              requirements: [
                "Trade license",
                "Memorandum of Association (MOA)",
                "Financial statements",
                "Owner passport / Emirates ID"
              ]
            },
            {
              label: "Corporate Tax Return",
              requirements: [
                "Audited financial statements",
                "Trial balance",
                "Tax Registration Number (TRN)"
              ]
            },
            {
              label: "VAT Report",
              requirements: [
                "Sales / purchase ledgers",
                "Invoices",
                "Customs documents",
                "Bank statements"
              ]
            }
          ]
        },
        {
          name: "Bank Account",
          requirements: [
            "Company trade license",
            "Corporate profile",
            "Shareholders' passports & CVs",
            "Recent bank statements (6 months)"
          ],
          terminalSection: true,
          inquiry: "Hi Workdane! I need assistance opening a UAE Corporate Bank Account."
        },
        {
          name: "PRO Service",
          requirements: [
            "Company trade license copy",
            "Establishment card",
            "Employee passport copies / visa pages"
          ],
          terminalSection: true,
          inquiry: "Hi Workdane! I need PRO Services for my UAE company."
        }
      ],
      inquiry: "Hi Workdane! I am interested in UAE Business Setup / Tax Filing / Bank Account / PRO Services."
    },
    am: {
      btnTitle: "💼 ቢዝነስ እና ምክር አገልግሎት",
      title: "💼 የቢዝነስ ማቋቋሚያና ምክር አገልግሎት (ወርቅዳኔ ትሬዲንግ)",
      tagline: "UAE ድርጅት ማቋቋም — ፍሪ ዞን (7 ኤሚሬቶች) እና ሜይን ላንድ፣ Tax Filing፣ ባንክ አካውንት እና PRO አገልግሎት።",
      sections: [
        {
          name: "ፍሪ ዞን — ዱባይ",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: [
            "አጋርነት — DMCC", "አጋርነት — JAFZA", "አጋርነት — DIFC", "አጋርነት — DIC", "አጋርነት — DMC",
            "100% ባለቤት — DMCC", "100% ባለቤት — JAFZA", "100% ባለቤት — DIFC",
            "100% ባለቤት — DIC", "100% ባለቤት — DMC"
          ]
        },
        {
          name: "ፍሪ ዞን — አቡ ዳቢ",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: [
            "አጋርነት — ADGM", "አጋርነት — KEZAD", "አጋርነት — Masdar City", "አጋርነት — twofour54",
            "100% ባለቤት — ADGM", "100% ባለቤት — KEZAD",
            "100% ባለቤት — Masdar City", "100% ባለቤት — twofour54"
          ]
        },
        {
          name: "ፍሪ ዞን — ሻርጃህ",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: [
            "አጋርነት — SAIF Zone", "አጋርነት — Hamriyah Free Zone", "አጋርነት — SPC",
            "100% ባለቤት — SAIF Zone", "100% ባለቤት — Hamriyah Free Zone", "100% ባለቤት — SPC"
          ]
        },
        {
          name: "ፍሪ ዞን — ሮስ አልካይማ",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["አጋርነት — RAKEZ", "100% ባለቤት — RAKEZ"]
        },
        {
          name: "ፍሪ ዞን — አጅማን",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["አጋርነት — Ajman Free Zone", "100% ባለቤት — Ajman Free Zone"]
        },
        {
          name: "ፍሪ ዞን — ፉጄይራ",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["አጋርነት — Fujairah Free Zone", "100% ባለቤት — Fujairah Free Zone"]
        },
        {
          name: "ፍሪ ዞን — ኡም አልቅዋን",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["አጋርነት — UAQ FTZ", "100% ባለቤት — UAQ FTZ"]
        },
        {
          name: "ሜይን ላንድ — አጋርነት",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["ዱባይ", "አቡ ዳቢ", "ሻርጃህ", "አጅማን", "ሮስ አልካይማ", "ፉጄይራ", "ኡም አልቅዋን"]
        },
        {
          name: "ሜይን ላንድ — 100% ባለቤት",
          requirements: ["የፓስፖርት ቅጂ", "የፓስፖርት ፎቶ", "Bank Statement", "PCC (የፖሊስ ክሊራንስ ሰርተፊኬት)"],
          items: ["ዱባይ", "አቡ ዳቢ", "ሻርጃህ", "አጅማን", "ሮስ አልካይማ", "ፉጄይራ", "ኡም አልቅዋን"]
        },
        {
          name: "Tax Filing",
          items: [
            {
              label: "Corporate Tax Registration",
              requirements: [
                "Trade License",
                "Memorandum of Association (MOA)",
                "Financial Statements",
                "የባለቤት ፓስፖርት / Emirates ID"
              ]
            },
            {
              label: "Corporate Tax Return",
              requirements: [
                "Audited Financial Statements",
                "Trial Balance",
                "Tax Registration Number (TRN)"
              ]
            },
            {
              label: "VAT Report",
              requirements: [
                "የሽያጭ / ግዢ Ledgers",
                "Invoices",
                "Customs Documents",
                "Bank Statements"
              ]
            }
          ]
        },
        {
          name: "ባንክ አካውንት (Bank Account)",
          requirements: [
            "Company Trade License",
            "Corporate Profile",
            "የባለቤቶች ፓስፖርት እና CV",
            "ቅርብ ጊዜ Bank Statements (6 ወር)"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅዳኔ! UAE Corporate Bank Account ለመክፈት እገዛ እፈልጋለሁ።"
        },
        {
          name: "PRO አገልግሎት",
          requirements: [
            "Company Trade License ቅጂ",
            "Establishment Card",
            "Employee Passport ቅጂ / Visa Pages"
          ],
          terminalSection: true,
          inquiry: "ሰላም ወርቅዳኔ! የ PRO አገልግሎት ለድርጅቴ እፈልጋለሁ።"
        }
      ],
      inquiry: "ሰላም ወርቅዳኔ! ስለ UAE ቢዝነስ / Tax Filing / ባንክ አካውንት / PRO አገልግሎት ጥያቄ ነበረኝ።"
    }
  },

  // ── 8. Transportation ─────────────────────────────────────────────────────
  {
    id: "transport_cars",
    icon: "🚗",
    en: {
      btnTitle: "🚗 Transportation",
      title: "🚗 TRANSPORTATION SERVICES",
      tagline: "Airport pick-up & drop-off, VIP transfers, Luxury Car, Chauffeur, Yacht, Helicopter and Supercar.",
      sections: [
        {
          name: "Transfer Services",
          items: ["Pick-up", "Drop-off", "VIP Transfer"]
        },
        {
          name: "Luxury Services",
          items: ["Luxury Car", "Chauffeur", "Yacht Tour", "Helicopter", "Supercar"]
        }
      ],
      inquiry: "Hi Work Dan! I would like to book Transportation / Airport Transfer / Luxury Service."
    },
    am: {
      btnTitle: "🚗 ትራንስፖርት",
      title: "🚗 የትራንስፖርት አገልግሎቶች",
      tagline: "ከ/ወደ አየር ማረፊያ ትራንስፖርት፣ VIP ማመላለሻ፣ Luxury Car፣ Chauffeur፣ Yacht፣ Helicopter እና Supercar።",
      sections: [
        {
          name: "የማመላለሻ አገልግሎቶች",
          items: ["ከአየር ማረፊያ መቀበል (Pick-up)", "ወደ አየር ማረፊያ ማድረስ (Drop-off)", "VIP ማመላለሻ"]
        },
        {
          name: "የቅንጦት አገልግሎቶች",
          items: ["Luxury Car", "Chauffeur", "Yacht Tour", "Helicopter", "Supercar"]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ስለ ትራንስፖርት / VIP ማመላለሻ / ቅንጦት አገልግሎት ጥያቄ ነበረኝ።"
    }
  },

  // ── 9. B2B / Agency Services ──────────────────────────────────────────────
  {
    id: "b2b_agency",
    icon: "🤝",
    en: {
      btnTitle: "🤝 B2B / Agency Services",
      title: "🤝 B2B / AGENCY SERVICES",
      tagline: "Partner registration (New Agency, Partner, Agent Account) and B2B portals (UAE Visa Portal, Document Attestation).",
      sections: [
        {
          name: "Agency Registration",
          items: ["New B2B Agency", "Partner Registration", "Agent Account"]
        },
        {
          name: "B2B Services",
          items: ["UAE Visa Portal", "Document Attestation"]
        }
      ],
      inquiry: "Hi Work Dan! I would like to register as a B2B Travel Agency Partner / access B2B Services."
    },
    am: {
      btnTitle: "🤝 B2B / ኤጀንሲ አገልግሎቶች",
      title: "🤝 B2B / ኤጀንሲ አገልግሎቶች",
      tagline: "አጋርነት ምዝገባ (አዲስ ኤጀንሲ፣ አጋርነት፣ ኤጀንት አካውንት) እና B2B ፖርታሎች (UAE Visa Portal, Document Attestation)።",
      sections: [
        {
          name: "ኤጀንሲ ምዝገባ (Agency Registration)",
          items: ["አዲስ B2B ኤጀንሲ", "አጋርነት ምዝገባ (Partner Registration)", "ኤጀንት አካውንት (Agent Account)"]
        },
        {
          name: "B2B አገልግሎቶች",
          items: ["UAE Visa Portal", "Document Attestation"]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! እንደ B2B ኤጀንሲ አጋር ለመመዝገብ / B2B አገልግሎቶችን ለማግኘት እፈልጋለሁ።"
    }
  },

  // ── 10. Contact & Info ────────────────────────────────────────────────────
  {
    id: "company_contact",
    icon: "📞",
    en: {
      btnTitle: "📞 Contact & Info",
      title: "📞 CONTACT & INFO",
      tagline: "Company overview, office locations, WhatsApp & Telegram support links, and business hours.",
      sections: [
        {
          name: "Company Information & Support",
          items: ["About Us", "Office Locations", "WhatsApp Support", "Telegram Support", "Business Hours"]
        }
      ],
      inquiry: "Hi Work Dan! I would like to get in touch with your team."
    },
    am: {
      btnTitle: "📞 ግንኙነት እና መረጃ",
      title: "📞 ግንኙነት እና ስለ ድርጅቱ",
      tagline: "ስለ ድርጅቱ፣ የቢሮ አድራሻዎች፣ WhatsApp እና Telegram ድጋፍ ሊንኮች፣ እና የሥራ ሰዓቶች።",
      sections: [
        {
          name: "የድርጅት መረጃ እና ድጋፍ",
          items: ["ስለ እኛ (About Us)", "የቢሮ አድራሻዎች (Office Locations)", "WhatsApp ድጋፍ", "Telegram ድጋፍ", "የሥራ ሰዓቶች (Business Hours)"]
        }
      ],
      inquiry: "ሰላም ወርቅ ዳን! ከቢሮአችሁ ጋር ለመገናኘት እፈልጋለሁ።"
    }
  }
];
