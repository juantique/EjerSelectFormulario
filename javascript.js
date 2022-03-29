function seleccionarProducto(){
		//obtener una referencia de la etiqueta select:
		let obtener = document.getElementById("cbxProductos");
		//obtener el nombre del producto
		let nomProducto = obtener.value;
		console.log(nomProducto);
		//Se remplaza sobre el spam de resultado, el texto que trae los valores:
		document.getElementById("cbxResultado").innerText = `texto seleccionado ${nomProducto}.`;
}

function seleccionarProductoDos(){
		let obtener = document.getElementById("cbxProductos");
		let nomProducto = obtener.options[obtener.selectedIndex].text;
		console.log(nomProducto);
}

function seleccionProducto(){
		let obtener = document.getElementById("cbxProductos");
		let nomProducto = obtener.selectedIndex;
		console.log(nomProducto);
		alert(obtener.options[nomProducto].text);
}

function seleccionarProductoTres(){
		const obtener = document.querySelector("#cbxProductos");
		console.log(obtener);
		obtener.addEventListener('change', () => {
				let nomProducto = obtener.selectedIndex[obtener.text];
				console.log(nomProducto);
		})
}
//Pruebas del segundo select costo:
function seleccionarPrecios(){
		const Iva = 1.19;
		
		//Precios
		let seleccion = document.getElementById("cbxPrecios");
		console.log(seleccion.value);
		let precioProducto = seleccion.options[seleccion.selectedIndex].text;
		console.log(precioProducto);
		//Cantidad
		let cantidad = document.getElementById("cantidad").value;
		//Operaciones
		let resultado = cantidad * precioProducto;
		console.log(resultado);
		let subtotal = resultado/Iva;
		console.log(subtotal);
		var subtotalRounded = subtotal.toFixed(2);
		console.log(subtotalRounded);
		let ivaTotal = subtotal * 0.19;
		console.log(ivaTotal);
		var ivaTotalRounded = ivaTotal.toFixed(2);
		console.log(ivaTotalRounded);
		//Resultados:
		document.getElementById("total").value = resultado;
		document.getElementById("SubTotal").value = subtotalRounded;
		document.getElementById("iva").value = ivaTotalRounded;
}
