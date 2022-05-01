const contentBlock = document.querySelector('#content');

const initialLoad = ((contentBlock) => {
    contentBlock.append(createNavBar())
})(contentBlock);

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

