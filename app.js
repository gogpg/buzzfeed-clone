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
                text: "Lithuania",
                image: "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=crop&h=230&q=edges",
                alt: "Vilnius Old Town, Vilnius, Lithuania",
                credit: "Igor Gubaidulin"
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

const unansweredQuestions = []
const chosenAnswers = []
const results = [
    {
        combination: ["Italy", "Soup", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=580&q=edges",
        alt: "Blue Cheese",
        
    },
    {
        combination: ["Turkey", "Pancakes", "Treehouse"],
        text: "Cheddar Cheese",
        image: "https://images.unsplash.com/photo-1625084561186-4e619abad93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=580&q=edges",
        alt: "Cheddar cheese"
       
    },
    {
        combination: ["USA", "Toast", "Modern"],
        text: "Brie Cheese",
        image: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=580&q=edges",
        alt: "Brie cheese"
        
    },
    {
        combination: ["Lithuania", "Omelette", "Mansion"],
        text: "Feta Cheese",
        image: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=580&q=edges",
        alt: "Feta cheese"
        
    }
  
]
/// need to have default result to compensate for lack of combination data

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

        unansweredQuestions.push(question.id) //visi klausimai po pirmo ciklo eina i neatsakytus klausimus

        question.answers.forEach(answer => {    //dabar sukamas ciklas kiekvieno klausimo viduje

            const answerBlock = document.createElement('div') //sukuriamas divas kiekvienam atsakymui
            answerBlock.classList.add('answer-block')  //sukuriama klase, kad galetume parasyti stiliu
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))   //sukuriame eventlisteneri, kad paspaudus ant atsakymo ivyktu nustaytas ivykis. parametrai klausimo id ir atsakymo tekstas

            const answerImage = document.createElement('img') //sukuriame elementa nuotraukai
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')  //sukuriame atsakymo pavadinima
            answerTitle.textContent = answer.text       //atsakymo antrastes tekstas lygus kiekvieno atsakymo per kuri sukamas ciklas tekstui

            const answerInfo = document.createElement('p') //sukuriame atsakymu informacijos bloka p.

            const imageLink = document.createElement('a')  //kiekvienam atsakymui sukuriame nuorodos vieta
            imageLink.setAttribute('href', answer.image)  //jai prsiskiriame nuoroda ir jai priskiriame answer.credid, nuves i nuoroda, kas padare nuotrauka
            imageLink.textContent = answer.credit

            const sourceLink = document.createElement('a') //sukuriame dar vienos nuorodos vieta, kurioje bus nuoroda i saltini, is kurio paimta nuotrauka
            sourceLink.textContent = 'Unsplash' //jai priskiriamas tekstas atidaryti
            sourceLink.setAttribute('src', 'https://www.unsplash.com') //paspaudus ant unsplash atidarys saltinio nuoroda.

            answerInfo.append(imageLink, ' to ', sourceLink) //i answer info sukrta elementa idedame nuotrauku nuorodas ir saltiniu nuorodas

            answerBlock.append(answerImage, answerTitle, answerInfo) //i atsakymu bloka ikeliu sukurta atsakymu img ir pavadinima ir informacija.

            answersBlock.append(answerBlock) //i atsakymu bloka dedame kiekvieno atsakymo bloka
        })

        questionDisplay.append(answersBlock)  //i klausimu lauka ikeliu atsakymu div
    })

}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {     //paspaudus ant pasirinkto paveikslelio console rodys klausimo id ir pasirinkto atsakymo teksta
    if (unansweredQuestions.includes(questionId))   //paspaudus ant atsakymo, jeigu neatsakytu klausmu masyve yra klausimo id
        chosenAnswers.push(chosenAnswer)    //tai i pasirintu atsakymu masyva ipushinti ta atsakyma, kuris susijes su klausimo id, ant kurio buvo paspauta
    const itemToRemove = unansweredQuestions.indexOf(questionId)  //istrinamo neatsakytu klausimu indeksas yra klausimo id, is masyvo istriname to klausimo id, kuris jau yra atsakytas

    if (itemToRemove > -1) {                        //jei trinamo klausimo indeksas yra daugiau uz -1
        unansweredQuestions.splice(itemToRemove, 1) // is neatsakytu klausimu masyvo istriname ta klausima viena
    }

    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer) //////////////////////////////////////////////////////////////////////////////////////
    //scroll to top most unanswered question
    const lowestQuestionId = Math.min(...unansweredQuestions)  //surandame maziausia neatsakytu klausimu masyve esanti id
    location.href = '#' + lowestQuestionId    //paspaudus ant atsakymo, mus is karto numeta ant kito klausimo, nes pries tai atsakytas klausimas jua yra isimtas is masyvo ir maziausias id yra sekantis klausimas.

    if (!unansweredQuestions.length) {  //jeigu nera neatsakytu klausimu ilgio, jis jau yra tuscias, visi klausimai atsakyti
        location.href = '#answer'  //kai atsakyti visi klausimai rodykle nusoka i atsakymo, rezultato langa
        showResult()  
    }
}

const showResult = () => {               //rezultatu funkcija
    let result                           //rezultato kintamasis
    results.forEach(answer => {          // ciklas per results masyva
        if (chosenAnswers.includes(answer.combination[0]) +      //jei pasirinktu atsakymu masyve yra pirmas is combination elementas paskui antras ir tt
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2]) +
            chosenAnswers.includes(answer.combination[3])) {

                result = answer                                 //rezultatas vienas is results masyve esanciu atsakymu

            } else if (!result) {   //jeigu nera tokio resultato
                //paskutinis atsakymas bus defoltinis            //jei tokios kombinacijos nera, tada defoltinis variantas
                result = results[3]
            }
    })

    console.log(result)


    const resultBlock = document.createElement('div')  //sukuriame resultato diva
    resultBlock.classList.add('result-block')           //pridedame klase, kad galetume parasyti stiliu
    const resultTitle = document.createElement('h3')     //sukuriame pavadinimo vieta
    resultTitle.textContent = result.text                //pavadinimo tekstas- is results masyvo vieno is atsakymu tekstas
    const resultImage = document.createElement('img')    //sukuriame vieta img
    resultImage.setAttribute('src', result.image)        //img uzsetiname vieno is result nuotrauka
    resultImage.setAttribute('alt', result.alt)

    resultBlock.append('You are', resultTitle, resultImage)

    answerDisplay.append(resultBlock)
   

   constAllAnswerBlocks = document.querySelectorAll('.answer-block')   ///padarome, kad po to, kai ivyksta resultatas nebegaletume spausti ant paveiksleliu ir rezultatas nesikartotu
    Array.from(constAllAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {       //uzpilkiname nepasirinkta atsakyma
    const currentQuestionBlock = document.getElementById(questionId + "-questions")   //paimami visi klausimai
    
    Array.from(currentQuestionBlock.children).forEach(block => {    //sukamas ciklas per ju vaikus, atsakymus
        if (block.children.item(1).innerText != chosenAnswer) {     //imame atsakymu antra eilute, kur yra tekstas ir palyginame ar jis nesutampa su pasirinktu atsakymu
            block.style.opacity = "50%"            //randame nepasirinkta klausima ir ji padarome blankiu
        }
    })
}
