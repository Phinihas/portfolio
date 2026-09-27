// Firebase Firestore configuration for direct contact messaging
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "gen-lang-client-0035195330",
  appId: "1:181569576290:web:d3575e6952673af8cea03b",
  apiKey: "AIzaSyDnc8GTpt867BODbLq8gPTMfRDCWAVa-EU",
  authDomain: "gen-lang-client-0035195330.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-455fac80-0996-40da-8380-e8450bbe3560",
  storageBucket: "gen-lang-client-0035195330.firebasestorage.app",
  messagingSenderId: "181569576290",
  oAuthClientId: "181569576290-ouk4jpu3qmhsh9j8d8qmdeo4bm8sm6nd.apps.googleusercontent.com"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore instance using provisioned database ID
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: any;
}

// Save contact inquiry directly without any sign-in requirement
export async function sendContactInquiry(data: { name: string; email: string; subject?: string; message: string }) {
  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    subject: data.subject?.trim() || 'Portfolio Inquiry',
    message: data.message.trim(),
    sentAt: new Date().toISOString(),
  };

  try {
    const messagesCol = collection(db, 'contact_messages');
    const docRef = await addDoc(messagesCol, {
      ...payload,
      createdAt: serverTimestamp(),
    });

    // Also keep local record backup
    try {
      const existing = JSON.parse(localStorage.getItem('sent_messages_history') || '[]');
      existing.unshift({ ...payload, id: docRef.id });
      localStorage.setItem('sent_messages_history', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // ignore localstorage errors
    }

    return { success: true, id: docRef.id };
  } catch (error) {
    console.warn('Firestore write warning, attempting direct backup store:', error);
    // In case of any network timeout, ensure message is preserved locally
    try {
      const existing = JSON.parse(localStorage.getItem('sent_messages_history') || '[]');
      const localId = 'msg-' + Date.now();
      existing.unshift({ ...payload, id: localId, offline: true });
      localStorage.setItem('sent_messages_history', JSON.stringify(existing.slice(0, 10)));
      return { success: true, id: localId };
    } catch {
      throw error;
    }
  }
}
