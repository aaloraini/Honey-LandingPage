export interface HoneyVariant {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  price: string;
  weight: string;
  imagePath: string;
  imagePlaceholderColor: string;
  colors: {
    background: string;
    accent: string;
    text: string;
    textMuted: string;
    shadow: string;
  };
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const variants: HoneyVariant[] = [
  {
    id: "flowers",
    name: "Flowers Honey",
    tagline: "Gathered from the wildflower meadows of Southern Russia",
    headline: "Uncompromised Liquid Gold,\nReserved for You",
    description:
      "Not just honey, but nature's most pristine masterpiece. Foraged from the deep Russian wilderness and completely untouched, this 250g jar brings the pure essence of luxury directly to your table.",
    price: "300 AED",
    weight: "250g",
    imagePath: `${base}/images/jar-flowers.png`,
    imagePlaceholderColor: "#F4C842",
    colors: {
      background: "#FDF6E3",
      accent: "#C8860A",
      text: "#1A120B",
      textMuted: "#6B5744",
      shadow: "rgba(200, 134, 10, 0.25)",
    },
  },
  {
    id: "forest",
    name: "Forest Honey",
    tagline: "Harvested beneath the ancient canopy of the Siberian taiga",
    headline: "Uncompromised Liquid Gold,\nReserved for You",
    description:
      "Not just honey, but nature's most pristine masterpiece. Foraged from the deep Russian wilderness and completely untouched, this 250g jar brings the pure essence of luxury directly to your table.",
    price: "300 AED",
    weight: "250g",
    imagePath: `${base}/images/jar-forest.png`,
    imagePlaceholderColor: "#7B4F2E",
    colors: {
      background: "#1C2B1F",
      accent: "#A8C08A",
      text: "#F0EBE1",
      textMuted: "#9BAF93",
      shadow: "rgba(0, 0, 0, 0.45)",
    },
  },
];

export const VARIANT_COUNT = variants.length;
