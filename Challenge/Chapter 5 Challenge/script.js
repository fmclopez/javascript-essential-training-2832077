const content = `
    <ul style="
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    "
    >
        <li><a href="#" style = "color: #000000;text-decoration: none;"> Home </a> </li>
        <li><a href="#" style = "color: #000000;text-decoration: none;"> Store </a></li>
        <li><a href="#" style = "color: #000000;text-decoration: none;"> Profile </a></li>
        <li><a href="#" style = "color: #000000;text-decoration: none;"> Exhibit </a></li>
        <li><a href="#" style = "color: #000000;text-decoration: none;"> About Us </a></li>
    </ul>
`;

const main = document.querySelector("main");
const navBar = document.createElement("nav");
navBar.classList.add("nav-bar");
navBar.setAttribute("id", "nav-bar");
navBar.style.padding = 50;

navBar.innerHTML = content;

main.before(navBar);
