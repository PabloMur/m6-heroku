// console.log("hola desde el Front");
fetch("/env")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
