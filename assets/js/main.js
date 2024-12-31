const menuBars = document.querySelector('.mobile-button-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const content = document.querySelector('#content')
const links = document.querySelectorAll('.mobile-menu-itens a')
const bodyPage = document.querySelector('body')

menuBars.addEventListener('click', menuOpen)

function menuOpen() {
    if (mobileMenu.classList.toggle('active')) {
        menuBars.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        bodyPage.style.overflow = 'hidden'
    } else {
        menuBars.innerHTML = `<i class="fa-solid fa-bars"></i>`
        bodyPage.style.overflow = 'auto'
    }
    content.classList.toggle('blurred')
}


links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
        bodyPage.style.overflow = 'auto'
        content.classList.remove('blurred')
        menuBars.innerHTML = `<i class="fa-solid fa-bars"></i>`
        setTimeout(() => {
            const sectionID = link.getAttribute('href')
            document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" })
        }, 300)
    })
}
)

const menuLinks = document.querySelectorAll('.navigation-menu a[href^="#"]')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}

function scrollToSection(e) {
    e.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(e.target)
    nativeScroll(distanceFromTheTop)
}

menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

window.sr = ScrollReveal({ reset: true })

sr.reveal('.christmas-section', {
    duration: 1700,
    distance: '5px',
    origin: 'left',
    mobile: true,
})

sr.reveal('.gifts-section', {
    duration: 1700,
    distance: '5px',
    origin: 'left',
    mobile: true,
});

sr.reveal('.text-info', {
    duration: 1500,
    distance: '5px',
    origin: 'left',
    interval: 120,
    mobile: true,
});

sr.reveal('.recipes-div', {
    duration: 1500,
    distance: '5px',
    origin: 'right',
    interval: 150,
    mobile: true,
})

const btn = document.querySelectorAll('.recipe button')
btn.forEach(button => { // função para percorrer os recipes e exibirem as receitas
    button.addEventListener('click', () => {
        const existingDiv = document.querySelector('#receita-completa');

        if (existingDiv) {
            existingDiv.remove()
        }

        const buttonId = button.id
        const newDiv = document.createElement('div')
        const newP = document.createElement('p')
        const newH1 = document.createElement('h1')
        const removeDiv = document.createElement('button')

        removeDiv.innerHTML = `<i class="fa-solid fa-xmark"></i>`

        removeDiv.addEventListener('click', () => {
            newDiv.remove()
        })

        newDiv.appendChild(removeDiv)

        removeDiv.id = 'button-remove'

        newP.id = 'text-recipes'

        newDiv.id = 'receita-completa'

        newH1.style.textAlign = 'center'

        switch (buttonId) {
            case 'biscoitos-gengibre':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '1/4 xícaras de farinha de trigo, 1 colher de chá de bicarbonato de sódio, 1 colher de chá de gengibre em pó, 1 colher de chá de canela em pó, 1/2 colher de chá de cravo-da-índia em pó, 1/4 colher de chá de sal, 3/4 xícara de manteiga sem sal (temperatura ambiente), 1/2 xícara de açúcar mascavo, 1 ovo, 1/4 xícara de mel. Açúcar cristal para polvilhar. <h2 style="text-align: center;">Modo de preparo:</h2> Misture os ingredientes secos (farinha, bicarbonato, especiarias e sal). Bata a manteiga com o açúcar até formar um creme. Acrescente o ovo e o mel, misture bem. Adicione os ingredientes secos à mistura e forme a massa. Leve à geladeira por 1 hora. Modele os biscoitos e asse a 180°C por 8 - 10 minutos.';
                break;

            case 'peru-assado':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '1 peru de 3-4 kg, 2 cebolas, 4 dentes de alho, 2 cenouras, 1 maçã verde, alecrim, tomilho, 100g de manteiga, 500 ml de caldo de galinha, sal, pimenta-do-reino, suco de 1 limão, 200 ml de vinho branco. <h2 style="text-align: center;">Modo de preparo:</h2> Tempere o peru com o suco de limão, sal e pimenta. Recheie com maçã, cebola, alho e ervas. Coloque o peru em uma assadeira, cubra com manteiga e regue com vinho branco e caldo. Asse em forno pré-aquecido a 180°C por cerca de 2 a 3 horas, regando ocasionalmente.';
                break;

            case 'rabanada':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '6 pães franceses amanhecidos, 500 ml de leite, 2 ovos, 100g de açúcar, 1 colher de chá de canela, óleo para fritar. <h2 style="text-align: center;">Modo de preparo:</h2> Corte os pães em fatias. Em uma tigela, misture o leite, os ovos batidos, o açúcar e a canela. Passe as fatias de pão nessa mistura e frite-as em óleo quente até dourarem. Passe-as no açúcar com canela.';
                break;

            case 'salada-maionese':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '1 kg de batatas, 1 xícara de ervilhas, 2 cenouras, 1 xícara de maionese, sal e pimenta a gosto. <h2 style="text-align: center;">Modo de preparo:</h2> Cozinhe as batatas e as cenouras até ficarem macias. Misture as batatas, as cenouras e as ervilhas em uma tigela grande. Adicione a maionese, tempere com sal e pimenta e misture bem.';
                break;

            case 'pudim-leite-condensado':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '1 lata de leite condensado, 2 latas de leite, 3 ovos, 1 xícara de açúcar. <h2 style="text-align: center;">Modo de preparo:</h2> Faça o caramelo derretendo o açúcar em uma forma. Bata os ovos, leite e leite condensado. Despeje a mistura sobre o caramelo e asse em banho-maria por 1 hora a 180°C.';
                break;

            case 'mousse-maracuja':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '1 lata de leite condensado, 1 lata de creme de leite, 1/2 xícara de suco de maracujá, 1 pacote de gelatina sem sabor.<h2 style="text-align: center;">Modo de preparo:</h2> Dissolva a gelatina e bata todos os ingredientes no liquidificador. Coloque em taças e leve à geladeira por 4 horas.';
                break;

            case 'farofa-natal':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '100g de manteiga, 3 xícaras de farinha de mandioca, 1/2 xícara de uvas passas, 100g de bacon, 1 cebola, sal e pimenta a gosto. <h2 style="text-align: center;">Modo de preparo:</h2> Frite o bacon até ficar crocante. Refogue a cebola na manteiga. Adicione a farinha de mandioca, uvas passas, sal e pimenta, mexendo até dourar.';
                break;

            case 'bolo-nozes':
                newH1.textContent = 'Ingredientes:'
                newP.innerHTML = '2 xícaras de farinha de trigo, 1 xícara de nozes picadas, 1 xícara de açúcar, 3 ovos, 1/2 xícara de manteiga, 1/2 xícara de leite, 1 colher de sopa de fermento em pó. <h2 style="text-align: center;">Modo de preparo:</h2> Bata a manteiga com o açúcar, adicione os ovos e misture. Acrescente os ingredientes secos e o leite, misture bem. Adicione as nozes e o fermento. Asse em forno a 180°C por 30 minutos.';
                break;

            default:
                newP.textContent = 'Receita não encontrada.';
        }

        newDiv.appendChild(newH1)
        newDiv.appendChild(newP)
        document.querySelector('#christmas-recipes').appendChild(newDiv)
    })
})

const backToTop = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'flex'
    } else {
        backToTop.style.display = 'none'
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    })
})