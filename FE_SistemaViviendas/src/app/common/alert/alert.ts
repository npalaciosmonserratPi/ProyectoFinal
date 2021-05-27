import Swal from 'sweetalert2'

/**MENSAJES */
export function SuccesMessage(titulo: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  
  Toast.fire({
    icon: 'success',
    title: titulo
  });
}

export function ErrorMessage(titulo: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  
  Toast.fire({
    icon: 'error',
    title: titulo
  });
}

export function WarningMessage(titulo: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  
  Toast.fire({
    icon: 'warning',
    title: titulo
  });
}

/** ALERT */
export function ErrorAlert(titulo: string, mensaje: string, txtBtn: string) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'error',
        confirmButtonText: txtBtn,
        confirmButtonColor: '#DC1E38',
        timer: 4000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
}

export function WarningAlert(titulo: string, mensaje: string, txtBtn: string) {
  Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      confirmButtonText: txtBtn,
      confirmButtonColor: '#ffc107'
    });
}