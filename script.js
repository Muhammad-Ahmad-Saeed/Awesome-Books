function valueExtract() {
    const author = document.getElementById('inp01').value;
    const book = document.getElementById('inp02').value;

    console.log(author, book);

    const parentDiv = document.getElementById('id01');
    
    const bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';

    const bookParagraph = document.createElement('p');
    const content = document.createTextNode(`"${author}" by "${book}"`);
    bookParagraph.appendChild(content);
    bookInfo.appendChild(bookParagraph);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const remove = document.createElement('button');
    const btntxt = document.createTextNode('Remove');
    remove.appendChild(btntxt);
    buttonContainer.appendChild(remove);

    bookInfo.appendChild(buttonContainer);

    parentDiv.appendChild(bookInfo);

    remove.addEventListener('click', function () {
        parentDiv.removeChild(bookInfo);
    });

    document.getElementById('inp01').value = '';
    document.getElementById('inp02').value = '';
}
