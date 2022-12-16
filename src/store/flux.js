import { db } from "../config/firebase-config";
import { ref, set, onValue, remove, update } from "firebase/database";
import Swal from "sweetalert2";
import { uid } from "uid";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const getState = ({ getStore, getActions, setStore }) => {
const getState = ({ setStore }) => {
  return {
    store: {
      usuarios: [],
      materias: [],
      secciones: [],
    },
    actions: {
      /*========Usuarios========*/
      getUsuarios: () => {
        const starCountRef = ref(db, "usuarios/");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setStore({ usuarios: data });
        });
      },
      updateUsuarios: (item) => {
        const { itemName, edit } = item;        
        update(ref(db, `${itemName}/${edit.id}`), {
          nombre: edit.nombre,
          tipo_usuario: edit.tipo_usuario,
          horario: edit.horario,
        });
      },
      /*========Materias========*/
      getMaterias: () => {
        const starCountRef = ref(db, "materias/");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setStore({ materias: data });
        });
      },
      updateMaterias: (item) => {
        const { itemName, edit } = item;
        update(ref(db, `${itemName}/${edit.id}`), {
          nombre: edit.nombre,
          tipo_materia: edit.tipo_materia,
        });
      },
      /*========Secciones========*/
      getSecciones: () => {
        const starCountRef = ref(db, "secciones/");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setStore({ secciones: data });
        });
      },
      updateSecciones: (item) => {
        const { itemName, edit } = item;
        update(ref(db, `${itemName}/${edit.id}`), {
          nombre: edit.nombre,
          docente_asignado: edit.docente_asignado,
        });
      },
      /*========Eventos========*/
      getEventos: () => {
        const starCountRef = ref(db, "eventos/");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          setStore({ eventos: data });
        });
      },
      updateEventos: (item) => {
        const { itemName, edit } = item;
        update(ref(db, `${itemName}/${edit.id}`), {
          nombre: edit.nombre,
          descripcion: edit.descripcion,
          fecha: edit.fecha,
        });
      },
      addItem: (url, newItem) => {
        const id = uid(); 
        if (url === "usuarios/") {
          const authentication = getAuth();
          createUserWithEmailAndPassword(
            authentication,
            newItem.correo,
            newItem.password,            
            newItem.nombre,
          ).then((res) => {
            console.log(res)
            set(ref(db, `${url}` + `/${id}`), {
              ...newItem,
              id: id,
            });               
          })
          .catch((error) => {
            console.log(error)
            // ..
          });
        }else{
          set(ref(db, `${url}` + `/${id}`), {
            ...newItem,
            id: id,
          });  
        }                 
      },     

      deleteItem: (item) => {
        Swal.fire({
          title: "¿Está seguro?",
          text: "Esta acción no se puede revertir",
          iconHtml:
            '<img src="https://firebasestorage.googleapis.com/v0/b/horaclass-ejbs.appspot.com/o/ep_document-delete.png?alt=media&token=d2501654-92f5-4500-9602-250f9b25f810">',
          showCancelButton: true,
          confirmButtonColor: "#F26363",
          cancelButtonColor: "#666666",
          confirmButtonText: "Sí, borrar",
          cancelButtonText: "Cancelar",
          customClass: {
            icon: "no-border",
            cancelButton: "cancel-button",
            confirmButton: "confirm-button",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            remove(ref(db, `${item.itemName}/${item.item.id}`));
          }
        });
      },

      /*========Horarios========*/
      
      addHorario: (typeTeacher, id, seccion, materia, celda, idProfesorAsignado) => {
        console.log("Tipo de usuario", typeTeacher, " id: ", id, " seccion: ", seccion, " materia: ",  materia, " celda: ", celda, " profesorAsignado: ", idProfesorAsignado)

        if(typeTeacher === "Docente"){
          set(ref(db, `usuarios/${id}/horario/${celda}`), {
            seccion: seccion,
            celda: celda
          })
        }else{
          console.log(typeTeacher, id, seccion, materia, celda, idProfesorAsignado)
          set(ref(db, `usuarios/${id}/horario/${celda}`), {
            seccion: seccion,
            celda: celda
          })
          set(ref(db, `usuarios/${idProfesorAsignado}/horario/${celda}`), {
            seccion: materia,
            celda: celda
          })
        }
      },
    },
  };
};

export default getState;
