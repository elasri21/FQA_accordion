// get elemets
let questions = Array.from(document.querySelectorAll("div.qu"));
let answers = Array.from(document.querySelectorAll("div.an"));

questions.forEach(qu => {
    qu.addEventListener("click", function() {
        for (let i = 0; i < questions.length; i++)
        {
            questions[i].classList.remove("clicked");
        }
        qu.nextElementSibling
        answers.forEach(an => an.classList.remove("shown"));
        this.classList.add("clicked");
        this.nextElementSibling.classList.add("shown");
    });
});