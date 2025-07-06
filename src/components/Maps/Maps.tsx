'use client';
import { Map, YMaps } from '@pbe/react-yandex-maps';
import { useState } from 'react';

const locations = {
  almaty: {
    name: 'Алматы',
    center: [43.238949, 76.889709],
    shops: [
      { id: 1, coordinates: [43.24, 76.89], name: 'Магазин Ravil (Алматы)' },
    ],
  },
  talgar: {
    name: 'Талгар',
    center: [43.3051, 77.2405],
    shops: [
      { id: 2, coordinates: [43.3055, 77.241], name: 'Магазин Ravil (Талгар)' },
    ],
  },
  esik: {
    name: 'Есик',
    center: [43.3525, 77.4528],
    shops: [
      { id: 3, coordinates: [43.353, 77.4532], name: 'Магазин Ravil (Есик)' },
    ],
  },
  kaptchagai: {
    name: 'Капчагай',
    center: [43.8456, 77.0818],
    shops: [
      {
        id: 4,
        coordinates: [43.846, 77.0825],
        name: 'Магазин Ravil (Капчагай)',
      },
    ],
  },
  pokrovka: {
    name: 'Покровка',
    center: [43.9065, 77.0117],
    shops: [
      {
        id: 5,
        coordinates: [43.907, 77.012],
        name: 'Магазин Ravil (Покровка)',
      },
    ],
  },
};

export default function Maps() {
  const [currentLocation, setCurrentLocation] = useState('almaty');
  const currentLocationData = locations[currentLocation];

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '1ac61b8a-843f-454f-abd8-a651a3c60f00',
      }}
    >
      <section>
        <div className="flex flex-col justify-center xl:max-w-[1208px]">
          <h2 className="mb-4 md:mb-8 xl:mb-10 text-2xl xl:text-4xl text-left font-bold">
            Наши магазины
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-5">
            {(Object.keys(locations) as LocationKey[]).map(key => (
              <button key={key} onClick={() => setCurrentLocation(key)}>
                {locations[key].name}
              </button>
            ))}
          </div>
          <Map
            defaultState={{ center: currentLocationData.center, zoom: 13 }}
            width="1208px"
            height="354px"
          />
        </div>
      </section>
    </YMaps>
  );
}
