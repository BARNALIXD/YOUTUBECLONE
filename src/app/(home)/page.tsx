import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start mt-8 ml-8">
      <Image src="/logo.svg" height={80} width={110} alt="LOGO" />
      <p className="text-5xl font-extrabold mt-2">NewTube2</p>
    </div>
  );
}
