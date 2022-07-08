export async function toast(message: string, duration = 2000, color: string = 'light') {
     const toast = document.createElement('ion-toast');
     toast.message = message;
     toast.duration = duration;
     toast.color = color;
   
     document.body.appendChild(toast);
     return toast.present();
   }

