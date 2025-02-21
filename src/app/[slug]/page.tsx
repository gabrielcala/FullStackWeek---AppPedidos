import { getRestaurantSlug } from "@/data/get-restaurant-slug";
import Image from "next/image";
import { notFound } from "next/navigation";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantSlug(slug);

  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/*Image - logo e titulo*/}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h3>{restaurant.name}</h3>
      </div>
      {/*BEM-VINDO*/}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          imageAlt="comer aqui"
          imageUrl="/dine_in.png"
          buttonText="Comer aqui"
        />

        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          imageAlt="para levar"
          imageUrl="/takeaway.png"
          buttonText="Para levar"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
