// src/pages/Comment.jsx
import { useState } from "react";
import { useComments } from "../conteks/CommentContext";

export default function Comment() {
  const { comments, updateComment, deleteComment } = useComments();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [products, setProducts] = useState([]);

   // Fetch produk dari API sekali saja
  useEffect(() => {
    fetch("https://rd-motor-akbar.vercel.app/api/datas")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Gagal ambil produk", err));
  }, []);

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    updateComment(id, editText);
    setEditingId(null);
    setEditText("");
  };

    const getProduct = (id) => products.find((p) => p.id === id);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">💬 Semua Komentar</h1>

        {comments.length === 0 ? (
          <p className="text-gray-500">Belum ada komentar</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((c) => {
              const product = getProduct(c.productId);

              return (
                <li
                  key={c.id}
                  className="border-b border-gray-200 pb-3 text-gray-700 flex gap-4 items-start"
                >
                  {/* Gambar produk */}
                  {product && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                  )}

                  <div className="flex-1">
                    {/* Nama produk */}
                    {product && (
                      <p className="font-semibold text-gray-900">
                        {product.name}
                      </p>
                    )}

                    {/* Komentar */}
                    {editingId === c.id ? (
                      <div>
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
                      <>
                        <span className="block">{c.text}</span>
                        <span className="text-xs text-gray-400">{c.date}</span>
                      </>
                    )}
                  </div>

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
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
