import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import Iframe from "react-iframe";

const Photos: NextComponentType = () => {
  return (
    <div className="w-full row p-4">
      <p className="text-4xl p-2 border-l-8 border-emerald-600" id="photos">
        Photos
      </p>
      <div className="w-full grid grid-cols-1 p-4 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img1.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Conferred By Youth Affairs & Sports Minister Anurag Thakur
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img2.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to the UN Resident Coordinator Ms.
            Deirdre Boyd
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img3.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to the CM of Arunachal Pradesh Pema
            Khandu
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img4.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Manoj Sinha <br></br>
            (Lieutenant Governor of Jammu Kashmir)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img5.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Presentation of project to Prof. Ram Madhav
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img6.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Prof. H.C Verma
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/imgWithProf.jpg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Saurabh Shrivastav<br></br>
            (Former chairman of Nasscom)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img7.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to Dr. Devansh Yadav<br></br>
            (IAS, Changlang Arunachal Pradesh)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img8.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to SKAUST Chief (Jammu)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img9.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Talk with the Horticulture Team (Senior)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img10.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Talk with the Horticulture Team (Senior)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img11.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            SabjiKothi on Thela
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img12.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Customer with SabjiKothi
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/SabjiKothi.jpeg"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Visual of SabjiKothi with Fruits and Vegetables
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/Team.JPG"
            width={400}
            height={400}
            className="object-cover rounded "
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            MedTech IIT Kanpur
          </p>
        </div>
      </div>

      <p className="text-4xl p-2 border-l-8 border-emerald-600">Videos</p>
      <div className="w-full grid grid-cols-1 p-4 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://youtube.com/embed/Hkw_DshpD9k"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fcvBBfiToCk"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/xkc5BG0lylY"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fkRwxSoD6Ro"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/jMkMuVtViAo"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fb4wdTeRYj0"
            width="350px"
            height="350px"
            className="rounded"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Photos;
