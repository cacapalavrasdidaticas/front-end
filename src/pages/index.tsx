import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Banner from "@/images/banner-1.jpg";
import Banner2 from "@/images/banner-2.jpg";
import Carousel from "@/components/carrosel/carrosel";
import CategoryButton from "@/components/category/CategoryButton";
import { categories } from "@/components/data/CategoryesImagesArray";
import { ProductData } from "@/interfaces/ProductData";
import Link from "next/link";
import { getAllProducts } from "./api/LIbraryApi";
import { BsFileEarmark, BsWindowDesktop } from "react-icons/bs";
import { TbDeviceDesktopStar } from "react-icons/tb";
const Home = () => {
  const [cards, setCards] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();

        const mappedProducts: ProductData[] = products.map((product: any) => ({
          id: product.id.toString(),
          title: product.nome_produto,
          description: product.descricao,
          price: parseFloat(product.valor),
          link: "/categories",
          // Junte as partes do array `fotos` em uma única string Base64
          imageSrc: `data:image/png;base64,${product.fotos.join("")}`,
          imageAlt: product.nome_produto,
          category: product.categoria,
        }));

        setCards(mappedProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-6">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
        <p className="mt-2 text-gray-500">Carregando...</p>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {/* Banner Carrossel */}
      <div className="w-full">
        <Slider {...sliderSettings}>
          <div>
            <Image
              className="w-full h-auto"
              src={Banner}
              alt="Banner 1"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              className="w-full h-auto"
              src={Banner2}
              alt="Banner 2"
              layout="responsive"
            />
          </div>
        </Slider>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 mt-20">
        <h2 className="text-black text-center font-jost text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Categorias
        </h2>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.path}>
              <CategoryButton
                name={category.name}
                path={category.path}
                imageSrc={category.image}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Differentiator Section */}
      <div className="flex flex-col items-center mt-20 space-y-4">
        <h2 className="text-black text-center font-jost text-5xl font-semibold mb-6">
          Diferencial
        </h2>
        <p className="text-center md:text-start text-xl pb-12 font-medium text-gray-500">
          Conheça o nosso diferencial das outras plataformas
        </p>

        {/* Differentiator Cards */}
        <div className="flex flex-wrap justify-center items-center gap-20 mt-6">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full p-4">
              <BsWindowDesktop className="text-white  text-4xl font-bold" />
            </div>
            <p className="text-black mt-6  text-lg font-semibold leading-normal text-center max-w-[350px]">
              Área de visualização exclusiva para acesso rápido e seguro às
              apostilas
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full p-4">
              <BsFileEarmark className="text-white  text-4xl font-bold" />
            </div>
            <p className="text-black mt-6 text-lg font-semibold leading-normal text-center max-w-[350px]">
              Entrega instantânea após pagamento, sem precisar aguardar
              liberação manual
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full p-4">
              <TbDeviceDesktopStar className="text-white  text-4xl font-bold" />
            </div>
            <p className="text-black mt-6 text-lg font-semibold leading-normal text-center max-w-[370px]">
              Plataforma intuitiva e moderna, que oferece uma experiência
              simples e profissional.
            </p>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="p-4 mt-40">
        <h2 className="text-black text-center font-jost text-5xl font-semibold mb-6">
          Mais Vendidos
        </h2>
        <div className="mx-auto px-4 sm:px-2 md:px-8 lg:px-20 xl:px-40">
          <Carousel cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Home;
