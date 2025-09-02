// src/pages/Comment.jsx
import { useState } from "react";
import { useComments } from "../conteks/CommentContext";

export default function Comment() {
  const { comments, updateComment, deleteComment } = useComments();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    updateComment(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">💬 Semua Komentar</h1>

        {comments.length === 0 ? (
          <p className="text-gray-500">Belum ada komentar</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((c) => (
              <li
                key={c.id}
                className="border-b border-gray-200 pb-2 text-gray-700 flex justify-between items-start"
              >
                {editingId === c.id ? (
                  <div className="flex-1">
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border p-2 w-full rounded"
                    />
                    <button
                      onClick={() => handleSave(c.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-3 py-1 rounded mt-2 ml-2"
                    >
                      Batal
                    </button>
                  </div>
                ) : (
                  <div className="flex-1">
                    <span className="block">{c.text}</span>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                )}

                <div className="ml-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(c.id, c.text)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteComment(c.id)}
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
