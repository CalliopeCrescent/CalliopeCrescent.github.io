import './style.css'
import calliopeLogo from './assets/Logo.webp'

document.querySelector('#app').innerHTML = `
<article id="banner" class="">
    <section class="hero relative">
        <img src="${calliopeLogo}" alt="Calliope Logo" class="object-cover w-full lg:h-dvh sm:h-auto">
    </section>
</article>

<article id="content">
    <section id="about" aria-label="About Me" class="scroll-mt-25">
        <div class="basic-container bg-(--background)/50 rounded-lg">
            <h1>ABOUT ME</h1>
            <div class="flex lg:flex-row max-lg:flex-col">
                <div class="flex flex-col lg:w-1/2 max-lg:h-1/2 p-10 text-justify"> 
                    <p>Hi, I'm Calliope!</p>
                    <p>I'm an avid programmer based in California that loves to intersect my love for storytelling with technology. 
                    I focus on tools that help creators create the stories that they want to make!</p>
                </div>
                <div class="flex lg:w-1/2 max-lg:h-1/2 p-10">
                </div>
            </div>
        </div>
    </section>
    
    <section id="projects" aria-label="Projects" class="scroll-mt-25">
        <div class="basic-container bg-white rounded-lg">
            <h1 class="text-(--background)!">PROJECTS</h1>
            <div class="flex flex-col justify-center text-(--background)">
                <p>All my projects can be found on Github:</p>
                <a 
                href="https://github.com/CalliopeCrescent" 
                target="_blank" rel="noopener noreferrer" 
                class="primary-button justify-center flex">
                    <svg class="w-11 h-11 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                        <g>
                            <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"/>
                        </g>
                    </svg>
                    <h2 class="m-0!">Github</h2>
                </a>
            </div>
        </div>
        
        <div class="carousel-container hidden">
            <ul>
                <li data-accName="Item 1">
                    <h2>Placeholder</h2>
                </li>
                <li data-accName="Item 2">
                    <h2>Placeholder</h2>
                </li>
                <li data-accName="Item 3">
                    <h2>Placeholder</h2>
                </li>
                <li data-accName="Item 4">
                    <h2>Placeholder</h2>
                </li>
            </ul>
        </div>
    </section>
    
    <section id="resume" aria-label="Resume" class="scroll-mt-25">
        <div class="basic-container bg-(--primary)/50 rounded-lg">
            <h1>RESUME</h1>
            <div class="flex lg:flex-row max-lg:flex-col-reverse">
                <div class="flex lg:w-1/2 max-lg:h-1/2 p-10 text-justify"> 
                    <div class="w-full h-full">
                        <object
                            data="https://drive.google.com/file/d/1-xfu5wdzC651v7hcr7LhDMqG2__bshul/preview"
                            width="100%"
                            height="400px">
                            <p class="pointer-events-none">Your browser does not support PDFs.</p>
                        </object>
                    </div>
                </div>
                <div class="flex lg:w-1/2 max-lg:h-1/2 p-10 justify-center">
                    <div class="flex flex-col justify-center">
                        <p>Take a look at my résumé here:</p>
                        <a href="https://drive.google.com/file/d/1-xfu5wdzC651v7hcr7LhDMqG2__bshul/preview" 
                        target="_blank" rel="noopener noreferrer" class="accent-button">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</article>
`
