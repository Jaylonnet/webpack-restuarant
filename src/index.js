import './style.css';

const contentBlock = document.querySelector('#content');

const initialLoad = ((contentBlock) => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'sans-serif'
    contentBlock.append(
        createShowcase());
    const showcase = document.querySelector('.cover');
    showcase.append(createLogo(), createNavBar())
})(contentBlock);


function createShowcase() {
    const div = document.createElement('div');
    div.classList.add('showcase');
    const cover = document.createElement('div');
    cover.classList.add('cover')
    div.appendChild(cover);
    return div;
};

function createLogo() {
    const logo = document.createElement('h2');
    logo.textContent = 'Johnny Johns Pizza';
    logo.classList.add('reset', 'logo');
    return logo;
};


function createNavBar() {
    const ul = document.createElement('ul');
    ul.classList.add('nav-bar')
    const navOptions = ['Home', 'Menu', 'Contact'];
    for (let option of navOptions) {
        const li = document.createElement('li');
        li.textContent = option;
        ul.appendChild(li);
    };
    return ul;
};