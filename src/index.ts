// console.log("hola desde el Front");
fetch("/env")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.querySelector(".root").textContent = JSON.stringify(data);
  });
