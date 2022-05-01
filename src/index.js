import './style.css';

const contentBlock = document.querySelector('#content');

const initialLoad = ((contentBlock) => {
    contentBlock.append(
        createLogo(),
        createNavBar())
})(contentBlock);


function createShowcase() {
    const div = document.createElement('div');

};

function createLogo() {
    const logo = document.createElement('h2');
    logo.textContent = 'Johnny Johns Pizza';
    return logo;
};


function createNavBar() {
    const ul = document.createElement('ul');
    const navOptions = ['Home', 'Menu', 'Contact'];
    for (let option of navOptions) {
        const li = document.createElement('li');
        li.textContent = option;
        ul.appendChild(li);
    };
    return ul;
};