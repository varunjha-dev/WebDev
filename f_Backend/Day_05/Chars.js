//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **SPECIAL CHARACTERS IN EXPRESS.JS ROUTES - ESSENTIAL PATTERNS** 🎯
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ❓ **THE BIG 3 - ROUTE PATTERN CHARACTERS YOU MUST KNOW**                     │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//* ════════════════════════════════════════════════════════════════════════════════════
//* ❓ **1️⃣ "?" (QUESTION MARK) - OPTIONAL CHARACTER**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! **Meaning:** The "?" makes the character before it "optional". The route will match whether that character is there or not.

    //* 💻 **Example:**
        app.use("/servicre?s", (req, res) => {
            res.send("Welcome to Services Page");
        });

    //* 🔍 **Explanation:**
        //? The "?" applies to the "e" before it
        //! The route will match either "/services" or "/service" (because the "e" is optional)
        //* It's like saying, "The "e" can be there or not—I don't care!"

    //* ✅ **Matched Routes:**
        // /services → "Welcome to Services Page"  ✅
        // /service  → "Welcome to Services Page"  ✅
        // /servicrs → No match (because "s" is required after "service")  ❌

//* ════════════════════════════════════════════════════════════════════════════════════
//* ⭐ **2️⃣ "*" (ASTERISK) - WILDCARD REPEATER**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! **Meaning:** The "*" means the character before it can appear "zero or more times"
    //? The route matches whether the character is there or not, and it can repeat any number of times (including none)
    //* It acts as a wildcard for any sequence of characters

    //* 💻 **Example:**
        app.use("/contac*t", (req, res) => {
            res.send("Welcome to Contact Page");
        });

    //* 🔍 **Explanation:**
        //! The "*" applies to the "c" before it
        //? The route will match either "/contat" or "/contact" or "/contacct" (because the "c" can repeat any number of times)
        //* The "*" allows any characters (or none) between "contac" and "t"

    //* ✅ **Matched Routes:**
        // /contat     → "Welcome to Contact Page"  ✅
        // /contact    → "Welcome to Contact Page"  ✅
        // /contacct   → "Welcome to Contact Page"  ✅
        // /contacccct → "Welcome to Contact Page"  ✅
        // /cont123act → "Welcome to Contact Page"  ✅

//* ════════════════════════════════════════════════════════════════════════════════════
//* ➕ **3️⃣ "+" (PLUS SIGN) - ONE OR MORE**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! **Meaning:** The "+" means the character before it can appear "one or more times"
    //? The route matches as long as there's at least one of that character, and it can repeat

    //* 💻 **Example:**
        app.use("/abou+t", (req, res) => {
            res.send("Welcome to About Page");
        });

    //* 🔍 **Explanation:**
        //! The "+" applies to the "u" before it
        //? This route matches "/about" (one u), "/abouut" (two us), "/abouuut" (three us), and so on
        //* The "u" must appear at least once, but more is fine too!

    //* ✅ **Matched Routes:**
        // /about     → "Welcome to About Page"  ✅
        // /abouut    → "Welcome to About Page"  ✅
        // /abouuut   → "Welcome to About Page"  ✅
        // /abot      → No match (needs at least one "u")  ❌

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📝 **QUICK SUMMARY - MEMORIZE THIS!**
//* ════════════════════════════════════════════════════════════════════════════════════

    //* 🎯 **The Essential Rules:**
        //! **"?"** : "The letter before me is optional—there or not, I'll match."
        //? **"*"** : "The letter before me can be there zero times or a bunch—I'm flexible!"
        //* **"+"** : "Give me at least one of the letter before me, but more is okay."

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **PRACTICAL COMPARISON TABLE**
//* ════════════════════════════════════════════════════════════════════════════════════

    /*
    ┌──────────┬─────────────┬──────────────┬─────────────────────────┐
    │ SYMBOL   │   MEANING   │   MINIMUM    │       EXAMPLE           │
    ├──────────┼─────────────┼──────────────┼─────────────────────────┤
    │    ?     │   Optional  │      0       │  colou?r → color/colour │
    │    *     │  Wildcard   │      0       │  ca*t → cat/cart/caaat  │
    │    +     │ One or More │      1       │  goo+d → good/goood     │
    └──────────┴─────────────┴──────────────┴─────────────────────────┘
    */
