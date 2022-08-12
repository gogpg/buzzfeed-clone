const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "Italy",
                image: "https://images.unsplash.com/photo-1595321673048-e1f4af403d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Italy, Venezia",
                credit: "Adrian Negura"
            },
            {
                text: "Turkey",
                image: "https://images.unsplash.com/photo-1654162115137-4f083a2ac627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Old town of Antalya, Turkey",
                credit: "Igor Sporynin"
            },
            {
                text: "USA",
                image: "https://images.unsplash.com/photo-1644203326795-9214b935cc04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "San Francisco, CA, USA",
                credit: "Vikrant Mathure"
            },
            {
                text: "Poland",
                image: "https://images.unsplash.com/photo-1569166067304-9b5d8be29d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Riverside of Gdansk in Poland",
                credit: "Ferdinand Stöhr"
            }
        ]
    },

    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Soup",
                image: "https://images.unsplash.com/photo-1659480150417-25f9f0d5ca2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Tomato soup with grilled cheese croutons",
                credit: "Lily Morello"
            },
            {
                text: "Toast",
                image: "https://images.unsplash.com/photo-1659778059522-d280d965fde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Avocado toast",
                credit: "Dima Solomin"
            },
            {
                text: "Pancakes",
                image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Pancakes for breakfast",
                credit: "Calum Lewis"
            },
            {
                text: "Omelette",
                image: "https://images.unsplash.com/photo-1660288929005-e69b03a7bf37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&q=edges",
                alt: "Egg omelette with smoked salmon and homemade fermented honey-lemon drink",
                credit: "Monika Grabkowska"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&q=edges",
                alt: " Concrete Villa",
                credit: "Todd Kent"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&q=edges",
                alt: "Architecture",
                credit: "R Architecture"
            },
            {
                text: "Treehouse",
                image: "https://images.unsplash.com/photo-1519378045141-f05b62faa055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&q=edges",
                alt: "Treehouse by Blue Forest",
                credit: "Matthew Harwood"
            },
            {
                text: "Mansion",
                image: "https://images.unsplash.com/photo-1561753757-d8880c5a3551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&q=edges",
                alt: "Am Attersee in Oberösterreich - Salzkammergut",
                credit: "Walter Sturn"
            }
        ]
    }
]

const populateQuestions = () => { 

    questions.forEach(question => {   //prasuku cikla per questions masyva

        const titleBlock = document.createElement('div') //kiekvienam klausimui sukuriu div elementa
        titleBlock.id = question.id  //div elemento id tures klausimo id
        titleBlock.classList.add('title-block')  //pridedu klase, kad matyciau ekrane, galeciau sukurti stiliu css faile

        const titleHeading = document.createElement('h2') //sukuriau nauja h2 elementa, antraste kiekvienam klausimo langeliui
        titleHeading.textContent = question.text //antrastes tekstas lygus klausimo tekstui.

        titleBlock.append(titleHeading) //idedu antraste i klausimu langelius
        questionDisplay.append(titleBlock)  //idedu div blokus i klausimu langa.

        const answersBlock = document.createElement('div')  //sukuriamas divas atsakymams
        answersBlock.id = question.id + "-questions"       // atsakymo bloko id lygus atsakymu id, bet turi buti unikalus, todel dadedame kabutese zodii, kad nesikirst su auksciau priskirtu id
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => {    //dabar sukamas ciklas kiekvieno klausimo viduje

            const answerBlock = document.createElement('div') //sukuriamas divas kiekvienam atsakymui
            answerBlock.classList.add('answer-block')  //sukuriama klase, kad galetume parasyti stiliu
            answerBlock.addEventListener('click', () => handleClick)   //sukuriame eventlisteneri, kad paspaudus ant atsakymo ivyktu nustaytas ivykis

            const answerImage = document.createElement('img') //sukuriame elementa nuotraukai
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)
            
            const answerTitle = document.createElement('h3')  //sukuriame atsakymo pavadinima
            answerTitle.textContent = answer.text       //atsakymo antrastes tekstas lygus kiekvieno atsakymo per kuri sukamas ciklas tekstui

            const answerInfo = document.createElement('p') //sukuriame atsakymu informacijos bloka p.

            const imgLink = document.createElement('a')  //kiekvienam atsakymui sukuriame nuorodos vieta
            imgLink.setAttribute('href', answer.credit)  //jai prsiskiriame nuoroda ir jai priskiriame answer.credid, nuves i nuoroda, kas padare nuotrauka

            const sourceLink = document.createElement('a') //sukuriame dar vienos nuorodos vieta, kurioje bus nuoroda i saltini, is kurio paimta nuotrauka
            sourceLink.textContent = 'Unsplash' //jai priskiriamas tekstas atidaryti
            sourceLink.setAttribute('src', 'https://www.unsplash.com') //paspaudus ant unsplash atidarys saltinio nuoroda.

            answerInfo.append(imgLink, ' to ', sourceLink) //i answer info sukrta elementa idedame nuotrauku nuorodas ir saltiniu nuorodas

            answerBlock.append(answerImage, answerTitle, answerInfo) //i atsakymu bloka ikeliu sukurta atsakymu img ir pavadinima ir informacija.
            
            answersBlock.append(answerBlock) //i atsakymu bloka dedame kiekvieno atsakymo bloka
        })

        questionDisplay.append(answersBlock)  //i klausimu lauka ikeliu atsakymu div
    })
    
}
populateQuestions()

const handleClick = () => {
    console.log('clicked')
}
