// nav background
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})


// Read More btn 
document.getElementById('read-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    var additionalContent = document.getElementById('additional-content');
    if (additionalContent.classList.contains('hidden')) {
      additionalContent.classList.remove('hidden');
      this.textContent = 'Read Less';
    } else {
      additionalContent.classList.add('hidden');
      this.textContent = 'Read More';
    }
    // Move the button below the expanded content
    if (this.classList.contains('expanded')) {
      this.classList.remove('expanded');
      additionalContent.insertAdjacentElement('afterend', this);
    } else {
      this.classList.add('expanded');
    }
  });

//   post description 

$(document).ready(function() {
    $(".post-description").click(function() {
        $(this).toggleClass("hidden1");
        $(this).next(".post-full-description").toggleClass("hidden1");
    });
});


  
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        }else{
            $(".post-box")
                .not("." + value)
                .hide(2000);
            $(".post-box")
            .filter("." + value)
            .show("2000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
  

// $(document).ready(function () {
//     $(".filter-item").click(function () {
//         const value = $(this).attr("data-filter");
//         $(".post-box").hide(); // Hide all post-box elements initially
//         if (value == "all") {
//             $(".post-box").show("1000"); // Show all post-box elements if "All" is clicked
//         } else {
//             $("." + value).show("2000"); // Show only the post-box elements belonging to the clicked category
//         }
//         $(this).addClass("active-filter").siblings().removeClass("active-filter");
//     });
// });
