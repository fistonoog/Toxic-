function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

function playBeat(name) {
  alert(
    name +
    " beat selected 🎵\n\n" +
    "Add your MP3 file in the project to make this button play the beat."
  );
}

function playTag() {
  alert(
    "Producer Tag 🎙️\n\n" +
    "This beat is produced by Prod Fils The Von."
  );
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(
    "Thanks " + name +
    "! Your message is ready to be connected to your email."
  );
}

function comingSoon(event, platform) {
  event.preventDefault();
  alert(platform + " link will be added soon.");
}
