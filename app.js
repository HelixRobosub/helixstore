const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Custom Frame",
    price: 20,
    colors: [
      {
        code: "black",
        img: "./img/farme with.png",
      },
      {
        code: "darkblue",
        img: "./img/farme with.png",
      },
    ],
  },
  {
    id: 2,
    title: "Custom Glass Cup",
    price: 25,
    colors: [
      {
        code: "lightgray",
        img: "./img/glass cup with.png",
      },
      {
        code: "green",
        img: "./img/glass cup with.png",
      },
    ],
  },
  {
    id: 3,
    title: "Customize A Water Bottle",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./img/wallet with.png",
      },
      {
        code: "green",
        img: "./img/wallet with.png",
      },
    ],
  },
  {
    id: 4,
    title: "Custom Leather Wallet",
    price: 30,
    colors: [
      {
        code: "black",
        img: "./img/huh.png",
      },
      {
        code: "lightgray",
        img: "./img/huh.png",
      },
    ],
  },
  {
    id: 5,
    title: "Custom Leather Notebook",
    price: 25,
    colors: [
      {
        code: "gray",
        img: "./img/notebook with.png",
      },
      {
        code: "black",
        img: "./img/notebook with.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


