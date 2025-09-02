import { createContext, useContext, useEffect, useState } from "react";

const CommentContext = createContext();

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  // 🔹 Load dari localStorage saat pertama kali
  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, []);

  // 🔹 Simpan ke localStorage setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // 🔹 Tambah komentar
  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      date: new Date().toLocaleString("id-ID"),
    };
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
}

export const useComments = () => useContext(CommentContext);
