const renderScore = (data, htmlElement) => {
  let list = '';
  data.forEach((element) => {
    list += `<tr><td>${element.user} : ${element.score}</td></tr>`;
  });
  htmlElement.innerHTML = list;
};

export default renderScore;
