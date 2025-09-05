//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔐 **BCRYPT PASSWORD HASHING** - Security Implementation Learning 🔐
//* ════════════════════════════════════════════════════════════════════════════════════

const bcrypt = require("bcrypt");
const password = "Varun@123";

async function Hashing() {
    //* ┌─────────────────────────────────────────────────────────────────────────────┐
    //* │ 🧂 **SALT GENERATION** - Adding randomness to hashing                      │
    //* └─────────────────────────────────────────────────────────────────────────────┘
    
    //! Generate salt with complexity level 10 (2^10 = 1024 rounds)
    const salt = await bcrypt.genSalt(10);
    console.log(salt);                    //? Example: $2b$10$yMXN19SHSOxeA43gst.aae
    
    //* ┌─────────────────────────────────────────────────────────────────────────────┐
    //* │ 🔒 **PASSWORD HASHING** - Convert plain text to secure hash                │
    //* └─────────────────────────────────────────────────────────────────────────────┘
    
    //! Hash password using generated salt
    const hashpass = await bcrypt.hash(password, salt);
    console.log(hashpass);                //? Example: $2b$10$yMXN19SHSOxeA43gst.aaerky9dLBZxVNFjw/Wy..18N1KIyqwqhq
    
    //* ┌─────────────────────────────────────────────────────────────────────────────┐
    //* │ ✅ **PASSWORD VERIFICATION** - Compare plain text with hash                 │
    //* └─────────────────────────────────────────────────────────────────────────────┘
    
    //? Verify password - returns true if match, false otherwise
    const ans = await bcrypt.compare(password, hashpass);
    console.log(ans);                     //! Should return true
}

Hashing();

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **BCRYPT CONCEPTS EXPLAINED**
//* ════════════════════════════════════════════════════════════════════════════════════

/*
//! **ROUNDS EXPLANATION**
bcrypt.hash(password, 10)
10 = rounds (complexity level)
Higher value = More secure but slower processing
10 means algorithm runs 2^10 = 1024 times
//? Recommended: 10-12 rounds for production

//! **SALT STRUCTURE BREAKDOWN**
$2b$10$yMXN19SHSOxeA43gst.aae
│  │  │  └─ Salt value (22 characters)
│  │  └─ Rounds (10)
│  └─ Version (2b)
└─ Algorithm identifier

//! **COMPLETE HASH STRUCTURE**
$2b$10$Tar2058J9dJQK/OR2e7GHu2Tzkv8l55ONyQ8bbSzbw5FB3CRCaQlq
│←────── Salt (29 chars) ──────→│←─── Hash (31 chars) ───→│

//* **SECURITY BENEFIT**: Even with same password, different salts create different hashes
Password: "123456" + Salt1 → Hash1
Password: "123456" + Salt2 → Hash2 (completely different)
*/
