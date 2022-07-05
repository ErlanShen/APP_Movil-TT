
/* export function toast(message, duration = 2000) {
  const toast = document.createElement('ion-toast');
  toast.message = message;
  toast.duration = duration;

  document.body.appendChild(toast);
  return toast.present();
}
 */
export async function presentToast(message, duration = 2000, color = 'light') {
  const toast = document.createElement('ion-toast');
  toast.message = message;
  toast.duration = duration;
  toast.color = color;

  document.body.appendChild(toast);
  return toast.present();
}