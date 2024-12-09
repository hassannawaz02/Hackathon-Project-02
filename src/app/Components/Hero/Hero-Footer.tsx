export default function BrandShowcase() {
  return (
    <div className="w-full bg-black py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
        {/* Versace */}
        <div className="text-white text-2xl md:text-3xl font-serif tracking-wider">
          VERSACE
        </div>

        {/* Zara */}
        <div className="text-white text-2xl md:text-3xl font-serif tracking-widest">
          ZARA
        </div>

        {/* Gucci */}
        <div className="text-white text-2xl md:text-3xl font-serif">GUCCI</div>

        {/* Prada */}
        <div className="text-white text-2xl md:text-3xl font-bold tracking-wider">
          PRADA
        </div>

        {/* Calvin Klein */}
        <div className="text-white text-2xl md:text-3xl font-light">
          Calvin Klein
        </div>
      </div>
    </div>
  );
}
