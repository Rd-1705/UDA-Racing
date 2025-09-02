import { useSearch } from "../conteks/SearchContext";
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

export default function Header() {
  const { setResults, setSearchText } = useSearch();
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    setSearchText(query);

    const res = await fetch("https://rd-motor-akbar.vercel.app/api/datas");
    const data = await res.json();

    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.categori.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <>
      <header className="bg-[#003366] text-white">
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-2 text-sm">
          <div className="flex gap-4">
            <select className="bg-transparent">
              <option className="text-black">English</option>
              <option className="text-black">Indonesia</option>
            </select>
            <select className="bg-transparent">
              <option className="text-black">USD</option>
              <option className="text-black">IDR</option>
            </select>
          </div>
          <div className="flex gap-6">
            <a href="/register">REGISTER</a>
            <a href="/login">LOGIN</a>
            <a href="#">SHOPPING CART</a>
            <a href="#">CHECKOUT</a>
            <a href="/about">ABOUT</a>
          </div>
        </div>

        {/* Logo, Search, Cart */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#002855]">
          {/* Logo */}
          <div className="text-2xl font-bold">UDA Racing</div>

          {/* Search */}
          <div className="flex w-1/2">
            <select className="border border-gray-300 px-2 py-2 text-white">
              <option>All</option>
            </select>
            <input
              type="text"
              placeholder="Search entire store here ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 text-white"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-500 text-black px-6"
            >
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* <a href="/#"> */}
              <div className="relative flex items-center gap-1">
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-1 rounded-full">
                  0
                </span>
                <Heart className="w-6 h-6" />
              </div>
            {/* </a> */}

            <div className="relative flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded">
              <MessageCircleMore className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="flex gap-8 px-6 py-3 bg-[#003366] font-semibold text-sm text-white">
        <a href="/">HOME</a>
        <a href="/product">PRODUCT</a>
        <a href="#">WHEELS & TIRES</a>
        <a href="#">BODY PARTS</a>
        <a href="#">INTERIORS</a>
        <a href="#">REPAIR PARTS</a>
        <a href="#">SMART DEVICES</a>
      </nav>
    </>
  );
}
