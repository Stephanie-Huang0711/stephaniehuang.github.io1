
const products = [
    {
      title: "Computer Programming skills",
      author: "Proficiency with common front-end development languages and framework. ",
      price: "Languages: C++, C#, R, Javascript, HTML/CSS",
      image: "image1.png",
      isSof: true
    },
    {
      title: "Drawing, Modeling, and Simulation Skills",
      author: "Experience working with AutoCad, Fusion 360, SolidWorkds, and Pasco Capstone",
      price:"projects detail in the project/work experience session :)",
      image: "image 2.png",
      isSof: true
    },
    {
      title: "Microsoft Office Suite",
      author: "Excellent using Microsoft Office softwares to ensure a detail-oriented and organized work style.",
      price: "Literate in: Word, Excel, PowerPoint, Outlook, Teams... ",
      image: "image3.png",
      isSof: true
    },
    {
      title: "Laboratory Skills & Report Writing and Analysis",
      author: "Familiar with laboratory equipments and procedures",
      price:"Please check out the formal Statistics and Epidemics Studies Report in the Project section.",
      image:"image4.jpg",
      isSof: false
    },
    {
      title: "WHMIS Training Completed & CPR Certified",
      author: "All the certificates mentioned above are valid as of Spring 2025",
      price: "Expecting to obtain the Udemy Certificate on Complete Web Design: HTML, CSS, Javascript, Vue, React, Git by January 2025",
      image: "image5.svg",
      isSof: false
    },
    {
      title: "Tri-Lingual",
      author: "Passed DELF B2 Exam; Capable to read, write, and understand French.",
      price: "Fluent Mandarin Chinese; Excellent reading and writing skills with Traditional and Simplified Chinese.",
      image: "image6.webp",
      isSof: false
    }
  ]



  
  function populateProducts (productList){
    
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    productList.forEach(function(product,index){
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");
    
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "image for" + product.title;
        
    
        //create the product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("products-details");
    
    
        //create product title, author, price-title and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;
    
        let productAuthor = document.createElement("h4");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;
    
        let priceTitle = document.createElement("h4");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "";

        let productIsSof = document.createElement("p");
        productIsSof.classList.add("product-isSof");
        productIsSof.textContent = product.isSof == true? "Software Knowledge":"";
        
        let productPrice = document.createElement("h5");
        productPrice.classList.add("product-price");
        // // productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "free";
        productPrice.textContent = product.price;


        //append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        
        //add all child HTML elements of the product
        productElm.append(productImage);
        productElm.append(productDetails);
        productElm.append(priceTitle);
        productElm.append(productPrice);
        productElm.append(productIsSof);
        
        productsSection.append(productElm);
    
    });
}

function productsHandler(){

    let freeProducts = products.filter( item => item.isSof == true);

    let paidProducts = products.filter(item => item.isSof == false);
    
    
populateProducts(products);

document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

let productsFilter = document.querySelector(".products-filter");
productsFilter.addEventListener("click",function(e){
    if (e.target.id === "all"){
        populateProducts(products);
    } else if (e.target.id === "paid"){
        populateProducts(paidProducts);
    }else if (e.target.id === "free"){
        populateProducts(freeProducts);
    }
});


}
productsHandler();

