document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


if(menuBtn && mobileMenu){

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

if(mobileMenu.classList.contains("active")){
document.body.style.overflow="hidden";
}else{
document.body.style.overflow="auto";
}

});

const links = mobileMenu.querySelectorAll("a");

links.forEach(link=>{
link.addEventListener("click",()=>{
mobileMenu.classList.remove("active");
document.body.style.overflow="auto";
});
});

}


const particleContainer=document.getElementById("particles");

if(particleContainer){

for(let i=0;i<40;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";
p.style.top=Math.random()*100+"%";
p.style.animationDuration=(10+Math.random()*10)+"s";

particleContainer.appendChild(p);

}

}


const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const speed=target/200;

if(count<target){

counter.innerText=Math.ceil(count+speed);

setTimeout(update,20);

}else{

counter.innerText=target.toLocaleString();

}

};

update();

});


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

});
document.addEventListener("DOMContentLoaded", () => {

            const menuBtn = document.getElementById("menuBtn");
            const closeMenu = document.getElementById("closeMenu");
            const mobileMenu = document.getElementById("mobileMenu");

            if(menuBtn && mobileMenu){
                menuBtn.addEventListener("click", () => {
                    mobileMenu.classList.toggle("hidden");
                    mobileMenu.classList.add("flex");
                    document.body.style.overflow = "hidden";
                });

                const closeAction = () => {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("flex");
                    document.body.style.overflow = "auto";
                };

                closeMenu.addEventListener("click", closeAction);
                mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeAction));
            }
            const particleContainer = document.getElementById("particles");
            if(particleContainer){
                for(let i = 0; i < 50; i++){
                    const p = document.createElement("div");
                    p.className = "particle";
                    p.style.left = Math.random() * 100 + "%";
                    p.style.top = Math.random() * 100 + "%";
                    p.style.animationDuration = (10 + Math.random() * 20) + "s";
                    p.style.animationDelay = (Math.random() * 5) + "s";
                    particleContainer.appendChild(p);
                }
            }
            const counters = document.querySelectorAll(".counter");
            counters.forEach(counter => {
                const update = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const speed = target / 100;

                    if(count < target){
                        counter.innerText = Math.ceil(count + speed);
                        setTimeout(update, 30);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                update();
            });
        });