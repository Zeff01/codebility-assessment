export interface GiftCardBrand {
  id: number;
  name: string;
  logo: string;
  cashbackPercent: number;
}

export const giftCardBrands: GiftCardBrand[] = [
  {
    id: 1,
    name: 'PetSmart',
    logo: '/brands/petsmart.jpg',
    cashbackPercent: 5,
  },
  {
    id: 2,
    name: 'DoorDash',
    logo: '/brands/doordash.jpg',
    cashbackPercent: 3.5,
  },
  {
    id: 3,
    name: 'Walmart Canada',
    logo: '/brands/walmart.png',
    cashbackPercent: 2,
  },
  {
    id: 4,
    name: 'Starbucks',
    logo: '/brands/starbucks.png',
    cashbackPercent: 7,
  },
  {
    id: 5,
    name: 'Wayfair',
    logo: '/brands/wayfair.png',
    cashbackPercent: 4,
  },
  {
    id: 6,
    name: 'Esso and Mobil',
    logo: '/brands/essomobil.jpg',
    cashbackPercent: 2.5,
  },
  {
    id: 7,
    name: 'Amazon.ca',
    logo: '/brands/amazon.jpg',
    cashbackPercent: 2,
  },
];

// Helper function to transform gift card brands data for HoverEffect
export const getHoverEffectItems = () => {
  return giftCardBrands.map((brand) => ({
    title: brand.name,
    description: `${brand.cashbackPercent}% cashback on every purchase`,
    link: `/gift-cards/${brand.name.toLowerCase().replace(/ /g, '-')}`,
    image: brand.logo,
  }));
};
