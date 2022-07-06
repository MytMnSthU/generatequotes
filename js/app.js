const url = "https://type.fit/api/quotes";

const generateBtn = document.querySelector('.btn');
const quoteTag = document.querySelector('.quote');


fetch(url)
    .then((res) => res.json())
    .then((data) => {

        generateBtn.addEventListener('click', () => {  

            let randNum = Math.floor(Math.random() * 500);

            quoteTag.innerHTML = `
                <i class="align-self-start text-secondary fs-6 fas fa-quote-left"></i>
                <h1 class=" fw-light my-5 px-5">
                    ${data[randNum].text}
                </h1>
                <i class="align-self-end text-secondary fs-6 fas fa-quote-right"></i>
                <h4 class="mt-5">${data[randNum].author || "Anonymous"}</h4>
            `;
            
        })


    })
    .catch((err) => {
        console.log(err);
    });

