const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/X15E.png?set=set1'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/X7E.png?set=set1'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/X3E.png?set=set1'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/9ZF.png?set=set1'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/X9E.png?set=set1'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/HIW.png?set=set1'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/86F.png?set=set1'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/JP0.png?set=set1'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/4ZF.png?set=set1'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/X4E.png?set=set1'
    }
    ];



// Array and Object methods
// Array and Object destructuring
// Functions and arrow functions
// DOM tree

// A Robo-Friends Search with Advanced Javascript
// In this project you will have to create a website like this (you can use your own css to style your project):
// Instructions
// 1. The webpage displays Cards of Robots with their respective image and information. The webpage should also filter the cards when you search for a specific name in the search box, like this:
// 2. Display the cards in the DOM, using the DOM elements and selectors that you were taught in class and filter them with the search box.
// 3. You can use your own images or use this site to generate a new Robot Image and add your images url to your object array.






const main = document.getElementById('main'); 

const robotCard = (robot) => { 
    newDiv = document.createElement('div'); 
    let img = document.createElement('img');
    img.src = robot.image;
    let robotName = document.createElement('h2');
    robotName.className = 'robot-name'
    robotName.textContent = robot.name
    let robotEmail = document.createElement('div')
    robotEmail.className = 'robot-email'
    robotEmail.textContent = robot.email
    
    newDiv.classList.add('robot-card') 
    newDiv.appendChild(img);
    newDiv.appendChild(robotName);
    newDiv.appendChild(robotEmail);
    main.appendChild(newDiv); 
}
for (let robot of robots) robotCard(robot); 
const filter = () => { 
    const allCards = document.querySelectorAll('div') 
    allCards.forEach((item) => {
        item.remove() 
    })


    robots.forEach((robot) => { 
        let letter = robot.name.split(' ') 
        for (let i of letter) {
            
            if (i.toLowerCase().indexOf(inputState.value.toLowerCase()) !== -1) { 
                return robotCard(robot)
            }
        }
    })
}


// selects search input and connect to the keyboard event for the filter
const inputState = document.querySelector('input'); 
inputState.addEventListener('keyup', filter) 