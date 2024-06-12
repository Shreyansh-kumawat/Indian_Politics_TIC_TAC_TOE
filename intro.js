let modi_smile= document.querySelector(".modi_1");
let rahul_smile = document.querySelector(".rahul_1");
let second_id = document.querySelector(".p2_img");


rahul_smile.addEventListener("mouseover", () => {
    console.log("Rahul Smiled");
    rahul_smile.style.backgroundImage = "url('images/smilerahul.jpg')";
    rahul_smile.style.backgroundSize = "cover";
    second_id.style.backgroundImage = "url('images/smileModi.jpg')";
});

rahul_smile.addEventListener("mouseout", () => {
console.log("Rahul Normal");
rahul_smile.style.backgroundImage = "url('images/image2.jpg')";
rahul_smile.style.backgroundSize = "cover";
second_id.style.backgroundImage = "url('images/the_paper.jpg')";

});



modi_smile.addEventListener("mouseover", () => {
    console.log("Modi Smiled");
    modi_smile.style.backgroundImage = "url('images/smileModi.jpg')";
    modi_smile.style.backgroundSize = "cover";
    second_id.style.backgroundImage = "url('images/smilerahul.jpg')";
});

modi_smile.addEventListener("mouseout", () => {
console.log("Modi normal");
modi_smile.style.backgroundImage = "url('images/image1.jpg')";
modi_smile.style.backgroundSize = "cover";
second_id.style.backgroundImage = "url('images/the_paper.jpg')";
});

