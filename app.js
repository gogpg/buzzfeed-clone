const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
                alt: "Photo of the Empire State building during daytime",
                credit: ""
            },
            {
                text: "Austin",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/TexasStateCapitol-2010-02.JPG/1024px-TexasStateCapitol-2010-02.JPG",
                alt: "Photo of Texas State Capitol",
                credit: ""
            },
            {
                text: "Portland",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Arlene_Schnitzer_Concert_Hall.jpg/800px-Arlene_Schnitzer_Concert_Hall.jpg",
                alt: "Arlene Schnitzer Concert Hall",
                credit: ""
            },
            {
                text: "New Orleans",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/%D0%91%D1%83%D1%80%D0%B1%D0%BE%D0%BD-%D1%81%D1%82%D1%80%D0%B8%D1%82_%28square%29.jpg/800px-%D0%91%D1%83%D1%80%D0%B1%D0%BE%D0%BD-%D1%81%D1%82%D1%80%D0%B8%D1%82_%28square%29.jpg",
                alt: "Burbon street",
                credit: "By bellemarematt"
            }
        ]
    },

    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1024px-Pizza-3007395.jpg",
                alt: " Neapolitan-style pizza",
                credit: "Igor Ovsyannykov"
            },
            {
                text: "Sandwich",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Korbel_Champagne_Cellars_-_Stierch_-_April_2019_05.jpg/640px-Korbel_Champagne_Cellars_-_Stierch_-_April_2019_05.jpg",
                alt: "Turkey sandwich",
                credit: ""
            },
            {
                text: "Pasta",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pasta_alla_Nerano.jpg/800px-Pasta_alla_Nerano.jpg",
                alt: "Pasta alla Nerano",
                credit: "Enzo Rippa"
            },
            {
                text: "Salat",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vogel-Sternmieren-Salat%28Detail%29.jpg/800px-Vogel-Sternmieren-Salat%28Detail%29.jpg",
                alt: "Czar Salad",
                credit: "Vogel Sternmieren"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://www.scandia-hus.co.uk/wp-content/uploads/The-Oaks-61-2-e1611230379190-655x450.jpg",
                alt: "",
                credit: ""
            },
            {
                text: "Modern",
                image: "http://creativeoverflow.net/wp-content/uploads/2018/11/778ff64d062e7c59bf5f1a61290ba878.jpg",
                alt: "",
                credit: ""
            },
            {
                text: "Beach",
                image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/303315943.jpg?k=e8b80e6e273ab744215eb5fce6c7d0b280cb96ca7f8876d25dc040fa7e35156b&o=&hp=1",
                alt: "",
                credit: ""
            },
            {
                text: "Wooden",
                image: "https://thearchitecturedesigns.com/wp-content/uploads/2019/03/7-wooden-house-design-ideas-1024x576.jpg",
                alt: "",
                credit: ""
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
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => {    //dabar sukamas ciklas kiekvieno klausimo viduje

            const answerBlock = document.createElement('div') //sukuriamas divas kiekvienam atsakymui
            answerBlock.classList.add('answer-block')  //sukuriama klase, kad galetume parasyti stiliu
            answerBlock.addEventListener('click', handleClick) //sukuriame eventlisteneri, kad paspaudus ant atsakymo ivyktu nustaytas ivykis

            const answerImage = document.createElement('img') //sukuriame elementa nuotraukai
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)
            
            answerTitle = document.createElement('h3')  //sukuriame atsakymo pavadinima
            answerTitle.textContent = answer.text       //atsakymo antrastes tekstas lygus kiekvieno atsakymo per kuri sukamas ciklas tekstui

            const answerInfo = document.createElement('p') //sukuriame atsakymu informacijos bloka p.

            const imgLink = document.createElement('a')  //kiekvienam atsakymui sukuriame nuorodos vieta
            imgLink.setAttribute('href', answer.credit)  //jai prsiskiriame nuoroda ir jai priskiriame answer.credid, nuves i nuoroda, kas padare nuotrauka

            /*const sourceLink = document.createElement('a') //sukuriame dar vienos nuorodos vieta, kurioje bus nuoroda i saltini, is kurio paimta nuotrauka
            sourceLink.textContent = 'Unsplash' //jai priskiriamas tekstas atidaryti
            sourceLink.setAttribute('src', 'https://www.unsplash.com') //paspaudus ant unsplash atidarys saltinio nuoroda(mano saltiniai ne is ten, rasyta pagal pavyzdi)*/

            answerBlock.append(answerImage, answerTitle) //i atsakymu bloka ikeliu sukurta atsakymu img ir pavadinima.
            

        })

        questionDisplay.append(answersBlock)  //i klausimu lauka ikeliu atsakymu div
    })
}
populateQuestions()

const handleClick = () => {
    console.log('clicked')
}