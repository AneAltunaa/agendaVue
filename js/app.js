new Vue({
    el: '#editarContactos', 
    data: {
        contactos: [
            { nombre: "John Doe", email: "john.doe@deusto.es", telefono: "555555555" }
        ],
        nuevoContacto: {
            nombre: '',
            email: '',
            telefono: ''
        }
    },
    methods: {
        eliminarContacto(index) {
            this.contactos.splice(index, 1); // Elimina el contacto en el índice especificado
        },
        agregarContacto(){
            //Que todos los campos esten llenos
            if (this.nuevoContacto.nombre && this.nuevoContacto.email && this.nuevoContacto.telefono) {
                this.contactos.push({ ...this.nuevoContacto }); //Coge toda la informacion
                this.nuevoContacto = { nombre: '', email: '', telefono: '' }; //Borra los campos para que vuelvan a aparecer vacios
            } else {
                alert("Rellena todos los campos.");
            }
        }
    }
});

