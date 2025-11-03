// src/data/products.ts

export const productData = [
  {
    id: 1,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    shortName: "XX99 MK II",
    image: {
      mobile: "/assets/products/xx99-mark-two/mobile/image-product.jpg",
      tablet: "/assets/products/xx99-mark-two/tablet/image-product.jpg",
      desktop: "/assets/products/xx99-mark-two/desktop/image-product.jpg",
    },
    category: "headphones",
    categoryImage: {
      mobile: "/assets/products/xx99-mark-two/mobile/image-category-page.jpg",
      tablet: "/assets/products/xx99-mark-two/tablet/image-category-page.jpg",
      desktop: "/assets/products/xx99-mark-two/desktop/image-category-page.jpg",
    },
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium memory foam ear cups, you can experience demonstration-quality audio in comfort. Added details include aluminum construction, a durable carrying case, and a 3.5mm cable that connects to audio players...\n\nThese headphones have been tuned to animate your audio experience with immersive lows and exceptional detail. With neodymium magnets and patented drivers, the XX99 Mark II provides tonal balance with superb bass response and precise treble.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/xx99-mark-two/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/xx99-mark-two/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/xx99-mark-two/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/xx99-mark-two/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/xx99-mark-two/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/xx99-mark-two/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/xx99-mark-two/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/xx99-mark-two/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/xx99-mark-two/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    shortName: "XX99 MK I",
    image: {
      mobile: "/assets/products/xx99-mark-one/mobile/image-product.jpg",
      tablet: "/assets/products/xx99-mark-one/tablet/image-product.jpg",
      desktop: "/assets/products/xx99-mark-one/desktop/image-product.jpg",
    },
    category: "headphones",
    categoryImage: {
      mobile: "/assets/products/xx99-mark-one/mobile/image-category-page.jpg",
      tablet: "/assets/products/xx99-mark-one/tablet/image-category-page.jpg",
      desktop: "/assets/products/xx99-mark-one/desktop/image-category-page.jpg",
    },
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the original XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability tough enough for use in the studio or on the go.\n\nType here.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/xx99-mark-one/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/xx99-mark-one/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/xx99-mark-one/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/xx99-mark-one/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/xx99-mark-one/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/xx99-mark-one/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/xx99-mark-one/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/xx99-mark-one/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/xx99-mark-one/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
    ],
  },
  {
    id: 3,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    shortName: "XX59",
    image: {
      mobile: "/assets/products/xx59/mobile/image-product.jpg",
      tablet: "/assets/products/xx59/tablet/image-product.jpg",
      desktop: "/assets/products/xx59/desktop/image-product.jpg",
    },
    category: "headphones",
    categoryImage: {
      mobile: "/assets/products/xx59/mobile/image-category-page.jpg",
      tablet: "/assets/products/xx59/tablet/image-category-page.jpg",
      desktop: "/assets/products/xx59/desktop/image-category-page.jpg",
    },
    new: false,
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than just a pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch controls on the ear cups.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/xx59/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/xx59/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/xx59/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/xx59/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/xx59/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/xx59/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/xx59/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/xx59/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/xx59/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
    ],
  },
  {
    id: 4,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    shortName: "ZX9",
    image: {
      mobile: "/assets/products/zx9-speaker/mobile/image-product.jpg",
      tablet: "/assets/products/zx9-speaker/tablet/image-product.jpg",
      desktop: "/assets/products/zx9-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile: "/assets/products/zx9-speaker/mobile/image-category-page.jpg",
      tablet: "/assets/products/zx9-speaker/tablet/image-category-page.jpg",
      desktop: "/assets/products/zx9-speaker/desktop/image-category-page.jpg",
    },
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved Bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nThe ZX9 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "10ft optical cable" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/zx9-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/zx9-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/zx9-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/zx9-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/zx9-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/zx9-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/zx9-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/zx9-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/zx9-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx7-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    shortName: "ZX7",
    image: {
      mobile: "/assets/products/zx7-speaker/mobile/image-product.jpg",
      tablet: "/assets/products/zx7-speaker/tablet/image-product.jpg",
      desktop: "/assets/products/zx7-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile: "/assets/products/zx7-speaker/mobile/image-category-page.jpg",
      tablet: "/assets/products/zx7-speaker/tablet/image-category-page.jpg",
      desktop: "/assets/products/zx7-speaker/desktop/image-category-page.jpg",
    },
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the pinnacle of acoustic reproduction.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique sound profile ensuring distortion is kept to a minimum.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/zx7-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/zx7-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/zx7-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/zx7-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/zx7-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/zx7-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/zx7-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/zx7-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/zx7-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
  {
    id: 6,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    shortName: "YX1",
    image: {
      mobile: "/assets/products/yx1-earphones/mobile/image-product.jpg",
      tablet: "/assets/products/yx1-earphones/tablet/image-product.jpg",
      desktop: "/assets/products/yx1-earphones/desktop/image-product.jpg",
    },
    category: "earphones",
    categoryImage: {
      mobile: "/assets/products/yx1-earphones/mobile/image-category-page.jpg",
      tablet: "/assets/products/yx1-earphones/tablet/image-category-page.jpg",
      desktop: "/assets/products/yx1-earphones/desktop/image-category-page.jpg",
    },
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience immersive sound with new hybrid active noise cancellation technology. Back-flow venting uses the existing design of the ear canal to return sound structures to the inner ear and improve audio efficiency. This means better sound quality and better noise cancellation.\n\nThe YX1 Wireless Earphones has additional advanced features including customizable controls for listening standards, access to global radio stations, and fully integrated language settings. This ensures you’ll retain control of your listening experience at all times.",
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" },
    ],
    gallery: {
      first: {
        mobile: "/assets/products/yx1-earphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/products/yx1-earphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/products/yx1-earphones/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/products/yx1-earphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/products/yx1-earphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/products/yx1-earphones/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/products/yx1-earphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/products/yx1-earphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/products/yx1-earphones/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
    ],
  },
];

// We also define the 'type' for a product, which helps TypeScript
// understand our data structure.
export type Product = (typeof productData)[0];