//console.log("hola desde el Front");
fetch("/env")
  .then((r) => r.json())
  .then((d) => console.log(d));
