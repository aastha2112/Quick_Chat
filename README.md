# 🤖 QuickChat

QuickChat is a responsive chatbot application built with **React**, **Redux**, **Firebase**, and **Tailwind CSS**. It features a login/signup system, a real-time chat interface with automatic bot replies, message persistence using local storage, and smooth transitions.

## 🚀 Features

✅ Login and Signup:

- Fully functional signup and login pages using Firebase Authentication.
- Responsive and clean design with Tailwind CSS.

✅ Chat Interface:

- Real-time chat functionality.
- Bot named **Bubbles** that sends automated replies.
- Auto-scroll to the latest message.
- Send messages with the **Enter** key or a **Send** button.
- Messages persist using **local storage**.

✅ Design and Styling:

- Soft pink and blue gradient theme.
- Smooth animations using **Framer Motion**.
- Mobile and tablet responsive design.

## 🛠️ Tech Stack

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| **React**         | UI framework                    |
| **Redux**         | State management                |
| **Firebase**      | Authentication and data storage |
| **Tailwind CSS**  | Styling                         |
| **Framer Motion** | Animations                      |
| **React-Icons**   | Icons                           |

## 🎨 Setup and Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/quickchat.git
```

2. **Navigate to the project directory**:

```bash
cd quickchat
```

3. **Install dependencies**:

```bash
npm install
```

4. **Set up Firebase**:
   - Create a Firebase project.
   - Enable **Email/Password Authentication**.
   - Get your Firebase config keys and add them to a `.env` file:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

5. **Start the development server**:

```bash
npm run dev
```

## ✨ Usage

### 1. Signup and Login

- Create an account or log in with an existing one.
- Firebase handles user authentication.

### 2. Chat

- Type a message and press "Enter" or click the **Send** button.
- Bot (Bubbles) will reply automatically.
- Chat history is saved using **local storage**.

## 🎯 Future Enhancements

- [ ] Add more realistic bot responses using AI/LLM.
- [ ] Improve chatbot animations.
- [ ] Add support for multiple chat rooms.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repo and submit a pull request.

## 📄 License

This project is licensed under the **MIT License**.

👨‍💻 Developed by **Aastha**  
💖 **Happy Coding!** 😎
