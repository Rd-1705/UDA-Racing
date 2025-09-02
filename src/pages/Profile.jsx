// import { useState, useEffect } from "react";

// export default function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser) {
//       setUser(currentUser);
//     }
//   }, []);

//   const handleUpdate = () => {
//     const allUsers = JSON.parse(localStorage.getItem("user")) || [];
//     const updatedUser = { ...user };
//     const newUsers = allUsers.map((u) =>
//       u.id === user.id ? updatedUser : u
//     );

//     localStorage.setItem("user", JSON.stringify(newUsers));
//     localStorage.setItem("currentUser", JSON.stringify(updatedUser));
//     alert("Profil berhasil diperbarui!");
//   };

//   const handleDelete = () => {
//     const allUsers = JSON.parse(localStorage.getItem("user")) || [];
//     const newUsers = allUsers.filter((u) => u.id !== user.id);

//     localStorage.setItem("user", JSON.stringify(newUsers));
//     localStorage.removeItem("currentUser");
//     alert("Akun dihapus!");
//     window.location.href = "/register"; // balik ke register
//   };

//   if (!user) return <p>Belum login...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6">Profil Saya</h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           value={user.username}
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//           className="w-full px-4 py-2 border rounded"
//         />
//         <input
//           type="email"
//           value={user.usergmail}
//           onChange={(e) => setUser({ ...user, usergmail: e.target.value })}
//           className="w-full px-4 py-2 border rounded"
//         />
//         <input
//           type="password"
//           value={user.userpass}
//           onChange={(e) => setUser({ ...user, userpass: e.target.value })}
//           className="w-full px-4 py-2 border rounded"
//         />

//         <div className="flex gap-4">
//           <button
//             onClick={handleUpdate}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Update
//           </button>
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Hapus Akun
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!user.username || user.username.length < 6) {
      newErrors.username = "Nama minimal 6 karakter!";
    }

    if (!user.userpass || user.userpass.length < 4) {
      newErrors.password = "Password minimal 4 karakter!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = () => {
    if (!validate()) return;

    const allUsers = JSON.parse(localStorage.getItem("user")) || [];
    const updatedUser = { ...user };
    const newUsers = allUsers.map((u) =>
      u.id === user.id ? updatedUser : u
    );

    localStorage.setItem("user", JSON.stringify(newUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    alert("Profil berhasil diperbarui!");
  };

  const handleDelete = () => {
    const allUsers = JSON.parse(localStorage.getItem("user")) || [];
    const newUsers = allUsers.filter((u) => u.id !== user.id);

    localStorage.setItem("user", JSON.stringify(newUsers));
    localStorage.removeItem("currentUser");
    alert("Akun dihapus!");
    window.location.href = "/register";
  };

  if (!user) return <p>Belum login...</p>;

  return (
    <div className="flex min-h-screen">
      {/* KIRI (Background dengan teks) */}
        <div className="w-1/2 relative flex items-center justify-center overflow-hidden h-screen">
        <img
            src="/logo.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl font-extrabold text-orange-400 drop-shadow-[0_0_15px_rgba(255,100,0,0.9)]">
            UDA RIDER RACING
            </h2>
            <p className="text-lg text-gray-200 mt-2">
            🔥 Speed, Power, Brotherhood 🔥
            </p>
        </div>
        </div>

      {/* KANAN (Form Profil) */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">
            Profil Saya
          </h2>

          <div className="space-y-4">
            {/* Username */}
            <div>
              <input
                type="text"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
                placeholder="Masukkan username anda"
                className="w-full px-4 py-2 border rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                value={user.usergmail}
                onChange={(e) =>
                  setUser({ ...user, usergmail: e.target.value })
                }
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={user.userpass}
                onChange={(e) =>
                  setUser({ ...user, userpass: e.target.value })
                }
                placeholder="Masukkan password anda"
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Tombol */}
            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="flex-1 bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600"
              >
                Hapus Akun
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
