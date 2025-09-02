import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentColor, setCurrentColor] = useState(0);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    fetch("https://rd-motor-akbar.vercel.app/api/datas")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === id);
        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <p className="p-6">Produk tidak ditemukan...</p>;
  }

  const nextColor = () => {
    setCurrentColor((prev) => (prev + 1) % product.color.length);
  };

  const prevColor = () => {
    setCurrentColor(
      (prev) => (prev - 1 + product.color.length) % product.color.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl w-full">
        {/* Nama & Harga */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-xl font-semibold text-yellow-600 mb-4">{product.price}</p>

        {/* Gambar utama */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain rounded-lg mb-6"
        />

        {/* Slider Warna */}
        <div className="relative flex items-center justify-center mb-6">
          <button
            onClick={prevColor}
            className="absolute left-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          <img
            src={product.color[currentColor]}
            alt={`color-${currentColor}`}
            className="w-48 h-48 object-contain border rounded-lg"
          />
          <button
            onClick={nextColor}
            className="absolute right-0 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>

        {/* Dot Navigasi */}
        <div className="flex justify-center gap-2 mb-6">
          {product.color.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentColor(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentColor ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Tombol Detail Mesin */}
        <button
          onClick={() => setShowDesc(!showDesc)}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
        >
          {showDesc ? "Tutup Detail Mesin" : "Lihat Detail Mesin"}
        </button>

        {/* Deskripsi */}
        {showDesc && (
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {Object.entries(product.desc).map(([key, value], idx) => (
              <li key={idx}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
