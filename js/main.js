function getData(){
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });
    promesa.then( (response)=>{
        response.json()
        .then((data)=>{
            createCards(data);
        })
        .catch(
            (error)=>{console.error("Problema en el json", error);
        });
    }).catch((error)=>{
        console.error(error, "Ocurrio un error en la solicitud");
    });
}//get data
getData();
//function createCards(data){
//    data.forEach(producto => {
//        console.log(producto.id, producto.title);
//    });
//}//createCards


let mainProds = document.getElementById("mainProds");
function createCards(prods){
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
        ` <div class="card" style="width: 18rem;">
        <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text"><strong>${prod.category}</strong></p>
          <p class="card-text">${prod.description.slice(0.80)}...</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">
          Más info
        </button>
        
      </div>
      </div>
       <!--card-->
      <!--Modal-->
      <div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${prod.description}
      <p class="text-end"><strong>$ ${prod.price} USD </strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
      `);
    });
}//createCards






