import restaurantPic from './restaurant.jpg';

export default function homepage() {
    const div = document.querySelector("div");

    const restaurantImg = new Image();
    restaurantImg.src = restaurantPic;
    div.appendChild(restaurantImg);

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Chez-Megan";
    div.appendChild(restaurantName);

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = "Enjoy home-cooked delicacies from around the world when you dine Chez-Megan";
    div.appendChild(restaurantDescription);
}
