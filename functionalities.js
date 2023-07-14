// adding toggel effect and hide the overflow of the page

let toggeling = false;
document.querySelector('.bars').addEventListener('click', controlTheMenu);
function controlTheMenu() {

    toggeling = !toggeling;
    if (toggeling == true) {
        document.querySelector('.header').classList.add('show');
        document.querySelector('.parentDiv').classList.add('blurredHomeSection');
        document.querySelector("body").style.overflow='hidden';

    }
    else if (toggeling == false) {
        document.querySelector('.header').classList.remove("show");
        document.querySelector('.parentDiv').classList.remove('blurredHomeSection');
        document.querySelector("body").style.overflow='auto';
    }
}

var menuItems=Array.from(document.querySelectorAll('.para1'));
menuItems.forEach(item=>{
    item.addEventListener('click',enableOverflow);
    function enableOverflow() {
        document.querySelector("body").style.overflow='auto';
        document.querySelector(".header").classList.remove('show');
        document.querySelector('.parentDiv').classList.remove('blurredHomeSection');
    }
})


// Dark Mode


document.querySelector('.switchBox').addEventListener('click', TheSwitch);
function TheSwitch() {

    var elements = ["body", ".bars", ".header", ".submitBtn", 'footer']
    var newClasses = ["backgroundColor", "mainColor", 'navigationBar', "theFooter", "theFooter"]




    var selecting = document.querySelector('.darkMode')
    var sunIcon = document.querySelector('.sun')
    var moonIcon = document.querySelector('.moon')

    selecting.classList.toggle('darkModeEffect')

    for (var i = 0; i < elements.length; i++) {
        for (var j = 0; j < newClasses.length; j++) {
            document.querySelector(elements[i]).classList.toggle(newClasses[j], selecting.classList.contains('darkModeEffect'))
            newClasses.shift()
            break
        }
    }
    var elements_2 = ["h1", "p", "a", "hr"]
    var newClasses_2 = ["mainColor", "pAndLink", "pAndLink", 'hrow']

    for (var x = 0; x < elements_2.length; x++) {
        var changes = (document.querySelectorAll(elements_2[x]))
        for (var y = 0; y < newClasses_2.length; y++) {
            for (var z = 0; z < changes.length; z++) {
                (changes[z]).classList.toggle(newClasses_2[y], selecting.classList.contains('darkModeEffect'))

            }
            newClasses_2.shift()
            break
        }
    }



    if (selecting.classList.contains('darkModeEffect')) {
        sunIcon.style.display = 'none'
        moonIcon.style.display = 'inline-block'
        document.documentElement.style.setProperty('--colorTheme', "#F6C90E")
        document.documentElement.style.setProperty('--darkTheme2', "#C39D00")
        document.querySelector('.astro').setAttribute('src', "images/Cross-platform software-pana (2).png")

    }
    else if (!selecting.classList.contains('.darkModeEffect')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block'
        document.documentElement.style.setProperty('--colorTheme', "#3F0071")
        document.documentElement.style.setProperty('--darkTheme2', "#A31ACB")
        document.querySelector('.astro').setAttribute('src', "images/Cross-platform software-pana (1).png")
    }



}


// typing animation

var myIdentity = ["Programmer", "web developer", "web designer", "freelancer"];
var animationDelay = 100;
var eraseAnimation = 200;
var nextAnimationDelay = 500;
var arrayElementsIndex = 0;
var characterIndex = 0;

function startAnimation() {
    if (characterIndex < myIdentity[arrayElementsIndex].length) {
        document.querySelector('.text').textContent += myIdentity[arrayElementsIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(startAnimation, animationDelay);
    }
    else {
        setTimeout(eraseAndNextAnimation, eraseAnimation + 200);
    }
}

function eraseAndNextAnimation() {
    if (characterIndex > 0) {
        document.querySelector('.text').textContent = myIdentity[arrayElementsIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(eraseAndNextAnimation, animationDelay)
    }
    else {
        arrayElementsIndex++;
        if (arrayElementsIndex >= myIdentity.length) {
            arrayElementsIndex = 0;
        }
        setTimeout(startAnimation, nextAnimationDelay)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(startAnimation, nextAnimationDelay + 500)
})

// scroll button

document.querySelector('.contianerForEffect').addEventListener('click', scrollDown)
function scrollDown() {

    var ClassList = Array.from(document.querySelector('.header').classList);
    if (ClassList.includes('show')) {
        return
    }
    else {
        document.querySelector("#about_sec").scrollIntoView();
    }


}

// About Section 

const arrayOfElementToObserve = ["fstChildElement", "scndChildElement"];
arrayOfElementToObserve.forEach(el => {
    const elementToObserve = document.querySelectorAll("." + el);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('Effect', entry.isIntersecting);
            entry.target.classList.toggle(el, !entry.isIntersecting);

            if (entry.isIntersecting) {
                observer.unobserve(entry.target);

            }
        })
    });
    elementToObserve.forEach(element => {
        observer.observe(element)
    })
})

// Skills Section


var i = 0;
var l = 0;
var j = 0;
const sameCount = ["HTMLper", 'CSSper', 'bootstrapper'];
const diffirentCount = ["figmaper", "photoshopper", 'Javascriptper'];
const widthProgress = ["--wiDth", "--wIdth", "--Width"]
const counts = [80]
const anotherCounts = [70, 50, 75];
const observeThis = ["progress", "skillsList"];

observeThis.forEach(element => {
    const theElement = document.querySelector('.' + element);
    const applayIntersetionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            entry.target.classList.toggle('skillsEffect', entry.isIntersecting);
            if (entry.isIntersecting) {
                applayIntersetionObserver.unobserve(entry.target);
                setInterval(percentageCount, 100)
            }
        })
    })
    applayIntersetionObserver.observe(theElement)

})


function percentageCount() {
    sameCount.forEach(element => {
        while (i < counts[0] + 1) {
            document.querySelector('.' + element).textContent = i + "%";
            document.documentElement.style.setProperty("--width", i + "%")
            i += 1;
            break

        }
    })

    diffirentCount.forEach(function (element, index) {
        var getCount = anotherCounts[index];
        while (l < getCount + 5) {
            document.querySelector('.' + element).textContent = l + '%';
            l++
            break
        }
    })

    widthProgress.forEach(function (Element, Index) {
        var widthEndPoint = anotherCounts[Index];
        while (j < widthEndPoint + 5) {
            document.documentElement.style.setProperty(Element, j + '%')
            j++
            break
        }
    })

}
// Portfolio section

const observePortfolioSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('portfolioEffect', entry.isIntersecting)
        if (entry.isIntersecting) {
            observePortfolioSection.unobserve(entry.target)
        }
    })
})
observePortfolioSection.observe(document.querySelector('.portfolio'))

// Contact section

var inputTags = document.querySelectorAll('.inputs')
var toTheTop = document.querySelectorAll('.userinfo');
var toArray = Array.from(inputTags)
inputTags.forEach(input => {
    input.addEventListener('click', function () {
        toTheTop[toArray.indexOf(input)].classList.add('userinfoEffect');
    })
})


