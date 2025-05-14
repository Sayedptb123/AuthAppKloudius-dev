
# React Native Authentication App

A simple authentication flow built with **React Native** using:

- ✅ React Context API for global auth state
- ✅ Formik and Yup for form handling and validation
- ✅ React Navigation for screen transitions
- ✅ AsyncStorage for persisting login state (optional)
- ✅ Clean architecture with reusable components

---

## 🚀 Features

- Login & Signup functionality
- Form validation with Yup
- Error messages for invalid inputs and incorrect credentials
- Toggle password visibility
- Persistent login using AsyncStorage
- Custom header styles and back button color
- Modular and scalable project structure

---

## 📁 Folder Structure

```
/components
  ├── AppTextInput.js      // Reusable input field
  ├── FormError.js         // Displays error messages

/context
  └── AuthContext.js       // Global authentication context

/screens
  ├── LoginScreen.js
  ├── SignupScreen.js
  └── HomeScreen.js

/utils
  └── validationSchemas.js // Yup form validation schemas

/styles
  └── globalStyles.js      // Shared styles

/App.js                    // Entry point with navigation
```

---

## 🧪 Tech Stack

- React Native
- React Navigation
- React Context API
- Formik
- Yup
- AsyncStorage (optional)

---

## 🛠️ Installation

1. Clone the repo:

```bash
git clone https://github.com/Sayedptb123/AuthAppKloudius-dev.git
cd AuthAppKloudius-dev
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the app:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

---

## 🔐 Authentication Logic

- User data is stored in-memory for demo purposes (or can be extended to Firebase / backend API).
- AuthContext handles `login`, `signup`, `logout`, and `user` state.

---

## ✅ TODO (Optional Enhancements)

- 🔄 Connect to backend API (Firebase / custom server)
- 🧠 Add password reset flow
- 🎨 Improve theming and responsive design
- 🧪 Add unit tests for validation and auth context

---

## 📸 Screenshots

> 
- Home screen
  ![Alt text](app-screens/home.jpg?raw=true "Home Screen")
- Login screen
  ![Alt text](app-screens/login.jpg?raw=true "Login Screen")
- Signup screen
  ![Alt text](app-screens/signup.jpg?raw=true "Signup Screen")

---

## 📄 License

MIT License
