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

        }
    }
});

