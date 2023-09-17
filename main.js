
const panoramaImage = new PANOLENS.ImagePanorama("https://iso.500px.com/wp-content/uploads/2017/06/Royal-Suite-.jpg");
const imageContainer = document.querySelector(".image-container");
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  cameraFov: 90,
});
viewer.add(panoramaImage);


const panoramaImage2 = new PANOLENS.ImagePanorama("https://images.unsplash.com/photo-1594904578869-c011783103c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2185&q=80");
const imageContainer2 = document.querySelector(".image-container2");
const viewer2 = new PANOLENS.Viewer({
  container: imageContainer2,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  cameraFov: 90,
});
viewer2.add(panoramaImage2);



