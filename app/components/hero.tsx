import foto from "../fotoAjeng.jpeg";

function Profile() {
  return <img src={foto.src} alt="Ajeng Delia" className="fotoku"/>
}

export default function Hero() {
  return (
      <div className="container mx-auto p-2 text-center">
      <h1 className="text-gray-400 font-bold ">CV ONLINE</h1>
      <h2 className="text-3xl">Ajeng Delia</h2>
      
      <Profile />
      <p>
        Saya merupakan seorang mahasiswi aktif semester 5 di universitas ma'soem
      </p>
      </div>
      );
      }
