import Image from "next/image";
import ProductCard from "@/components/ProductCard";
const imagenproducto = "/image-product-mobile.jpg";

export default function Home() {
  const products = [
    {
        "createdAt": "2026-05-03T22:27:36.243Z",
        "title": "Sérum Facial de Vitamina C",
        "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736855753-captura-de-pantalla-2025-01-14-125948-678650ba92a79.png?crop=0.958xw:1.00xh;0.0110xw,0&resize=980:*",
        "category": "Cuidado Facial",
        "description": "Potente concentrado antioxidante que ilumina la piel y reduce visiblemente las líneas de expresión",
        "newPrice": "435.83",
        "oldPrice": "570.70",
        "id": "1"
    },
    {
        "createdAt": "2026-05-03T13:13:04.866Z",
        "title": "Mascarilla Capilar de Argán",
        "image": "https://ncsltda.com/wp-content/uploads/2023/03/mascarilla-capilar-argan-nueva.jpg",
        "category": "Cuidado del Cabello",
        "description": "Tratamiento intensivo para hidratar profundamente y reparar las puntas abiertas de cabellos dañados",
        "newPrice": "905",
        "oldPrice": "967.79",
        "id": "2"
    },
    {
        "createdAt": "2026-05-03T08:23:01.895Z",
        "title": "Protector Solar Invisible SPF 50",
        "image": "https://img.nivea.com/-/media/miscellaneous/media-center-items/c/1/1/fda44690d9624c1eb535fb79092cf65f-web_1010x1180_transparent_png.png",
        "category": "Protección Solar",
        "description": "Fórmula ligera de amplio espectro que no deja residuos blancos, ideal para uso diario bajo el maquillaje",
        "newPrice": "112.29",
        "oldPrice": "195.59",
        "id": "3"
    },
    {
        "createdAt": "2026-05-03T07:56:36.859Z",
        "title": "Perfume Floral de Orquídeas",
        "image": "https://editorialtelevisa.brightspotcdn.com/dims4/default/354a01f/2147483647/strip/true/crop/1194x672+3+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F2c%2F10%2F472b50aa48f8b0bb46953dcbb541%2Fperfumes-de-mujer-notas-de-orquidea-2024-3.jpg",
        "category": "Fragancias",
        "description": "Eau de parfum con notas de base amaderadas y un corazón de flores exóticas de larga duración",
        "newPrice": "482.39",
        "oldPrice": "535.95",
        "id": "4"
    },
    {
        "createdAt": "2026-05-03T05:36:04.724Z",
        "title": "Exfoliante Corporal de Café",
        "image": "https://xianzhu.pe/wp-content/uploads/2025/07/JS06-H.jpg",
        "category": "Cuidado Corporal",
        "description": "Mezcla natural de granos de café y aceites esenciales que estimula la circulación y suaviza la piel",
        "newPrice": "159.39",
        "oldPrice": "209.09",
        "id": "5"
    },
    {
        "createdAt": "2026-05-03T00:38:35.968Z",
        "title": "Base de Maquillaje Hidratante",
        "image": "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/01/06/15783300805251.jpg",
        "category": "Maquillaje",
        "description": "Cobertura media con acabado luminoso enriquecida con ácido hialurónico para pieles secas",
        "newPrice": "171.65",
        "oldPrice": "174.05",
        "id": "6"
    },
    {
        "createdAt": "2026-05-03T16:27:38.633Z",
        "title": "Jabón Artesanal de Avena",
        "image": "https://mejorconsalud.as.com/wp-content/uploads/2017/10/jabon-artesanal-avena.jpg",
        "category": "Higiene Personal",
        "description": "Barra limpiadora calmante diseñada especialmente para pieles sensibles y propensas a irritaciones",
        "newPrice": "171.59",
        "oldPrice": "180.21",
        "id": "7"
    },
    {
        "createdAt": "2026-05-03T19:31:21.699Z",
        "title": "Suplemento de Colágeno Marino",
        "image": "https://cdnx.jumpseller.com/mis-vitaminas/image/73278236/Colageno_Marino_hidrolizado_con_Magnesio_mis_vitaminas_producto.webp?1771006926",
        "category": "Nutricosmética",
        "description": "Cápsulas de alta biodisponibilidad que fortalecen las uñas, el cabello y mejoran la elasticidad de la dermis",
        "newPrice": "662.09",
        "oldPrice": "731.69",
        "id": "8"
    },
    {
        "createdAt": "2026-05-03T05:11:28.214Z",
        "title": "Contorno de Ojos de Cafeína",
        "image": "https://theordinary.es/wp-content/uploads/2020/12/the-ordinary-caffeine-solution-5-egcg-contorno-de-ojos-1024x1024.webp",
        "category": "Cuidado Especializado",
        "description": "Gel refrescante que reduce instantáneamente la hinchazón y las ojeras tras una noche de poco descanso",
        "newPrice": "346.09",
        "oldPrice": "374.89",
        "id": "9"
    },
    {
        "createdAt": "2026-05-03T17:53:03.849Z",
        "title": "Esmalte de Uñas Vegano",
        "image": "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2022/02/02/16438165508043.jpg",
        "category": "Manicura",
        "description": "Color intenso de secado rápido libre de químicos tóxicos y con acabado profesional tipo gel",
        "newPrice": "876.90",
        "oldPrice": "470.60",
        "id": "10"
    }
];

  return (
    <div>
      <main className="main">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </main>
    </div>
  );
}
