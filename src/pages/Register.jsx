import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register () {
  
  const [username, setUsername] = useState("");
  const [usergmail, setUserGmail] = useState("");
  const [userpass, setUserPass] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const naviget = useNavigate();
  const handleRegister = (reg)=>{
    reg.preventDefault();
    //cek akun user
    const user = JSON.parse(localStorage.getItem("user")) || [];
    if(user.find((pengguna)=> pengguna.username === username)){
      alert("User Name Sudah Ada")
      return;
    };
    if(user.find((pengguna)=> pengguna.userGmail === usergmail)){
      alert("Gmail Sudah Ada")
      return;
    };
    if(userpass !== userpassword){
      alert("beda kontol, samainn pp")
      return;
    };
    const a = {
      id : crypto.randomUUID(),    
      username,
      usergmail,
      userpass
    }
    user.push(a);
    localStorage.setItem("user", JSON.stringify(user));
    alert("DAFTAR SUDAH BERHASIL");
    naviget("/login");
  }


  return (
    <div className="flex h-screen relative overflow-hidden bg-black text-white">
      {/* KIRI (Form Register) */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gray-900 z-10 relative shadow-2xl">
        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="UDA Rider Logo"
          className="w-40 mb-8 drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]"
        />

        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400">
          Daftar Akun
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Nama */}
          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Nama Lengkap
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Email
            </label>
            <input
              type="email"
              value={usergmail}
               onChange={(e) => setUserGmail(e.target.value)}
              placeholder="Masukkan email anda"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Password
            </label>
            <input
              type="password"
              value={userpass}
               onChange={(e) => setUserPass(e.target.value)}
              placeholder="Buat password"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label className="block text-gray-300 font-medium">
              <span className="text-red-500">*</span> Konfirmasi Password
            </label>
            <input
              type="password"
              value={userpassword}
               onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Ulangi password"
              className="w-full px-4 py-2 mt-1 border border-gray-600 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Tombol */}
          <button
            type="submit" 
            className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-2 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Daftar Sekarang
          </button>
        </form>

        {/* Link ke Login */}
        <p className="mt-4 text-sm text-gray-400">
          Sudah punya akun?{" "}
          <a href="/login" className="text-orange-400 font-medium hover:underline">
            Masuk di sini
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
          <p className="text-lg text-gray-200 mt-2">🔥 Join the Brotherhood 🔥</p>
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
};

