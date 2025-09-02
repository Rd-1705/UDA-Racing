export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Isi */}
      <main className="container mx-auto px-6 py-12 space-y-12 text-center">
        {/* Awal */}
        <section>
          <p className="text-lg leading-relaxed">
            Sepeda motor kini bukan hanya menjadi sarana transportasi produktif bagi masyarakat
            Indonesia. Sepeda motor sudah menjadi bagian dari hobi dan gaya hidup, bahkan bisa
            mengantarkan pada prestasi tertentu yang membanggakan. Untuk menemani masyarakat
            beraktivitas dan menggapai beragam mimpinya, UDA Racing menghadirkan solusi mobilitas
            bagi masyarakat dengan produk dan layanan terbaik.
          </p>
        </section>

        {/* Misi */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Misi</h2>
          <p className="mb-4">
            Sejak pendiri kami, Zulhendra, mendirikan usaha UDA Racing pada tahun 2019,
            misi kami adalah untuk memberikan KANDO kepada SEMUA pelanggan kami.
          </p>
          <img
            src="/mission-1.jpg"
            alt="Misi UDA Racing"
            className="rounded-xl shadow-md mx-auto mb-4"
          />
          <p>
            KANDO adalah istilah Jepang untuk menggambarkan perasaan kepuasan dan kegembiraan
            yang luar biasa yang dirasakan seseorang ketika memiliki sesuatu dengan nilai,
            kualitas, dan kinerja yang luar biasa. Produk dan layanan kami telah dirancang dan
            dikembangkan oleh orang-orang yang benar-benar mencintai pekerjaan mereka.
          </p>
        </section>

        {/* Sejarah */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sejarah</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Tahun 2019</h3>
              <p>
                UDA Racing merupakan usaha jual beli sepeda motor di Indonesia. Didirikan pada
                11 Juni 2019 oleh Zulhendra yang akrap di panggil Pak Zul/Pak Jul. Saat itu
                awal nama usaha RPJ Motor. Jumlah motor pada tahun pertama selama satu tahun
                hanya 10 unit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Tahun 2021</h3>
              <p>
                Pada tahun 2019 RPJ Motor masih berlokasikan di halaman rumah pendiri usaha.
                Dua tahun kemudian, bertepatan tahun 2021 RPJ Motor berganti nama menjadi RD
                Motor dan membuka cabang pertama. Total motor bertambah menjadi 50 unit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Tahun 2022 - Sekarang</h3>
              <p>
                UDA Racing kini dipercaya pelanggan dengan kualitas produk sepeda motor. Tahun
                2023 mulai menjual motor high volume pertama CBR150R. Hingga kini menjual
                big bike seperti Honda Rebel 500cc, dengan total 200 unit dan terjual 100 unit.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
