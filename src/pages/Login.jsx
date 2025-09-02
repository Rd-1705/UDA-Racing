
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const users = JSON.parse(localStorage.getItem("user")) || [];

    // Cek email & password
    const validUser = users.find(
      (u) => u.usergmail === email && u.userpass === password
    );

    if (validUser) {
      // alert(`Login berhasil, selamat datang ${validUser.username}!`);
      // Simpan session user (opsional)
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate("/"); // arahkan ke halaman utama/dashboard
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex h-screen relative overflow-hidden bg-black text-white">
      {/* KIRI (Form Login) */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gray-900 z-10 relative shadow-2xl">
        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="UDA Rider Logo"
          className="w-40 mb-8 drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]"
        />

        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400">
          Masuk
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email anda"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password anda"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <p className="text-orange-400 text-sm cursor-pointer hover:underline">
            Lupa Password?
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-2 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Masuk
          </button>
        </form>

        {/* Register */}
        <p className="mt-4 text-sm text-gray-400">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-orange-400 font-medium hover:underline"
          >
            Daftar sekarang
          </a>
        </p>
      </div>

      {/* KANAN (Background) */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        <img
          src="/logo.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-extrabold text-orange-400 drop-shadow-[0_0_15px_rgba(255,100,0,0.9)]">
            UDA RIDER RACING
          </h2>
          <p className="text-lg text-gray-200 mt-2">
            🔥 Speed, Power, Brotherhood 🔥
          </p>
        </div>
      </div>

      {/* WAVE PEMBATAS */}
      <div className="absolute inset-y-0 left-1/2 w-24 z-20">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,0 C40,50 60,50 100,100 L100,0 Z"
            fill="rgb(17, 24, 39)" // bg-gray-900
          />
        </svg>
      </div>
    </div>
  );
}
