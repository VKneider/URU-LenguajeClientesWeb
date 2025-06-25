class Boton {
            constructor(texto, onClick) {
                this.texto = texto;
                this.onClick = onClick;
            }

            render() {
                const button = document.createElement("button");
                button.textContent = this.texto;
                button.addEventListener("click", this.onClick);

                // Estilos en línea
                button.style.padding = "10px 20px";
                button.style.backgroundColor = "#3498db";
                button.style.color = "white";
                button.style.border = "none";
                button.style.borderRadius = "5px";
                button.style.cursor = "pointer";
                button.style.transition = "background-color 0.3s";

                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = "#2980b9";
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "#3498db";
                });

                return button;
            }
        }

        const boton1 = new Boton("Haz clic aquí", () => alert("¡Botón estilizado clickeado!"));
        document.body.appendChild(boton1.render());

        const boton2 = new Boton("Haz clic aquí", () => alert("¡Botón estilizado clickeado!"));
        document.body.appendChild(boton2.render());

        const boton3 = new Boton("Haz clic aquí", () => alert("¡Botón estilizado clickeado!"));
        document.body.appendChild(boton3.render());
