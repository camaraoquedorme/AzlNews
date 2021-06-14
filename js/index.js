const inner_list = $(".carousel>.carousel-inner");

inner_list.each(function () {

  const img_list = $(this).find(".carousel-item>img");

  let rate = 0;

  img_list.each(function () {

    if (this instanceof HTMLImageElement) {

      rate += this.height / this.width;

    }

  })

  rate = rate / img_list.length;

  img_list.each(function () {

    this.height = rate * this.width;

    // this.setAttribute("height", 10);

  })

})

// const carousel_img_array = $(".carousel>.carousel-inner>.carousel-item>img");

// carousel_img_array

// carousel_img_array.each(function () {

//   console.log(this);

//   // console.log(img);

// })

// console.log(carousel_img_array);


// console.log(demo_img_array);