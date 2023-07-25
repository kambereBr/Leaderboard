let renderScore = (data, htmlElement) => {
    let list = '';
    data.forEach(element => {
        list += `<tr><td>${element.name} : ${element.score}</td></tr>`; 
    });
    htmlElement.innerHTML = list;
}

export { renderScore };

