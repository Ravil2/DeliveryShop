import { Locations } from "@/types/shops";

export const locations: Locations = {
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
    name: 'Байсерке',
    center: [43.4798, 77.0355],
    shops: [
      {
        id: 3,
        coordinates: [43.4798, 77.0355],
        name: 'Магазин Ravil (Байсерке)',
      },
    ],
  },
  gress: {
    name: 'Гресс',
    center: [43.416, 77.0241],
    shops: [
      {
        id: 4,
        coordinates: [43.416, 77.0241],
        name: 'Магазин Ravil (Грес)',
      },
      {
        id: 5,
        coordinates: [43.416, 77.0141],
        name: 'Магазин Ravil (Грес)',
      },
    ],
  },
  pokrovka: {
    name: 'Покровка',
    center: [43.4046, 77.0092],
    shops: [
      {
        id: 6,
        coordinates: [43.4046, 77.0114],
        name: 'Магазин Ravil (Покровка)',
      },
      {
        id: 7,
        coordinates: [43.4051, 77.0092],
        name: 'Магазин Ravil (Покровка)',
      },
      {
        id: 8,
        coordinates: [43.4055, 77.012],
        name: 'Магазин Ravil (Покровка)',
      },
    ],
  },
};
