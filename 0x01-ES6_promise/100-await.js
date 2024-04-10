import {uploadPhoto, createUser} from ./utils.js;

export default async function asyncUploadUser() {
  let inf = {};


  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    
    inf = {photo, user};
  } catch (err) {
    inf = {photo : null, user : null};
  }

  return inf;
}
