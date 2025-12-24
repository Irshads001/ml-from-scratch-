export const projects = [
  {
    level: "Beginner",
    description:
      "These projects focus on understanding ML concepts without heavy math or complex algorithms.",
    items: [
      {
  slug: "spam-email-detector",
  title: "Spam Email Detector",
  concept: "Text Classification using Supervised Learning",

  details: {
    problem:
      "Spam emails are unsolicited messages that clutter inboxes and often contain scams or phishing attempts. Manually filtering such emails is inefficient and unreliable. The objective of this project is to build a machine learning system that automatically classifies emails as spam or not spam based on their text content.",

    outcome:
      "After completing this project, the learner will have a fully working spam detection system that can be trained on labeled email data and used to predict whether new emails are spam.",

    approach: [
      "Treat spam detection as a supervised text classification problem",
      "Convert raw email text into numerical features",
      "Train a classification model using labeled examples",
      "Evaluate the model on unseen email data",
    ],

    steps: [
      "Load a labeled dataset containing spam and non-spam emails",
      "Preprocess the email text by normalizing and cleaning it",
      "Transform text data into numerical vectors",
      "Train a classification model on the processed data",
      "Evaluate model performance using accuracy and confusion matrix",
      "Use the trained model to predict spam on new emails",
    ],

    extensions: [
      "Compare multiple classification algorithms",
      "Improve text preprocessing techniques",
      "Add probability-based predictions instead of binary labels",
      "Deploy the model as a simple web or API service",
    ],
  },

  implementation: {
    folderName: "spam-email-detector",

    files: [
      {
        path: "requirements.txt",
        description: "Python dependencies required to run the project",
        content: `numpy
pandas
scikit-learn`,
      },

      {
        path: "data/emails.csv",
        description: "Dataset containing labeled email text",
        content: `label,text
spam,Win a free prize now
ham,Meeting scheduled at 10 AM
spam,Claim your reward immediately
ham,Please review the attached document`,
      },

      {
        path: "src/preprocess.py",
        description: "Text preprocessing utilities",
        content: `import string

def clean_text(text: str) -> str:
    text = text.lower()
    text = text.translate(str.maketrans("", "", string.punctuation))
    return text`,
      },

      {
        path: "src/train.py",
        description: "Train the spam classification model",
        content: `import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from preprocess import clean_text

data = pd.read_csv("data/emails.csv")

data["text"] = data["text"].apply(clean_text)

X = data["text"]
y = data["label"]

vectorizer = TfidfVectorizer()
X_vectors = vectorizer.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X_vectors, y, test_size=0.2, random_state=42
)

model = MultinomialNB()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, predictions))

import joblib
joblib.dump(model, "spam_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")`,
      },

      {
        path: "src/predict.py",
        description: "Predict whether a new email is spam",
        content: `import joblib
from preprocess import clean_text

model = joblib.load("spam_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

def predict_email(text: str):
    text = clean_text(text)
    vector = vectorizer.transform([text])
    return model.predict(vector)[0]

email = "Congratulations! You won a free gift"
print("Prediction:", predict_email(email))`,
      },

      {
        path: "README.md",
        description: "Instructions to run the project",
        content: `# Spam Email Detector

## Setup
1. Create a virtual environment
2. Install dependencies:
   pip install -r requirements.txt

## Train the model
python src/train.py

## Run prediction
python src/predict.py`,
      },
    ],
  },
},


      {
        slug: "movie-recommendation-system",
        title: "Movie Recommendation System",
        concept: "Basic Recommendation Logic",
      },
      {
        slug: "house-price-prediction",
        title: "House Price Prediction (Conceptual)",
        concept: "Regression Idea",
      },
    ],
  },
  {
    level: "Intermediate",
    description:
      "These projects use real datasets and Machine Learning libraries like scikit-learn.",
    items: [
      {
        slug: "iris-flower-classification",
        title: "Iris Flower Classification",
        concept: "Classification Algorithms",
      },
      {
        slug: "customer-segmentation",
        title: "Customer Segmentation",
        concept: "Unsupervised Learning (Clustering)",
      },
      {
        slug: "sales-prediction",
        title: "Sales Prediction",
        concept: "Regression Models",
      },
    ],
  },
  {
    level: "Advanced",
    description:
      "These projects involve complex models and real-world problem solving.",
    items: [
      {
        slug: "image-classification",
        title: "Image Classification",
        concept: "Deep Learning",
      },
      {
        slug: "chatbot-using-nlp",
        title: "Chatbot using NLP",
        concept: "Natural Language Processing",
      },
      {
        slug: "fraud-detection-system",
        title: "Fraud Detection System",
        concept: "Anomaly Detection",
      },
    ],
  },
];
