import Image from 'next/image';
import images from '../assets';

const Home = () => (
  <div className="flex bg-dime-2 justify-center px-0 flex-col">
    {/* Titulo */}
    <div className="w-full lg:items-center lg:flex lg:justify-center lg:flex-col h-[90%] lg:h-screen bg-dime-1 ">
      <div className="justify-center lg:hidden flex mt-[10rem] md:mt-[12rem]">
        <Image src={images.titulomobile} width={370} height={360} />
      </div>
      <div className="hidden lg:justify-center lg:items-center  lg:flex mt-[10rem] md:mt-[12rem]">
        <Image src={images.titulo} />
      </div>
      <div className="flex font-kanit text-white -mt-[1rem] lg:-mt-[5rem] font-semibold justify-center text-[13px] lg:text-[20px]">
        <p className="">El primer Talk Show en el Metaverso</p>

      </div>
      <div className="flex justify-center mt-[8rem] lg:mt-[10rem] mb-[2rem]">
        <p className="font-kanit font-semibold text-[10px] lg:text-[15px] text-white">Desliza y conoce más de este nuevo Show</p>
      </div>
    </div>
    {/* TE ESPERAMOS */}
    <div className="text-white lg:flex-row lg:flex bg-dime-2 mb-32 ">
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="flex justify-center mt-[5rem]">
          <Image src={images.teesperamos} />
        </div>
        <div className="flex justify-center  lg:px-[10rem] mt-5  ml-16 mr-10 flex-col">
          <p className="text-dime-text font-kanit text-[14px] ">Phasellus molestie maximus sem a sagittis. Nulla vel neque at sapien interdum ultrices id eu ipsum. Quisque varius pellentesque pellentesque. Nulla eget tortor venenatis urna porta volutpat. Mauris in blandit turpis. Curabitur sem eros, iaculis et mollis nec, finibus ut risus. Duis et velit euismod elit interdum pulvinar. Fusce sed purus elit. Donec ac libero suscipit, auctor mauris ut, sollicitudin leo. Nullam at pellentesque lorem. Vestibulum mi libero, euismod porttitor.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button type="button" className="text-black rounded-3xl font-kanit font-semibold px-6 py-2 text-xl bg-button-1 shadow-xl">Conocer más</button>
        </div>
      </div>
      <div className="mt-[5rem] lg:h-[100%] lg:w-[50%] flex justify-center items-center px-[2rem]">
        <div className="lg:h-[70%] lg:max-h-[70%]">
          <Image src={images.pepeposter} objectFit="cover" className="w-full" />
        </div>
      </div>
    </div>
    {/* PREPARATE */}
    <div className="h-[350px] lg:flex lg:justify-center lg:flex-col lg:h-[500px]  mb-[6rem] bg-dime-1">
      <div className="mt-6 flex justify-center">
        <Image src={images.preparate} />
      </div>
      <div className="lg:px-[20rem]">
        <p className="text-dime-2 md:mt-5 text-sm lg:text-xl text-center font-kanit px-12 lg:px-[10rem]">
          Pepe Aguilar da inicio al programa más divertido y novedoso de Latinoamérica. El primer Talk Show en el Metaverso.
        </p>
        <p className=" text-dime-2 text-sm text-center lg:text-xl font-kanit px-8">
          En cada episodio, Pepe recibirá a celebridades internacionales para disfrutar de pláticas, música, humor y experiencias divertidas.
        </p>
      </div>
      <div className="flex mt-2 justify-center">
        <button type="button" className="text-black text-base font-bold font-kanit shadow-xl bg-button-1 mt-4 px-4 py-1 rounded-3xl">Conocer Más</button>
      </div>
    </div>
    {/* Invitados mobile */}
    <div className="h-screen lg:hidden bg-dime-2 mb-[10rem] md:mb-[35rem]">
      <div className="flex justify-center">
        <Image src={images.invitados} />
      </div>
      <div className="flex mt-[4rem] md:space-x-10 space-x-5 md:px-10 px-4 flex-row">
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.checo} objectFit="contain" className="md:w-[100%] relative h-unset" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Checo Pérez</p>
            <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Piloto de F1</p>
          </div>
        </div>
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.diego} objectFit="contain" className="md:w-[100%] relative h-unset min-w-[160px]" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Diego Dreyfus</p>
            <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Facilitador de conciencia</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[4rem] md:space-x-10 space-x-5 md:px-10 px-4 flex-row">
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.meme} objectFit="contain" className="md:w-[100%] relative h-unset min-w-[160px]" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Meme Del Real</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>
          </div>
        </div>
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.meme} objectFit="contain" className="md:w-[100%] relative h-unset min-w-[160px]" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Diego Dreyfus</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Facilitador de conciencia</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[4rem] md:space-x-10 space-x-5 md:px-10 px-4 flex-row ">
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.leo} objectFit="contain" className="md:w-[100%] relative h-unset min-w-[160px]" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Leonardo Aguilar</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>
          </div>
        </div>
        <div className="w-[50%] max-w-[100%] min-w-[160px] flex flex-col justify-center items-center">
          <div className="w-[100%] relative">
            <Image src={images.angela} objectFit="contain" className="md:w-[100%] relative h-unset min-w-[160px]" />
          </div>
          <div>
            <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Angela Aguilar</p>
            <p className="font-kanit text-center text-dime-text text-[10px]">Artista</p>
          </div>
        </div>
      </div>
    </div>
    {/* Invitados desktop */}
    <div>
      <div className="h-screen hidden lg:flex lg:justify-center lg:flex-col bg-dime-2">
        <div className="flex justify-center">
          <Image src={images.invitados} />
        </div>
        <div className="lg:flex lg:px-[10rem] lg:mt-[4rem] lg:space-x-10 flex-row">
          <div className="">
            <div className="">
              <Image src={images.checo} />
            </div>
            <div>
              <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Checo Pérez</p>
              <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Piloto de F1</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <Image src={images.diego} />
            </div>
            <div>
              <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Diego Dreyfus</p>
              <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Piloto de F1</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <Image src={images.meme} />
            </div>
            <div>
              <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Meme Del Real</p>
              <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Artista</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <Image src={images.leo} />
            </div>
            <div>
              <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Leonardo Aguilar</p>
              <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Artista</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <Image src={images.angela} />
            </div>
            <div>
              <p className="font-kanit text-center font-bold text-dime-text md:text-[20px] text-[16px]">Angela Aguilar</p>
              <p className="font-kanit text-center text-dime-text md:text-[14px] text-[10px]">Artista</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* disponible */}
    <div className="h-screen lg:h-[70vh] lg:flex lg:flex-row mt-[8rem] md:mt-[10rem] bg-dime-2">
      <div className="lg:hidden">
        <div className="flex justify-center">
          <Image src={images.disponible} />
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-20 justify-center">
          <Image src={images.coffee} width={123} height={123} />
          <p className="text-center mt-5 px-[5rem] lg:px-[10rem] font-semibold text-dime-text font-kanit text-[15px]">Todos los jueves a las 9:00pm CDMX en tus plataformas de podcast favoritas</p>
        </div>
      </div>
      <div className="lg:w-[50%] lg:flex lg:flex-row hidden">
        <div className="lg:flex lg:justify-end lg:px-[2rem] lg:items-center w-[70%] lg:max-h-[400px]">
          <Image src={images.coffee} width={180} height={180} />
        </div>
        <div className="flex lg:max-w-[300px] lg:mr-[5rem] flex-col lg:items-end lg:flex-col mt-[5rem]">
          <Image src={images.disponiblemobile} width={400} height={200} />
          <p className="text-center mt-5 font-semibold text-dime-text font-kanit text-[15px]">Todos los jueves a las 9:00pm CDMX en tus plataformas de podcast favoritas</p>
        </div>
      </div>
      <div className=" bg-dime-2 mt-[3rem] lg:max-h-[600px] lg:w-[50%] flex justify-start flex-row overflow-hidden no-scrollbar overflow-x-scroll">
        <div className="text-black bg-dime-2 min-w-[289px] lg:min-w-[350px] lg:max-h-[300px] ml-10 px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black min-w-[289px] lg:min-w-[350px] px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black min-w-[289px] lg:min-w-[350px] px-4">
          <Image src={images.pepeposter2} />
        </div>
        <div className="text-black bg-dime-2 min-w-[289px] lg:min-w-[350px] px-4">
          <Image src={images.pepeposter2} />
        </div>
      </div>
    </div>
    {/* acompañanos */}
    <div>
      <div className="flex justify-center bg-dime-2 md:mt-[4rem] lg:mt-[20rem] mt-[12rem]">
        <Image src={images.acompananos} width={500} height={100} />
      </div>
      {/* form */}
      <div className="flex justify-start lg:px-[20rem] items-start px-10">
        <div className="bg-dime-1 mt-10 flex justify-start flex-col rounded-3xl lg:rounded-[3rem] w-full px-4 lg:px-[5rem] h-[30rem] lg:h-[23rem]">
          <p className="mt-10 text-center lg:text-left font-kanit text-[12px] lg:text-[20px] font-semibold text-dime-2">
            ¿Quieres asistir al programa en vivo?
          </p>
          <div className="mt-10 w-full px-2 flex flex-col items-start">
            <div className="w-full lg:flex">
              <div className="flex w-[100%] flex-col">
                <p className="text-[14px] py-3 font-kanit font-semibold text-dime-2">Nombre y Apellidos</p>
                <input type="text" className="w-[80%]" id="nombre" required />
              </div>
              <div className="flex w-[100%] flex-col">
                <p className="text-[14px] py-3 font-kanit font-semibold text-dime-2">Edad</p>
                <input type="text" className="w-[30%]" id="edad" required />
              </div>
            </div>
            <div className="w-full lg:flex">
              <div className="flex w-[100%] flex-col">
                <p className="text-[14px] py-3 font-kanit font-semibold text-dime-2">Correo electronico</p>
                <input type="text" className="w-[80%]" id="email" required />
              </div>
              <div className="flex w-[100%] flex-col">
                <p className="text-[14px] py-3 font-kanit font-semibold text-dime-2">Cuentas con un Oculus Quest 2?</p>
                <input type="text" className="w-[30%]" id="nombre" required />
              </div>
            </div>
          </div>
          <div className="flex justify-end lg:justify-start items-end mt-10">
            <button type="submit" className="bg-button-1 px-10 py-2 rounded-3xl font-kanit font-bold text-lg">Enviar</button>
          </div>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="h-[400px] bg-white mt-20">
      <div className="flex mt-10 flex-row justify-between items-center px-12 lg:px-[20rem]">
        <p className="font-kanit text-[12px] cursor-pointer lg:text-[16px]">Inicio</p>
        <p className="font-kanit text-[12px] cursor-pointer lg:text-[16px]">Youtube</p>
        <p className="font-kanit text-[12px] cursor-pointer lg:text-[16px]">Spotify</p>
        <p className="font-kanit text-[12px] cursor-pointer lg:text-[16px]">Acompañanos</p>
      </div>
      <div className="flex lg:hidden items-center justify-center mt-12">
        <Image src={images.logofooter} width={300} height={80} />
      </div>
      <div className="flex lg:hidden items-center flex-row justify-between px-8 lg:px-[20rem] mt-12">
        <Image src={images.spatial} width={90} height={34} onClick />
        <Image src={images.nakedmeta} width={120} height={20} />
        <Image src={images.ready} width={50} height={34} />
      </div>
      <div className="lg:flex hidden  items-center flex-row justify-between px-8 lg:px-[20rem] mt-12">
        <Image src={images.spatial} width={200} height={60} className="cursor-pointer" onClick />
        <Image src={images.nakedmeta} width={260} height={40} className="cursor-pointer" />
        <Image src={images.ready} width={100} height={70} className="cursor-pointer" />
      </div>
      <div className="flex justify-center mt-12">
        <p className="font-kanit text-[12px]">2022. Dime La Meta. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
);

export default Home;
