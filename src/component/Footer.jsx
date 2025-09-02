export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-0.5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {/* TAUTAN */}
        <div>
          <h3 className="text-lg font-semibold mb-3">TAUTAN</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-yellow-400">HOME</a></li>
            <li><a href="/produk" className="hover:text-yellow-400">PRODUCT</a></li>
            <li><a href="/about" className="hover:text-yellow-400">ABOUT</a></li>
          </ul>
        </div>

        {/* CORPORATE */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CORPORATE</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-yellow-400">ABOUT US</a></li>
            <li><a href="#" className="hover:text-yellow-400">YAMAHA EV</a></li>
            <li><a href="#" className="hover:text-yellow-400">HONDA BIGBIKE</a></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/produk" className="hover:text-yellow-400">MATIC</a></li>
            <li><a href="/produk" className="hover:text-yellow-400">SPORT</a></li>
            <li><a href="/produk" className="hover:text-yellow-400">CUB/MOPED</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">SERVICE</a></li>
            <li><a href="#" className="hover:text-yellow-400">YAMAHA APPS</a></li>
            <li><a href="#" className="hover:text-yellow-400">HONDA APPS</a></li>
          </ul>
        </div>

        {/* PARTS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">PARTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">YAMAHA & HONDA PARTS</a></li>
            <li><a href="#" className="hover:text-yellow-400">HELMET</a></li>
            <li><a href="#" className="hover:text-yellow-400">JAKET</a></li>
            <li><a href="#" className="hover:text-yellow-400">ACCESORIES</a></li>
          </ul>
        </div>

        {/* ACTIVITY */}
        <div>
          <h3 className="text-lg font-semibold mb-3">ACTIVITY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">NEWS & EVENT</a></li>
            <li><a href="#" className="hover:text-yellow-400">COMMUNITY</a></li>
          </ul>
        </div>
      </div>

      {/* Help Center */}
      <div className="mt-10 text-center">
        <p className="text-sm">
          📞 +62878 2540 0586
        </p>
        <p className="text-sm">
          📧 akbarhidayat0812@gmail.com
        </p>
      </div>

      {/* Address */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        <p>Public Legal</p>
        <p>© Copyright 2024, PT RD Motor</p>
      </div>
    </footer>
  );
}
