class Boton {
            constructor(texto, onClick) {
                this.texto = texto;
                this.onClick = onClick;
            }

            render() {
                const button = document.createElement("button");
                button.textContent = this.texto;
                button.addEventListener("click", this.onClick);

                // Asignar la clase de CSS
                button.classList.add("boton");

                return button;
            }
        }

        const boton1 = new Boton("Haz clic aquí", () => alert("¡Botón 1 clickeado!"));
        document.body.appendChild(boton1.render());

        const boton2 = new Boton("Haz clic aquí", () => alert("¡Botón 2 clickeado!"));
        document.body.appendChild(boton2.render());

        const boton3 = new Boton("Haz clic aquí", () => alert("¡Botón 3 clickeado!"));
        document.body.appendChild(boton3.render());