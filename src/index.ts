//console.log("hola desde el Front");
fetch("/env")
  .then((res) => {
    res.json();
  })
  .then((d) => {
    console.log(d);
  });
