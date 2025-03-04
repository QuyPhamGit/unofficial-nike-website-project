// Product data - replaces the PHP database
const products = [
  {
    id: 1,
    pro_name: "Nike-Air-Trainer-1-SP",
    pro_desc: "Made to take you places, the original cross trainer from '87 now lets you cross between uptown and downtown without a glitch.",
    pro_price: 3519000,
    pro_img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bca2ba20-3d0c-481b-b7a0-6cda4178b5ce/air-trainer-1-sp-shoes-6QJXK2.png",
    pro_cat: "Nike Shoe",
    pro_url: "product-detail/nike-air-trainer-1-sp.html",
  },
  {
    id: 2,
    pro_name: "Nike-Air-More-Up-tempo-96",
    pro_desc: "With '90s graffiti-styled graphics alongside visible Air cushioning, the Air More Uptempo '96 is all about off-court looks.",
    pro_price: 4999000,
    pro_img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e20b4bc-9a65-415d-88d6-dafbd743fff8/air-more-uptempo-96-shoes-tWJ7rk.png",
    pro_cat: "Nike Shoe",
    pro_url: "product-detail/nike-air-more-up-tempo-96.html",
  },
  {
    id: 3,
    pro_name: "Nike Air Max 90 SE",
    pro_desc: "Max Air changed the game in '87. Now, we honour its emerald anniversary (35 years!) with the Nike Air Max 90 SE.",
    pro_price: 3829000,
    pro_img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bddcdbff-904e-496e-9f61-ad1f82bd961c/air-max-90-se-shoes-j59HGz.png",
    pro_cat: "Nike Shoe",
    pro_url: "product-detail/nike-air-max-90-se.html",
  },
  {
    id: 4,
    pro_name: "Nike ZoomX Streakfly",
    pro_desc: "Our lightest racing shoe, made to help you chase personal bests from a 5K to a half marathon.",
    pro_price: 4109000,
    pro_img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4df8d49-9fe7-4a29-bf12-f4618086948f/zoomx-streakfly-road-racing-shoes-fC8c7Q.png",
    pro_cat: "Nike Shoe",
    pro_url: "product-detail/nike-zoomx-streakfly.html",
  },
  {
    id: 5,
    pro_name: "Nike Air Force 1 '07",
    pro_desc: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    pro_price: 3239000,
    pro_img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
    pro_cat: "Nike Shoe",
    pro_url: "product-detail/nike-air-force-1-07.html",
  }
];

// Initialize cart in localStorage if it doesn't exist
if (!localStorage.getItem('carts')) {
  localStorage.setItem('carts', JSON.stringify([]));
}

// Initialize products in localStorage
localStorage.setItem('products', JSON.stringify(products));