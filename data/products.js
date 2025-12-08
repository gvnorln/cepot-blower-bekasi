export const SAMPLE_PRODUCTS = [
  // ======================================================================
  // KURSI FUTURA
  // ======================================================================
  {
    id: "kursi-futura",
    title: "Kursi Futura",
    category: "Kursi",
    image: "/kursi-futura.png",
    short: "Sewa kursi futura (no cover / cover / pita)",
    variants: [
      {
        name: "Kursi Futura Polos",
        price: 400000,
        minOrder: 50,
        pricePerUnit: 400000 / 50,
      },
      {
        name: "Kursi Futura Cover Putih",
        price: 800000,
        minOrder: 100,
        pricePerUnit: 800000 / 100,
      },
      {
        name: "Kursi Futura Cover Hitam",
        price: 500000,
        minOrder: 50,
        pricePerUnit: 500000 / 50,
      },
      {
        name: "Kursi Futura Cover Putih + Pita",
        price: 1000000,
        minOrder: 100,
        pricePerUnit: 1000000 / 100,
      },
      {
        name: "Kursi Futura Cover Hitam + Pita",
        price: 600000,
        minOrder: 50,
        pricePerUnit: 600000 / 50,
      },
    ],
    specs: [
      "Minimal sewa 50 pcs",
      "Warna cover hitam/putih",
      "Pita bisa request",
    ],
  },

  // ======================================================================
  // KIPAS BLOWER
  // ======================================================================
  {
    id: "kipas-blower",
    title: "Kipas Blower",
    category: "Blower",
    image: "/kipas-blower-embun.png",
    short: "Sewa kipas blower embun untuk acara",
    variants: [
      {
        name: "Default",
        price: 500000,
        minOrder: 2,
        pricePerUnit: 500000 / 2,
      },
    ],
    specs: [
      "Minimal sewa 2 unit",
      "Free instalasi",
      "Free kabel roll 15m",
      "Daya 250-350 watt/unit",
    ],
  },

  // ======================================================================
  // AC Standing 5 PK
  // ======================================================================
  {
    id: "ac-standing-5pk",
    title: "AC Standing 5 PK",
    category: "AC",
    image: "/ac-standing-5pk.png",
    short: "AC standing 5PK untuk acara indoor",
    variants: [
      {
        name: "Default",
        price: 1400000,
        minOrder: 2,
        pricePerUnit: 1400000 / 2,
      },
    ],
    specs: [
      "Minimal sewa 2 unit",
      "Listrik 5.300 VA / 5.000 watt per unit",
      "Wajib 3 phase (RST)",
      "Free instalasi",
    ],
  },

  // ======================================================================
  // AC Standing 1.5 PK
  // ======================================================================
  {
    id: "ac-standing-1-5pk",
    title: "AC Standing 1.5 PK",
    category: "AC",
    image: "/ac-standing-1.5pk.png",
    short: "AC standing 1.5PK untuk acara indoor",
    variants: [
      {
        name: "Default",
        price: 900000,
        minOrder: 2,
        pricePerUnit: 900000 / 2,
      },
    ],
    specs: ["Minimal sewa 2 unit", "Listrik 900 watt/unit", "Indoor only"],
  },

  // ======================================================================
  // Rolltop
  // ======================================================================
  {
    id: "rolltop-prasmanan",
    title: "Rolltop Prasmanan",
    category: "Prasmanan",
    image: "/rolltop-prasmanan.png",
    short: "Sewa rolltop prasmanan lengkap",
    variants: [
      {
        name: "Default",
        price: 300000,
        minOrder: 5,
        pricePerUnit: 300000 / 5,
      },
    ],
    specs: ["Include sendok & pemanas", "Barang datang bersih - pulang bersih"],
  },

  // ======================================================================
  // Piring set
  // ======================================================================
  {
    id: "piring-set",
    title: "Piring + Sendok + Garpu",
    category: "Prasmanan",
    image: "/piring-set.png",
    short: "Set alat makan untuk acara",
    variants: [
      {
        name: "Default",
        price: 250000,
        minOrder: 100,
        pricePerUnit: 250000 / 100,
      },
    ],
    specs: ["Minimal sewa 100 pcs", "Datang bersih - pulang bersih"],
  },

  // ======================================================================
  // Lantai kaca
  // ======================================================================
  {
    id: "lantai-kaca",
    title: "Lantai Kaca Akrilik",
    category: "Dekorasi",
    image: "/lantai-kaca-arkrilik.png",
    short: "Lantai kaca akrilik untuk pelaminan / panggung",
    variants: [
      {
        name: "Default",
        price: 720000,
        minOrder: 6,
        pricePerUnit: 720000 / 6,
      },
    ],
    specs: ["Minimal sewa 6 kotak"],
  },

  // ======================================================================
  // Meja kotak
  // ======================================================================
  {
    id: "meja-kotak-multifungsi",
    title: "Meja Kotak Multifungsi",
    category: "Meja",
    image: "/meja-kotak.png",
    short: "Meja kotak multifungsi untuk acara",
    variants: [
      {
        name: "Default",
        price: 60000,
        minOrder: 1,
        pricePerUnit: 60000,
      },
    ],
    specs: ["Panjang: 120cm • Lebar: 60cm • Tinggi: 90cm"],
  },

  // ======================================================================
  // Sound System
  // ======================================================================
  {
    id: "sound-system",
    title: "Sound System",
    category: "Sound",
    image: "/sound-system.png",
    short: "Sound system lengkap untuk acara",
    variants: [
      { name: "1000 watt", price: 800000, minOrder: 1, pricePerUnit: 800000 },
      { name: "2000 watt", price: 1300000, minOrder: 1, pricePerUnit: 1300000 },
      { name: "3000 watt", price: 1700000, minOrder: 1, pricePerUnit: 1700000 },
      { name: "4000 watt", price: 1900000, minOrder: 1, pricePerUnit: 1900000 },
    ],
    specs: [
      "Include mixer & mic",
      "Include operator 1 orang",
      "Max 8 jam (lebih = +100rb/jam)",
    ],
  },

  // ======================================================================
  // Entertainment (Gabungan Organ Tunggal + Akustik Band)
  // ======================================================================
  {
    id: "entertainment-full",
    title: "Paket Entertainment",
    category: "Entertainment",
    image: "/entertainment-group.png",
    short: "Paket hiburan acara: pilih Organ Tunggal atau Akustik Band.",
    variants: [
      {
        name: "Organ Tunggal",
        label: "Spesifikasi Organ Tunggal",
        price: 2400000,
        minOrder: 1,
        pricePerUnit: 2400000,
        specs: [
          "Sound system lengkap 2600 watt",
          "Keyboard 1 player",
          "Singer male/female",
          "Durasi perform 2–3 jam",
          "Overtime 150rb / player",
          "Sound bisa digunakan untuk akad & MC",
        ],
      },
      {
        name: "Akustik Band",
        label: "Spesifikasi Akustik Band",
        price: 3500000,
        minOrder: 1,
        pricePerUnit: 3500000,
        specs: [
          "Keyboard 1 player",
          "Gitar 1 player",
          "Cajon 1 player",
          "Singer male/female",
          "Sound system lengkap 3200 watt",
          "Durasi perform 2–3 jam",
          "Sound bisa digunakan untuk akad & MC",
        ],
      },
    ],
  },

  // ======================================================================
  // GENSET
  // ======================================================================
  {
    id: "genset",
    title: "Genset",
    category: "Genset",
    image: "/genset.png",
    short: "Sewa genset untuk acara",
    variants: [
      { name: "40 KVA", price: 2100000, minOrder: 1, pricePerUnit: 2100000 },
      { name: "60 KVA", price: 2800000, minOrder: 1, pricePerUnit: 2800000 },
      { name: "80 KVA", price: 3300000, minOrder: 1, pricePerUnit: 3300000 },
      { name: "100 KVA", price: 4000000, minOrder: 1, pricePerUnit: 4000000 },
    ],
    specs: [
      "Standby operator 1 orang",
      "Pastikan lokasi bisa masuk mobil genset",
    ],
  },

  // ======================================================================
  // Lampu beam
  // ======================================================================
  {
    id: "lampu-beam",
    title: "Lampu Beam",
    category: "Lighting",
    image: "/lampu-beam.png",
    short: "Sewa lampu beam untuk acara",
    variants: [
      {
        name: "Default",
        price: 900000,
        minOrder: 1,
        pricePerUnit: 900000 / 2,
      },
    ],
    specs: [
      "Include operator standby",
      "Kerusakan akibat jatuh ditanggung penyewa",
    ],
  },

  // ======================================================================
  // Dry Ice
  // ======================================================================
  {
    id: "dry-ice",
    title: "Mesin Dry Ice (Asap)",
    category: "Effect",
    image: "/mesin-dry-ice.png",
    short: "Mesin asap low fog untuk wedding / event",
    variants: [
      { name: "Low Fog", price: 900000, minOrder: 1, pricePerUnit: 900000 },
    ],
    specs: [
      "Include operator 1 orang",
      "Jika sewa dengan Lampu Beam -> operator tetap 1 orang",
    ],
  },

  // ======================================================================
  // Dispenser Juice
  // ======================================================================
  {
    id: "dispenser-juice",
    title: "Dispenser Juice",
    category: "Prasmanan",
    image: "/dispencer-juice.png",
    short: "Dispenser juice untuk prasmanan",
    variants: [
      { name: "1 pcs", price: 60000, minOrder: 1, pricePerUnit: 60000 },
    ],
    specs: [],
  },
];
