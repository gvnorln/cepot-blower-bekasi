export const SAMPLE_PRODUCTS = [
  {
    id: "kursi-futura",
    title: "Kursi Futura",
    category: "Kursi",
    image: "/kursi-futura.png",
    short: "Sewa kursi futura (no cover / cover / pita)",
    variants: [
      { name: "50 pcs no cover", price: 400000, minOrder: 50, pricePerPcs: 400000 / 50 },
      { name: "100 pcs no cover", price: 800000, minOrder: 100, pricePerPcs: 800000 / 100 },
      { name: "50 pcs + cover", price: 500000, minOrder: 50, pricePerPcs: 500000 / 50 },
      { name: "100 pcs + cover", price: 1000000, minOrder: 100, pricePerPcs: 1000000 / 100 },
      { name: "50 pcs + cover + pita", price: 600000, minOrder: 50, pricePerPcs: 600000 / 50 },
    ],
    specs: [
      "50 pcs no cover: 400.000",
      "100 pcs no cover: 800.000",
      "50 pcs + cover: 500.000",
      "100 pcs + cover: 1.000.000",
      "50 pcs + cover + pita: 600.000",
      "Minimal sewa 50 pcs",
      "Warna cover: hitam/putih",
      "Pita bisa request"
    ]
  },
  {
    id: "kipas-blower",
    title: "Kipas Blower",
    category: "Blower",
    image: "/kipas-blower-embun.png",
    short: "Sewa kipas blower embun untuk acara",
    variants: [
      { name: "2 unit", price: 500000, minOrder: 2, pricePerUnit: 500000 / 2 },
      { name: "3 unit", price: 750000, minOrder: 3, pricePerUnit: 750000 / 3 },
      { name: "4 unit", price: 1000000, minOrder: 4, pricePerUnit: 1000000 / 4 },
      { name: "5 unit", price: 1250000, minOrder: 5, pricePerUnit: 1250000 / 5 },
      { name: "6 unit", price: 1500000, minOrder: 6, pricePerUnit: 1500000 / 6 },
    ],
    specs: [
      "2 unit: 500.000",
      "3 unit: 750.000",
      "4 unit: 1.000.000",
      "5 unit: 1.250.000",
      "6 unit: 1.500.000",
      "Minimal sewa 2 unit",
      "Free instalasi",
      "Free kabel roll 15m",
      "Daya 250-350 watt/unit"
    ]
  },
  {
    id: "ac-standing-5pk",
    title: "AC Standing 5 PK",
    category: "AC",
    image: "/ac-standing-5pk.png",
    short: "AC standing 5PK untuk acara indoor",
    variants: [
      { name: "2 unit", price: 1400000, minOrder: 2, pricePerUnit: 1400000 / 2 },
      { name: "3 unit", price: 2100000, minOrder: 3, pricePerUnit: 2100000 / 3 },
      { name: "4 unit", price: 2800000, minOrder: 4, pricePerUnit: 2800000 / 4 },
      { name: "5 unit", price: 3500000, minOrder: 5, pricePerUnit: 3500000 / 5 },
      { name: "6 unit", price: 4200000, minOrder: 6, pricePerUnit: 4200000 / 6 },
    ],
    specs: [
      "2 unit: 1.400.000",
      "3 unit: 2.100.000",
      "4 unit: 2.800.000",
      "5 unit: 3.500.000",
      "6 unit: 4.200.000",
      "Minimal sewa 2 unit",
      "Listrik 5.300 VA / 5.000 watt per unit",
      "Wajib 3 phase (RST)",
      "Free instalasi"
    ]
  },
  {
    id: "ac-standing-1-5pk",
    title: "AC Standing 1.5 PK",
    category: "AC",
    image: "/ac-standing-1.5pk.png",
    short: "AC standing 1.5PK untuk acara indoor",
    variants: [
      { name: "2 unit", price: 900000, minOrder: 2, pricePerUnit: 900000 / 2 },
      { name: "3 unit", price: 1350000, minOrder: 3, pricePerUnit: 1350000 / 3 },
      { name: "4 unit", price: 1800000, minOrder: 4, pricePerUnit: 1800000 / 4 },
      { name: "5 unit", price: 2250000, minOrder: 5, pricePerUnit: 2250000 / 5 },
      { name: "6 unit", price: 2700000, minOrder: 6, pricePerUnit: 2700000 / 6 },
    ],
    specs: [
      "2 unit: 900.000",
      "3 unit: 1.350.000",
      "4 unit: 1.800.000",
      "5 unit: 2.250.000",
      "6 unit: 2.700.000",
      "Minimal sewa 2 pcs",
      "Listrik 900 watt/unit",
      "Pipa pembuangan max 1.5m",
      "Indoor only"
    ]
  },
  {
    id: "rolltop-prasmanan",
    title: "Rolltop Prasmanan",
    category: "Prasmanan",
    image: "/rolltop-prasmanan.png",
    short: "Sewa rolltop prasmanan lengkap",
    variants: [
      { name: "5 pcs", price: 300000, minOrder: 5, pricePerPcs: 300000 / 5 },
      { name: "10 pcs", price: 600000, minOrder: 10, pricePerPcs: 600000 / 10 },
      { name: "15 pcs", price: 900000, minOrder: 15, pricePerPcs: 900000 / 15 },
      { name: "20 pcs", price: 1200000, minOrder: 20, pricePerPcs: 1200000 / 20 },
      { name: "25 pcs", price: 1500000, minOrder: 25, pricePerPcs: 1500000 / 25 },
    ],
    specs: [
      "5 pcs: 300.000",
      "10 pcs: 600.000",
      "15 pcs: 900.000",
      "20 pcs: 1.200.000",
      "25 pcs: 1.500.000",
      "Include sendok & pemanas",
      "Barang datang bersih - pulang bersih"
    ]
  },
  {
    id: "piring-set",
    title: "Piring + Sendok + Garpu",
    category: "Prasmanan",
    image: "/piring-set.png",
    short: "Set alat makan untuk acara",
    variants: [
      { name: "100 pcs", price: 250000, minOrder: 100, pricePerPcs: 250000 / 100 },
      { name: "150 pcs", price: 375000, minOrder: 150, pricePerPcs: 375000 / 150 },
      { name: "200 pcs", price: 500000, minOrder: 200, pricePerPcs: 500000 / 200 },
      { name: "250 pcs", price: 625000, minOrder: 250, pricePerPcs: 625000 / 250 },
      { name: "300 pcs", price: 750000, minOrder: 300, pricePerPcs: 750000 / 300 },
    ],
    specs: [
      "100 pcs: 250.000",
      "150 pcs: 375.000",
      "200 pcs: 500.000",
      "250 pcs: 625.000",
      "300 pcs: 750.000",
      "Minimal sewa 100 pcs",
      "Datang bersih - pulang bersih"
    ]
  },
  {
    id: "lantai-kaca",
    title: "Lantai Kaca Akrilik",
    category: "Dekorasi",
    image: "/lantai-kaca-arkrilik.png",
    short: "Lantai kaca akrilik untuk pelaminan / panggung",
    variants: [
      { name: "6 kotak", price: 720000, minOrder: 6, pricePerKotak: 720000 / 6 },
      { name: "8 kotak", price: 960000, minOrder: 8, pricePerKotak: 960000 / 8 },
      { name: "9 kotak", price: 1080000, minOrder: 9, pricePerKotak: 1080000 / 9 },
      { name: "10 kotak", price: 1200000, minOrder: 10, pricePerKotak: 1200000 / 10 },
      { name: "12 kotak", price: 1440000, minOrder: 12, pricePerKotak: 1440000 / 12 },
    ],
    specs: [
      "6 kotak: 720.000",
      "8 kotak: 960.000",
      "9 kotak: 1.080.000",
      "10 kotak: 1.200.000",
      "12 kotak: 1.440.000",
      "Minimal sewa 6 kotak"
    ]
  },
  {
    id: "meja-kotak-multifungsi",
    title: "Meja Kotak Multifungsi",
    category: "Meja",
    image: "/meja-kotak.png",
    short: "Meja kotak multifungsi untuk acara",
    variants: [
      { name: "1 pcs", price: 60000, minOrder: 1, pricePerPcs: 60000 },
      { name: "2 pcs", price: 120000, minOrder: 2, pricePerPcs: 120000 / 2 },
      { name: "3 pcs", price: 180000, minOrder: 3, pricePerPcs: 180000 / 3 },
      { name: "4 pcs", price: 240000, minOrder: 4, pricePerPcs: 240000 / 4 },
      { name: "5 pcs", price: 300000, minOrder: 5, pricePerPcs: 300000 / 5 },
    ],
    specs: [
      "Panjang: 120cm",
      "Lebar: 60cm",
      "Tinggi: 90cm",
      "1 pcs: 60.000",
      "2 pcs: 120.000",
      "3 pcs: 180.000",
      "4 pcs: 240.000",
      "5 pcs: 300.000"
    ]
  },
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
      "1000 watt: 800.000",
      "2000 watt: 1.300.000",
      "3000 watt: 1.700.000",
      "4000 watt: 1.900.000",
      "Include mixer & mic",
      "Include operator 1 orang",
      "Max 8 jam (lebih = +100rb/jam)"
    ]
  },
  {
    id: "entertainment-organ",
    title: "Organ Tunggal",
    category: "Entertainment",
    image: "/entertainment-organ.png",
    short: "Organ tunggal lengkap sound 2600 watt",
    variants: [
      { name: "Full set", price: 2400000, minOrder: 1, pricePerUnit: 2400000 },
    ],
    specs: [
      "Keyboard 1 player",
      "Singer male/female",
      "Durasi perform 2-3 jam",
      "Overtime: 150rb/player"
    ]
  },
  {
    id: "entertainment-akustik",
    title: "Akustik Band",
    category: "Entertainment",
    image: "/entertainment.png",
    short: "Akustik band lengkap sound 3200 watt",
    variants: [
      { name: "Full band", price: 3500000, minOrder: 1, pricePerUnit: 3500000 },
    ],
    specs: [
      "Keyboard 1 player",
      "Gitar 1 player",
      "Cajon 1 player",
      "Singer male/female",
      "Perform 2-3 jam"
    ]
  },
  {
    id: "lampu-beam",
    title: "Lampu Beam",
    category: "Lighting",
    image: "/lampu-beam.png",
    short: "Sewa lampu beam untuk acara",
    variants: [
      { name: "1 set (2 pcs)", price: 900000, minOrder: 1, pricePerUnit: 900000 / 2 },
      { name: "2 set (4 pcs)", price: 1400000, minOrder: 2, pricePerUnit: 1400000 / 4 },
    ],
    specs: [
      "1 set (2 pcs): 900.000",
      "2 set (4 pcs): 1.400.000",
      "Include operator standby",
      "Kerusakan akibat jatuh ditanggung penyewa"
    ]
  },
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
      "Dry Ice Low Fog: 900.000",
      "Include operator 1 orang",
      "Jika sewa dengan Lampu Beam -> operator tetap 1 orang"
    ]
  },
  {
    id: "dispenser-juice",
    title: "Dispenser Juice",
    category: "Prasmanan",
    image: "/dispencer-juice.png",
    short: "Dispenser juice untuk prasmanan",
    variants: [
      { name: "1 pcs", price: 60000, minOrder: 1, pricePerUnit: 60000 },
      { name: "2 pcs", price: 120000, minOrder: 2, pricePerUnit: 120000 / 2 },
      { name: "3 pcs", price: 180000, minOrder: 3, pricePerUnit: 180000 / 3 },
    ],
    specs: [
      "1 pcs: 60.000",
      "2 pcs: 120.000",
      "3 pcs: 180.000"
    ]
  }
];
