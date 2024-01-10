const renderScore = (data, htmlElement) => {
  let list = '';
  data.forEach((element) => {
    list += `<tr><td>${element.user} </td><td>${element.score}</td></tr>`;
  });
  htmlElement.innerHTML = list;
};

export default renderScore;
