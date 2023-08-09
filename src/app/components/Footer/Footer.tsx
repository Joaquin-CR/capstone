import Image from 'next/image';
import LogoPocket from '../../../../public/images/LogoThePocket/LogoThePocket.webp';
import FacebookLogo from '../../../../public/images/SocialLogos/Facebook/Facebook.webp';
import InstaLogo from '../../../../public/images/SocialLogos/Instagram/Insta.webp';
import TiktokLogo from '../../../../public/images/SocialLogos/Tiktok/Tiktok.webp';

export default function Footer() {
  const content = (
    <>
      <div className="hidden md:flex flex-col bg-black text-white w-full h-56 justify-between">
        <div className="flex justify-between mr-20 mt-8">
          <div className="flex ml-4">
            <Image className="h-14 w-20" src={LogoPocket} alt={'Logo'} />
            <div className="ml-7 font-AlataR text-lg">
              <p>The Pocket</p>
              <p>1410 North Conway Ave, Mission, TX</p>
              <p>(956) 591-0876</p>
            </div>
          </div>
          <div className="flex text-xl font-AlataR">
            <div className="mr-16 cursor-pointer">Shop</div>
            <div className="mr-16 cursor-pointer">Store Binder</div>
            <div className="mr-16 cursor-pointer">Calendar Events</div>
            <div className="mr-20 cursor-pointer">My Binder</div>
          </div>
        </div>
        <div className="flex justify-between mx-6 mb-5">
          <div className="flex">
            <Image
              className="w-7 h-7"
              src={FacebookLogo}
              alt={'Facebook logo'}
            ></Image>
            <Image
              className="mx-4 w-7 h-7"
              src={InstaLogo}
              alt={'Instagram Logo'}
            ></Image>
            <Image
              className="w-7 h-7"
              src={TiktokLogo}
              alt={'Tiktok Logo'}
            ></Image>
          </div>
          <div className="text-lg font-AlataR mr-8">The Pocket</div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="md:hidden bg-black text-white w-full items-center justify-center">
        <div className="text-xl font-AlataR items-center justify-center my-7">
          <div className="flex items-center justify-center mb-3">Shop</div>
          <div className="flex items-center justify-center mb-3">
            Store Binder
          </div>
          <div className="flex items-center justify-center mb-3">
            Calendar Events
          </div>
          <div className="flex items-center justify-center">My Binder</div>
        </div>
        <div className="flex ml-4 items-center justify-center">
          <Image className="h-14 w-20" src={LogoPocket} alt={'Logo'} />
          <div className="ml-7 font-AlataR text-sm">
            <p>The Pocket</p>
            <p>1410 North Conway Ave, Mission, TX</p>
            <p>(956) 591-0876</p>
          </div>
        </div>
        <div className="flex justify-center mx-6 my-7">
          <div className="flex justify-center">
            <Image
              className="w-7 h-7"
              src={FacebookLogo}
              alt={'Facebook logo'}
            ></Image>
            <Image
              className="mx-4 w-7 h-7"
              src={InstaLogo}
              alt={'Instagram Logo'}
            ></Image>
            <Image
              className="w-7 h-7"
              src={TiktokLogo}
              alt={'Tiktok Logo'}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
  return content;
}
