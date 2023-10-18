# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 📋 Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## 🚀 Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### 🖼️ Screenshot

![image](https://github.com/vmC0sta/resumo-de-resultados/assets/116650361/92ce754d-8269-4743-b865-66d1af2551e0)

![image](https://github.com/vmC0sta/resumo-de-resultados/assets/116650361/7a5eedcc-d59c-48c6-b46c-c08d1f9d0f92)


### 🔗 Links

- Live Site URL: [https://vmc0sta.github.io/resumo-de-resultados/]([https://your-live-site-url.com](https://vmc0sta.github.io/resumo-de-resultados/))

## 🛠️ My process

### Built with

- HTML5
- CSS
- Javascript 

### What I learned

I learned how to consume JSON files (believe me, this was the worst part) and how to communicate better with CSS and @media queries.

```js
fetch('data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data = JSON.stringify(data)
        data = JSON.parse(data)
}
```

## 👩‍💻  Author

- Linkedin - [Maria Eduarda Vieira da Costa](https://www.linkedin.com/in/maria-eduarda-vieira-da-costa-954b951a5/)
- Frontend Mentor - [@vmC0sta](https://www.frontendmentor.io/profile/vmC0sta)
- Github - [@vmC0sta](https://github.com/vmC0sta)

## 🙌 Acknowledgments

[StackOverFlow](https://stackoverflow.com/) helped me
