// https://api.github.com/users/

const
    logo = document.querySelector('.header__logo'),
    mode = document.querySelector('.mode'),
    modeText = document.querySelector('.mode__text'),
    modeIcon = document.querySelector('.mode__icon'),
    input = document.querySelector('input'),
    form = document.querySelector('form'),
    btn = document.querySelector('.search__input'),
    card = document.querySelector('.card'),
    user = document.querySelector('.octocat__title'),
    login = document.querySelector('.octocat__link'),
    joined = document.querySelector('.octocat__date'),
    nums = document.querySelector('.nums'),
    title = document.querySelectorAll('.title'),
    num = document.querySelectorAll('.num'),
    repo = document.querySelector('.num1'),
    follower = document.querySelector('.num2'),
    followings = document.querySelector('.num3'),
    text = document.querySelectorAll('.text'),
    locat = document.querySelector('.location'),
    twit = document.querySelector('.twitter'),
    websites = document.querySelector('.websites'),
    companies = document.querySelector('.companies'),
    gitBio = document.querySelector('.githubBio'),
    img = document.querySelector('.avatar');
    svg = document.querySelectorAll('svg');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${input.value}`
    async function getUrl() {
        const response = await fetch(url),
            data = await response.json(),
            dateData = data.created_at.slice(0, data.created_at.length - 10)
        img.src = data.avatar_url;
        user.innerHTML = `The ${data.login}`;
        joined.innerHTML = `Joined ${dateData}`;
        login.innerHTML = `${data.login}`;
        login.href = `https://github.com/${data.login}`
        if (data.blog.length > 0) {
            websites.href = `${data.blog}`;
        } else {
            websites.href = '#';
        }
        companies.href = `${data.company}`;
        repo.innerHTML = data.public_repos;
        follower.innerHTML = data.followers;
        followings.innerHTML = data.following;
        locat.innerHTML = data.location === "" || data.location === null
            ? "No location"
            : data.location;
        twit.innerHTML = data.twitter_username === "" || data.twitter_username === null
            ? "No twitter"
            : data.twitter_username;
        websites.innerHTML = data.blog === "" || data.blog === null
            ? "No Website"
            : "blog";
        companies.innerHTML = data.company === "" || data.company === null
            ? "No Company"
            : data.company;
        gitBio.innerHTML = data.bio === null
            ? "This profile has no bio"
            : data.bio;
    }
    getUrl();
    input.value = "";
})
mode.addEventListener('click', (e) => {
    mode.classList.toggle("dark");
    num.forEach((e) => {
        e.classList.toggle('color')
    })
    title.forEach((e) => {
        e.classList.toggle('color')
    })
    text.forEach((e) => {
        e.classList.toggle('color')
    })
    for (let i = 0; i < 4; i++) {
        svg[i].style.fill = '#ffffff'
    }
    input.classList.toggle('color')
    user.classList.toggle('color')
    joined.classList.toggle('color')
    gitBio.classList.toggle('color')
    if (mode.classList.contains("dark")) {
        document.body.style.background = '#141D2F'
        modeText.textContent = 'LIGHT'
        logo.style.color = '#ffffff'
        modeText.style.color = '#ffffff'
        modeIcon.src = '../images/svg/sun.svg'
        form.style.background = '#1E2A47'
        card.style.background = '#1E2A47'
        form.style.boxShadow = 'none'
        card.style.boxShadow = 'none'
        nums.style.background = '#141D2F'

    } else {
        document.body.style.background = '#F6F8FF'
        modeText.textContent = 'DARK'
        modeIcon.src = '../images/svg/dark-moon.svg'
        logo.style.color = '#2B3442'
        modeText.style.color = '#90A4D4'
        form.style.background = '#FEFEFE'
        card.style.background = '#FEFEFE'
        form.style.boxShadow = '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
        card.style.boxShadow = '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
        nums.style.background = '#F6F8FF'

    }
})