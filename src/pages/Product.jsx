
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../component/SearchContext";

// pakai context komentar
import { useComments } from "../conteks/CommentContext";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Matic");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const { searchText } = useSearch();

  const { comments, addComment } = useComments();

  useEffect(() => {
    fetch("https://rd-motor-akbar.vercel.app/api/datas")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const categories = ["Matic", "Sport", "Cub"];

  const filteredProducts = products.filter((item) => {
    const category = item.categori?.toLowerCase() || "";
    const name = item.name?.toLowerCase() || "";
    const search = searchText?.toLowerCase() || "";
    const selected = selectedCategory?.toLowerCase();

    if (search) {
      return name.includes(search);
    }
    if (selected) {
      return category === selected;
    }
    return true;
  });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // fungsi tambah komentar
  const handleAddComment = (productId) => {
    const text = prompt("Tulis komentar untuk produk ini:");
    if (text && text.trim() !== "") {
      addComment(`[Produk ${productId}] ${text}`);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Judul */}
      <h1 className="text-2xl font-bold text-center mb-6">
        UDA Motorcycle Product
      </h1>

      {/* Tabs Kategori */}
      <div className="flex justify-center space-x-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-lg font-medium ${
              selectedCategory === cat
                ? "border-b-2 border-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Produk Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-yellow-600 font-bold text-xl mt-2">
                {item.price}
              </p>

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
          ))
        ) : (
          <p>Produk belum tersedia.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
