import Image from "next/image";
import data from "@/data.json";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

type LinkCardProps = {
  title: string;
  image?: string;
  url: string;
};

function LinkCard({ title, url, image }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-stone-300 mb-3 max-w-3xl hover:shadow-xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-800 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mt-20 justify-center w-full mx-auto px-8 ">
      <Image
        alt={data.name}
        src={data.avatar}
        width={250}
        height={250}
        className="rounded-full"
      />
      <div className="mb-20 w-10/12 text-center">
        <h1 className="font-bold mt-4 text-xl text-slate-300 uppercase font-mono">
          @{data.name}
        </h1>
        <p className="font-normal text-slate-400 w-full max-w-8xl">
          {data.desc}
        </p>
      </div>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}

      <div className="flex flex-row gap-4 mt-6">
        <a href="https://www.linkedin.com/in/aman-nord2941/">
          <BsLinkedin className="text-lime-500 text-3xl transition hover:scale-105" />
        </a>
        <a href="https://github.com/Aman0430">
          <BsGithub className="text-lime-500 text-3xl transition hover:scale-105" />
        </a>
        <a href="https://www.instagram.com/aman.2941/">
          <BsInstagram className="text-lime-500 text-3xl transition hover:scale-105" />
        </a>
      </div>
    </div>
  );
}
