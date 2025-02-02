# EmpathAI: An AI-Powered Emotional Support Chatbot

EmpathAI is a **Next.js-based AI chatbot** designed to provide **emotional support** and **mental well-being assistance** using the **OpenAI API**. It leverages **Natural Language Processing (NLP)** to detect emotional cues from user inputs and offers personalized guidance, stress-relief techniques, and helpful resources.

## 🌟 Features

✅ **Emotion Detection** – Identifies user emotions from text using AI-powered sentiment analysis.
✅ **Personalized Guidance** – Provides tailored responses based on detected emotions.
✅ **24/7 Availability** – A digital emotional support companion accessible anytime.
✅ **Privacy-Focused** – Ensures encryption and security for user conversations.
✅ **Adaptive Learning** – Improves response quality over time.
✅ **Scalable & Responsive** – Works seamlessly on mobile and desktop.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React.js, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **AI Processing**: OpenAI API
- **State Management**: Context API
- **Deployment**: Vercel / Cloud Platforms

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/sau1606/EmpathAI.git
 cd EmpathAI
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```sh
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key-here
```

### 4️⃣ Run the Development Server
```sh
npm run dev
```
The app will be available at `http://localhost:3000`

---

## 📌 Directory Structure
```sh
EmpathAI/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   ├── route.ts  # API endpoint for chatbot interaction
│   ├── global/
│   ├── layout/
│   ├── page/
├── components/
├── hooks/
├── public/
├── styles/
├── .gitignore
├── README.md
├── component.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
```

---

## 🎯 API Endpoints

### 🔹 `POST /api/chat`
**Description**: Processes user messages and returns AI-generated responses.
- **Request Body:**
  ```json
  {
    "message": "I feel very anxious today."
  }
  ```
- **Response:**
  ```json
  {
    "response": "I'm here for you. Try some deep breathing exercises to help calm your mind."
  }
  ```

---

## 🔗 Deployment
 **Deployed on Vercel:** [EmpathAI Live](https://empath-ai.vercel.app/)


---

## 📷 Chatbot Snapshot
![Image](https://github.com/user-attachments/assets/9e56ceb3-5b1f-4a72-8bc3-600c0d532924)
![Image](https://github.com/user-attachments/assets/efd53d6e-dd17-4970-abd6-3a5416d66066)

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an **issue** or **pull request**.

---

## 📝 License
This project is licensed under the **MIT License**.

---

## 📧 Contact
📌 **GitHub**: [@sau1606](https://github.com/sau1606)  
📌 **LinkedIn**: [Saurabh Kumar Singh](https://www.linkedin.com/in/sau1606/)
