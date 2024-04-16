document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    function openPopup() {
        popupOverlay.style.display = 'block';
    }
    function closePopupFunc()  {
        popupOverlay.style.display = 'none';
        document.body.classList.add('animate')
    }
  openPopup();
    closePopup.addEventListener('click', closePopupFunc);
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });
});

function agree() {
    popupOverlay.style.display = 'none';
    document.body.classList.add('animate')
}
let numStars = 200;

function getRandom(){
    let stars = document.getElementById("header");
    let x = stars.offsetHeight;
    let y = stars.offsetWidth;
    let randX = Math.floor(Math.random() * x);
    let randY = Math.floor(Math.random() * y);
    return [randX, randY];
}
function stars() {
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        let coords = getRandom();
        star.style.top = coords[0] + "px";
        star.style.left = coords[1] + "px";
        document.getElementById("header").appendChild(star);
    }
}
function hideStars(){
    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.opacity="0";
    }
}
function showStars(){
    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.transition="0.5s";
        stars[i].style.opacity="1";
    }
}
stars();


const characters = [
    {
    name: "Anakin Skywalker",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa85bab7-c56d-4219-9286-09fafbde5c21/deo7w4x-dbae2039-5327-4186-9ee9-eaaf529798b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhODViYWI3LWM1NmQtNDIxOS05Mjg2LTA5ZmFmYmRlNWMyMVwvZGVvN3c0eC1kYmFlMjAzOS01MzI3LTQxODYtOWVlOS1lYWFmNTI5Nzk4YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4Ce0-dGhrz9sPgqF7ZnXr0bFscrHzfQ1RoLQXXyGzR0",
    bio: "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi," +
        " Anakin Skywalker had the potential to become one of the most powerful Jedi ever." +
        " Some even believed he was the prophesied Chosen One who would bring balance to the Force." +
        " Always pushing the limits of his Jedi training," +
        " seeking to excel and live up to his reputation," +
        " Skywalker's passion often brought him into conflict with his mentor," +
        " Jedi Master Obi-Wan Kenobi. A hero of the Clone Wars," +
        " Anakin was caring and compassionate," +
        " but suffered from a deep fear of loss that would prove to be his downfall. "
    },
    {
     name: "Obi-Wan Kenobi",
     img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c361645-11b7-4abc-8219-1d7a2882801e/dds2ge0-32e7c0d2-0438-497b-b7a6-281fff1912cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjMzYxNjQ1LTExYjctNGFiYy04MjE5LTFkN2EyODgyODAxZVwvZGRzMmdlMC0zMmU3YzBkMi0wNDM4LTQ5N2ItYjdhNi0yODFmZmYxOTEyY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lUE4WkoieUmHUDNFb06nJlE7Y3KIuqIVGb3j4SQxGtk",
     bio: "Obi-Wan Kenobi, a legendary Jedi Master, " +
         "played a significant role in the fate of the galaxy during the waning days of the Galactic Republic." +
         " He was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker," +
         " served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor." +
         " Kenobi is most known for his wisdom, martial skills, and his keen wit. His life was filled with dramatic turns," +
         " including epic duels, tragic losses, and victories that would bring hope to the galaxy.",
    },
    {
        name: "Padmé Amidala",
        img: "https://clipart-library.com/newhp/star-wars-padme-amidala-icon-png-clipart-image-iconbugcom-padme-amidala-png-256_256.png",
        bio: "Padmé Amidala was a courageous, hopeful leader," +
            " serving as Queen and then Senator of Naboo -- and was also handy with a blaster." +
            " Despite her ideals and all she did for the cause of peace," +
            " her secret, forbidden marriage to Jedi Anakin Skywalker would prove to have dire consequences for the galaxy."
    },
    {
        name: "Palpatine",
        img: "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/Senator-Palpatine-icon.png",
        bio: "The dark side of the Force is a pathway to many abilities some consider to be unnatural, " +
            "and Sheev Palpatine is the most infamous follower of its doctrines. " +
            "Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. " +
            "Living a double life, he was also Palpatine, a Naboo Senator and phantom menace. " +
            "He manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- " +
            "and eventually Emperor – and ruled the galaxy through fear and tyranny. " +
            "The galaxy rejoiced when he died at the Battle of Endor, but Sidious had cheated death and patiently plotted a return to power."
    },
    {
        name: "General Grievous",
        img: "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/General-Grievous-icon.png",
        bio: "A cyborg Kaleesh general, " +
            "Grievous was trained in the art of lightsaber combat by Count Dooku himself. " +
            "But the cyborg general would become far more threatening than his master. " +
            "He would become a feared Jedi hunter, " +
            "known for his ruthlessness and hacking cough. " +
            "His body itself was a weapon, allowing him lightning quick strikes and devastating blows. " +
            "But it was his cold, calculating nature that made him such a threat."
    }
];

const charName = document.getElementById("CharacterName");
const charInfo = document.getElementById("CharacterInfo");
const charImg = document.getElementById("charImg");

const updateCharacter = (character) =>{
    charName.textContent = character.name;
    charInfo.textContent = character.bio;
    charImg.src = character.img;
};

function showCharacter(character) {
    event.preventDefault();
    switch (character) {
        case "Anakin":
            updateCharacter(characters[0]);
            break;
        case "Obi-Wan":
            updateCharacter(characters[1]);
            break;
        case "Padme":
            updateCharacter(characters[2]);
            break;
        case "Palpatine":
            updateCharacter(characters[3]);
            break;
        case "General Grievous":
            updateCharacter(characters[4]);
            break;
    }
}

window.onscroll = function() {scrollFun();}

function scrollFun(){
    let logo = document.getElementById("logo");
    let title = document.getElementById("title");
    let header = document.getElementById("header");
    let blueText = document.getElementById("blueText");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        logo.style.marginLeft = "0";
        logo.style.height = "5.5vw";
        logo.style.top = "1vw";
        logo.style.paddingLeft = "4vw";
        title.style.position = "relative";
        title.style.top = "-1.5vw";
        logo.style.animation= "none !important";
        title.style.animation= "none !important";
        blueText.style.animation ="none !important";
        document.getElementById("empty").style.height = "8vw";
        hideStars();
    } else {
        logo.style.marginLeft = "auto";
        logo.style.height = "15vw";
        logo.style.top = "0";
        logo.style.paddingLeft = "0";
        title.style.top = "10vw";
        title.style.position = "static";
        header.style.top = "0";
        header.style.width = "100%";
        blueText.style.animation ="none !important";
        document.getElementById("empty").style.height = "0";
        showStars();

    }
}