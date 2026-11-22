
// ==================================
// bagian canvas
// ================================
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

function gambarbackground() {
  ctx.fillStyle = "#3003fa";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ======================================
// deklarasi variabel
// ============================
const keranjang = {
  x: 200,
  y: 330,
  width: 200,
  height: 25,
  color: "brown"
}
const buah = {
  x: 280,
  y: 80,
  width: 35,
  height: 35,
  color: "red",
  speed: 2
};
const kecepatan= 5;

let tombolKiri = false;
let tombolKanan = false;

let score = 0;


// ======================================
// fungsi untuk menggambar keranjang dan buah
// ============================

function gambarKeranjang() {
  ctx.fillStyle = keranjang.color;
  ctx.fillRect(keranjang.x, keranjang.y, keranjang.width, keranjang.height);
}

function gambarBuah() {
  ctx.fillStyle = buah.color;
  ctx.fillRect(buah.x, buah.y, buah.width, buah.height);
}

function gambarScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

//NAMA FYNCTION NYA TERNYATA HARUS URUT JIR
function gambarTampilan() { //function intin biar manggil langsung banyak
  gambarbackground();
  gambarKeranjang();
  gambarBuah();
  gambarScore();
}
function gameloop() { // function intin buat manggil langsung baynak
  gambarbackground();
  gambarKeranjang();
  gambarBuah();
  gambarScore();
  gerakkeranjang();
  gerakbuah();

  requestAnimationFrame(gameloop); //ini tannya AI :v
}

gambarTampilan(); // ini ama bawah ngeaktif in functionnya
gameloop();

// ============================
// pergerakan
// =======================

function gerakkeranjang() {
  if (tombolKiri) {
    keranjang.x -= kecepatan;
  }
  if (tombolKanan) {
    keranjang.x += kecepatan;
  }
}

function gerakbuah() {
  buah.y += buah.speed;

  if (buah.x < keranjang.x + keranjang.width &&
      buah.x + buah.width > keranjang.x &&
      buah.y < keranjang.y + keranjang.height &&
      buah.y + buah.height > keranjang.y) {
        buah.y = 0;
        buah.x = Math.random() * (canvas.width - buah.width);
        score++;
      }
    // Buah mengenai keranjang
}

// ============================
// cara biar bisa gerak pake panah keyboard
// ===========================


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    tombolKiri = true;
  }                   
  if (event.key === "ArrowRight") {
    tombolKanan = true;
  }
});//NGONOTOK O DADAK MAN TIWAS AKU BINGUNG TIBAK E KAREK MADAKNO ULO

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    tombolKiri = false;
  }
  if (event.key === "ArrowRight") {
    tombolKanan = false;
  }
});

