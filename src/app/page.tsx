import HomeComponents from "@/components/custom/home-component";

export default async function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-24">
      <div className="flex flex-col   w-full max-w-60 p-8 gap-8  ">
        <HomeComponents />
      </div>
    </main>
  );
}
