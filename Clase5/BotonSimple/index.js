// Crear y configurar el primer botón manualmente
        const boton1 = document.createElement("button");
        boton1.textContent = "Haz clic aquí";
        boton1.addEventListener("click", () => alert("¡Botón 1 clickeado!"));

        // Estilos en línea para el primer botón
        boton1.style.padding = "10px 20px";
        boton1.style.backgroundColor = "#3498db";
        boton1.style.color = "white";
        boton1.style.border = "none";
        boton1.style.borderRadius = "5px";
        boton1.style.cursor = "pointer";
        boton1.style.transition = "background-color 0.3s";

        boton1.addEventListener("mouseover", () => {
            boton1.style.backgroundColor = "#2980b9";
        });
        boton1.addEventListener("mouseout", () => {
            boton1.style.backgroundColor = "#3498db";
        });

        document.body.appendChild(boton1);

        // Crear y configurar el segundo botón manualmente
        const boton2 = document.createElement("button");
        boton2.textContent = "Haz clic aquí";
        boton2.addEventListener("click", () => alert("¡Botón 2 clickeado!"));

        // Estilos en línea para el segundo botón
        boton2.style.padding = "10px 20px";
        boton2.style.backgroundColor = "#3498db";
        boton2.style.color = "white";
        boton2.style.border = "none";
        boton2.style.borderRadius = "5px";
        boton2.style.cursor = "pointer";
        boton2.style.transition = "background-color 0.3s";

        boton2.addEventListener("mouseover", () => {
            boton2.style.backgroundColor = "#2980b9";
        });
        boton2.addEventListener("mouseout", () => {
            boton2.style.backgroundColor = "#3498db";
        });

        document.body.appendChild(boton2);

        // Crear y configurar el tercer botón manualmente
        const boton3 = document.createElement("button");
        boton3.textContent = "Haz clic aquí";
        boton3.addEventListener("click", () => alert("¡Botón 3 clickeado!"));

        // Estilos en línea para el tercer botón
        boton3.style.padding = "10px 20px";
        boton3.style.backgroundColor = "#3498db";
        boton3.style.color = "white";
        boton3.style.border = "none";
        boton3.style.borderRadius = "5px";
        boton3.style.cursor = "pointer";
        boton3.style.transition = "background-color 0.3s";

        boton3.addEventListener("mouseover", () => {
            boton3.style.backgroundColor = "#2980b9";
        });
        boton3.addEventListener("mouseout", () => {
            boton3.style.backgroundColor = "#3498db";
        });

        document.body.appendChild(boton3);