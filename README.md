# PrepAI - AI Mock Interview Platform

PrepAI is an AI-powered mock interview preparation platform that helps users practice technical and behavioral interviews through realistic interview simulations. The platform generates personalized interview questions, records user responses, and provides a structured environment for improving interview performance.

## 🚀 Features

* **AI-Powered Mock Interviews**

  * Generate interview questions based on selected roles and skills.
  * Practice realistic interview scenarios.

* **Personalized Interview Experience**

  * Customize interviews according to job role, experience level, and interview type.

* **Answer Recording**

  * Record responses using webcam and microphone support.
  * Review responses to improve communication and confidence.

* **Interview Feedback**

  * Analyze interview performance.
  * Identify areas for improvement.

* **Authentication**

  * Secure user authentication and profile management.

* **Responsive Design**

  * Fully responsive interface for desktop and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Shadcn UI Components

### Backend / Services

* Firebase Authentication
* Firebase Firestore
* Google Gemini AI API

### Development Tools

* ESLint
* Git
* npm / pnpm

---

## 📂 Project Structure

```
PrepAI/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Application layouts
│   ├── routes/           # Application pages
│   ├── config/           # Configuration files
│   ├── handlers/         # Authentication handlers
│   ├── lib/              # Utility functions
│   └── main.tsx          # Application entry point
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/chitranshumahaur7-cyber/PrepAI-Mock-Interviewer.git
```

### 2. Navigate to the project directory

```bash
cd PrepAI-Mock-Interviewer
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

or using pnpm:

```bash
pnpm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add your required Firebase and AI configuration values:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_GEMINI_API_KEY=
```

### 5. Start the development server

```bash
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🔐 Environment & Security

* API keys and sensitive configuration values should be stored using environment variables.
* Never commit `.env` files or private credentials to GitHub.

---

## 🎯 Future Improvements

* Advanced AI-based answer evaluation
* Resume-based interview generation
* Voice emotion and confidence analysis
* Interview performance analytics dashboard
* More industry-specific interview templates

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

## 👨‍💻 Author

**Chitranshu Mahaur**

GitHub:
https://github.com/chitranshumahaur7-cyber
