export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        {/* Başlık */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Hakkımızda
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 text-lg text-center mb-10">
          Lezzetli Yemekler, 2010 yılından beri sizlere en güzel tarifleri
          sunmak için kurulmuş bir yemek platformudur.
        </p>

        {/* Kartlar */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🍽️ Misyonumuz</h2>
            <p className="text-gray-600">
              Herkesin kolayca yapabileceği lezzetli tarifler sunmak.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🌍 Vizyonumuz</h2>
            <p className="text-gray-600">
              Türkiye’nin en büyük yemek platformlarından biri olmak.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">❤️ Değerlerimiz</h2>
            <p className="text-gray-600">
              Kalite, güven ve kullanıcı memnuniyeti.
            </p>
          </div>

        </div>

        {/* Alt Kısım */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Bizimle iletişime geçmek için her zaman hazırız.
          </p>          
        </div>

      </div>
    </div>
  );
}