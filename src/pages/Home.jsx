// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context Search
import { useSearch } from "../component/SearchContext";

// Context Comment
import { useComments } from "../conteks/CommentContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { results } = useSearch();
  const navigate = useNavigate();

  // pakai context komentar
  const { comments, addComment } = useComments();

  useEffect(() => {
    fetch("https://rd-motor-akbar.vercel.app/api/datas")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const displayProducts = results.length > 0 ? results : products;

  // fungsi untuk nambah komentar ke produk tertentu
  const handleAddComment = (productId) => {
    const text = prompt("Tulis komentar untuk produk ini:");
    if (text && text.trim() !== "") {
      addComment(`[Produk ${productId}] ${text}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <div className="bg-yellow-500 rounded-2xl p-10 text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          High Quality Motorcycle Parts 🚀
        </h1>
        <p className="mt-3 text-lg text-white">
          Exclusive Offer - 20% Off This Week
        </p>
        <button className="mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* Products Grid */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-yellow-600 font-bold text-xl mt-2">{item.price}</p>

            {/* Tombol Detail */}
            <button
              onClick={() => navigate(`/detail/${item.id}`)}
              className="mt-auto bg-yellow-500 text-white rounded-lg py-2 hover:bg-yellow-600"
            >
              Lihat Selengkapnya
            </button>

            {/* Tombol Komentar */}
            <button
              onClick={() => handleAddComment(item.id)}
              className="mt-2 bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
            >
              💬 Tambah Komentar
            </button>
          </div>
        ))}
      </div>      
    </div>
  );
}
