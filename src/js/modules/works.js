export default function () {

  Fancybox.bind(".gallery a", {
  groupAll: true, 
  Thumbs: {
    autoStart: true,
  },
  Toolbar: {
    display: [
      { id: "counter", position: "center" },
      "zoom",
      "slideshow",
      "fullscreen",
      "download",
      "close",
    ],
  },
  animated: true,
  dragToClose: true,
});
}
