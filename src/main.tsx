import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/restaurants';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <div>
        <h1>Рестораны:</h1>
        <div>
            <p>Название: {restaurants[0].name}</p>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[0].menu[0].name} ${restaurants[0].menu[0].price}</li>
                <li>{restaurants[0].menu[1].name} ${restaurants[0].menu[1].price}</li>
                <li>{restaurants[0].menu[2].name} ${restaurants[0].menu[2].price}</li>
            </ul>
            <h3>Отзывы:</h3>
            <ul>
                <li>{restaurants[0].reviews[0].text}</li>
                <li>{restaurants[0].reviews[1].text}</li>
            </ul>
        </div>
        <div>
            <p>Название: {restaurants[1].name}</p>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[1].menu[0].name} ${restaurants[1].menu[0].price}</li>
                <li>{restaurants[1].menu[1].name} ${restaurants[1].menu[1].price}</li>
            </ul>
            <h3>Отзывы:</h3>
            <ul>
                <li>{restaurants[1].reviews[0].text}</li>
                <li>{restaurants[1].reviews[1].text}</li>
                <li>{restaurants[1].reviews[2].text}</li>
            </ul>
        </div>
        <div>
            <p>Название: {restaurants[2].name}</p>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[2].menu[0].name} ${restaurants[2].menu[0].price}</li>
                <li>{restaurants[2].menu[1].name} ${restaurants[2].menu[1].price}</li>
                <li>{restaurants[2].menu[2].name} ${restaurants[2].menu[2].price}</li>
            </ul>
            <h3>Отзывы:</h3>
            <ul>
                <li>{restaurants[2].reviews[0].text}</li>
            </ul>
        </div>
        <div>
            <p>Название: {restaurants[3].name}</p>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[3].menu[0].name} ${restaurants[3].menu[0].price}</li>
                <li>{restaurants[3].menu[1].name} ${restaurants[3].menu[1].price}</li>
            </ul>
            <h3>Отзывы:</h3>
            <ul>
                <li>{restaurants[3].reviews[0].text}</li>
                <li>{restaurants[3].reviews[1].text}</li>
            </ul>
        </div>
    </div>
);
