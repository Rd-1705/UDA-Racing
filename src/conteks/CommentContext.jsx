// src/conteks/CommentContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CommentContext = createContext();

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  // 🔹 Load dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  // 🔹 Simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Create
  const addComment = (text, productId) => {
    const newComment = {
      id: Date.now(),
      text,
      date: new Date().toLocaleString("id-ID"),
      productId, // simpan id produk
    };
    setComments((prev) => [newComment, ...prev]);
  };

  // Update
  const updateComment = (id, newText) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, text: newText } : c))
    );
  };

  // Delete
  const deleteComment = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CommentContext.Provider
      value={{ comments, addComment, updateComment, deleteComment }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export const useComments = () => useContext(CommentContext);
