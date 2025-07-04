import Actions from '@/components/Actions/Actions';
import NewProducts from '@/components/NewProducts/NewProducts';
import Slider from '@/components/Slider/Slider';

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Slider />
      <div className="px-[max(12,calc((100%-1208px)))] flex flex-col gap-y-20 md:mb-25 xl:mb-30 md:items-center">
        <Actions />
        <NewProducts />
      </div>
    </main>
  );
}
