import Image from 'next/image';
import images from '../assets';

const Home = () => (
  <div className="flex justify-center flex-col">
    <div className="w-full h-screen bg-dime-1 minmd:w-4/5">
      <div className="justify-center  flex mt-[11rem]">
        <Image src={images.titulomobile} width={370} height={360} />
      </div>
      <div className="flex font-kanit text-white -mt-[1rem] font-semibold justify-center text-[13px]">
        <p className="">El primer Talk Show en el Metaverso</p>

      </div>
      <div className="flex justify-center mt-[10rem]">
        <p className="font-kanit font-semibold text-[10px] text-white">Desliza y conoce más de este nuevo Show</p>
      </div>
    </div>
    <div className="text-white bg-dime-2 mb-32 ">
      <div className="flex justify-center mt-[5rem]">
        <Image src={images.teesperamos} />
      </div>
      <div className="flex justify-center mt-5  ml-16 mr-10 flex-col">
        <p className="text-dime-text font-kanit text-[14px] ">Phasellus molestie maximus sem a sagittis. Nulla vel neque at sapien interdum ultrices id eu ipsum. Quisque varius pellentesque pellentesque. Nulla eget tortor venenatis urna porta volutpat. Mauris in blandit turpis. Curabitur sem eros, iaculis et mollis nec, finibus ut risus. Duis et velit euismod elit interdum pulvinar. Fusce sed purus elit. Donec ac libero suscipit, auctor mauris ut, sollicitudin leo. Nullam at pellentesque lorem. Vestibulum mi libero, euismod porttitor.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <button type="button" className="text-black rounded-3xl font-kanit font-semibold px-6 py-2 text-xl bg-button-1 shadow-xl">Conocer más</button>
      </div>
      <div className="mt-[5rem] px-[2rem]">
        <Image src={images.pepeposter} />
      </div>
    </div>
    <div className="h-[350px] mb-[6rem] bg-dime-1">
      <div className="mt-6">
        <Image src={images.preparate} />
      </div>
      <div>
        <p className="text-dime-2 text-sm text-center font-kanit px-12">
          Pepe Aguilar da inicio al programa más divertido y novedoso de Latinoamérica. El primer Talk Show en el Metaverso.
        </p>
        <p className=" text-dime-2 text-sm text-center font-kanit px-8">
          En cada episodio, Pepe recibirá a celebridades internacionales para disfrutar de pláticas, música, humor y experiencias divertidas.
        </p>
      </div>
      <div className="flex mt-2 justify-center">
        <button type="button" className="text-black text-base font-bold font-kanit shadow-xl bg-button-1 mt-4 px-4 py-1 rounded-3xl">Conocer Más</button>
      </div>
    </div>
    <div className="h-screen bg-dime-2 mb-[15rem]">
      <Image src={images.invitados} />
      <div className="flex mt-[4rem] flex-row">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.checo} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Checo Pérez</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Piloto de F1</p>

          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.diego} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Diego Dreyfus</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Facilitador de conciencia</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[4rem] flex-row">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.meme} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Meme Del Real</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>

          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.meme} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Diego Dreyfus</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Facilitador de conciencia</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[4rem] flex-row">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.leo} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Leonardo Aguilar</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>

          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>
            <Image src={images.angela} width={160} height={187} />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text text-[16px]">Angela Aguilar</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>
          </div>
        </div>
      </div>
    </div>
    <div className="h-screen">
      <Image src={images.disponible} />
      <div className="flex flex-col items-center justify-center mt-10">
        <Image src={images.coffee} width={123} height={123} />
        <p className="text-center mt-5 px-[5rem] font-semibold text-dime-text font-kanit text-[15px]">Todos los jueves a las 9:00pm CDMX en tus plataformas de podcast favoritas</p>
      </div>
      <div className=" bg-dime-2 mt-[3rem] flex justify-start flex-row overflow-hidden no-scrollbar overflow-x-scroll">
        <div className="text-black min-w-[289px] ml-10 px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black min-w-[289px] px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black min-w-[289px] px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black min-w-[289px] px-4">
          <Image src={images.pepeposter2} />
        </div>
      </div>
      <div className="h-[700px] mt-[4rem] mb-0 bg-dime-2">
        <Image src={images.acompananos} width={500} height={100} />
        <div className="flex justify-start items-start px-10">
          <div className="bg-dime-1 mt-10 flex justify-start flex-col rounded-3xl w-full px-4 h-[30rem]">
            <p className="mt-10 text-center font-kanit text-[12px] font-semibold text-dime-2">
              Quieres asistir al programa en vivo?
            </p>
            <div className="mt-10 px-2 flex flex-col items-start">
              <div className="flex flex-col">
                <p className="text-[10px] py-3 font-kanit font-semibold text-dime-2">Nombre y Apellidos</p>
                <input type="text" id="nombre" required />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] py-3 font-kanit font-semibold text-dime-2">Edad</p>
                <input type="text" id="nombre" required />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] py-3 font-kanit font-semibold text-dime-2">Correo electronico</p>
                <input type="text" id="nombre" required />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] py-3 font-kanit font-semibold text-dime-2">Cuentas con un Oculus Quest 2?</p>
                <input type="text" id="nombre" required />
              </div>
            </div>
            <div className="flex justify-end items-end mt-10">
              <button type="submit" className="bg-button-1 px-10 py-2 rounded-3xl font-kanit font-bold text-lg">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] mt-10">
        <div className="flex flex-row justify-between items-center px-12">
          <p className="font-kanit text-[12px]">Inicio</p>
          <p className="font-kanit text-[12px]">Youtube</p>
          <p className="font-kanit text-[12px]">Spotify</p>
          <p className="font-kanit text-[12px]">Acompañanos</p>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Image src={images.logofooter} width={300} height={80} />
        </div>
        <div className="flex items-center flex-row justify-between px-8 mt-12">
          <Image src={images.spatial} width={90} height={34} onClick />
          <Image src={images.nakedmeta} width={120} height={20} />
          <Image src={images.ready} width={50} height={34} />
        </div>
        <div className="flex justify-center mt-12">
          <p className="font-kanit text-[12px]">2022. Dime La Meta. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
