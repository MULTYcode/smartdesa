import { CreateOrderType } from "../types/createOrder.type";

export default function useFetchCreateOrder() {
  const tableData: CreateOrderType[] = [
    {
      id: 1,
      number: "APL-CR1-010425",
      customer: {
        id: 1,
        name: "Andi Wijaya",
      },
      pickupAddress: "Jl. Melati No.10, Jakarta",
      pickupDateTime: "2025-04-22T08:00:00",
      deliveryAddress: "Jl. Mawar No.5, Bandung",
      deliveryDateTime: "2025-04-23T15:00:00",
      package: {
        id: 1,
        type: "Dokument",
      },
      quantity: 2,
      weightVolume: 1.2,
      specialInstructions: "Jangan dilipat",
      vehicle: {
        id: 1,
        type: "Motor",
      },
      driver: {
        id: 1,
        name: "Doni Saputra",
      },
      payment: {
        id: 1,
        method: "Cash",
      },
    },
    {
      id: 2,
      number: "APL-CR2-010425",
      customer: {
        id: 1,
        name: "Rina Sari",
      },
      pickupAddress: "Jl. Sudirman No.15, Jakarta",
      pickupDateTime: "2025-04-22T09:00:00",
      deliveryAddress: "Jl. Asia Afrika No.22, Bandung",
      deliveryDateTime: "2025-04-23T16:00:00",
      package: {
        id: 1,
        type: "Elektronik",
      },
      quantity: 1,
      weightVolume: 3.5,
      specialInstructions: "Fragile",
      vehicle: {
        id: 1,
        type: "Van",
      },
      driver: {
        id: 1,
        name: "Agus Salim",
      },
      payment: {
        id: 1,
        method: "Transfer",
      },
    },
    {
      id: 3,
      number: "APL-CR3-010425",
      customer: {
        id: 1,
        name: "Budi Prasetyo",
      },
      pickupAddress: "Jl. Kemuning No.9, Surabaya",
      pickupDateTime: "2025-04-22T10:00:00",
      deliveryAddress: "Jl. Kamboja No.1, Malang",
      deliveryDateTime: "2025-04-22T18:00:00",
      package: {
        id: 1,
        type: "Pakaian",
      },
      quantity: 5,
      weightVolume: 6.0,
      specialInstructions: "Tidak boleh basah",
      vehicle: {
        id: 1,
        type: "Pickup",
      },
      driver: {
        id: 1,
        name: "Slamet Riyadi",
      },
      payment: {
        id: 1,
        method: "COD",
      },
    },
    {
      id: 4,
      number: "APL-CR4-010425",
      customer: {
        id: 1,
        name: "Siti Aminah",
      },
      pickupAddress: "Jl. Merdeka No.7, Medan",
      pickupDateTime: "2025-04-22T11:00:00",
      deliveryAddress: "Jl. Gatot Subroto No.3, Pekanbaru",
      deliveryDateTime: "2025-04-23T19:00:00",
      package: {
        id: 1,
        type: "Makanan",
      },
      quantity: 10,
      weightVolume: 8.0,
      specialInstructions: "Jangan dibalik",
      vehicle: {
        id: 1,
        type: "Box",
      },
      driver: {
        id: 1,
        name: "Ridwan Hakim",
      },
      payment: {
        id: 1,
        method: "E-Wallet",
      },
    },
    {
      id: 5,
      number: "APL-CR5-010425",
      customer: {
        id: 1,
        name: "Dedi Kurniawan",
      },
      pickupAddress: "Jl. Riau No.2, Bandung",
      pickupDateTime: "2025-04-22T12:30:00",
      deliveryAddress: "Jl. Hasanudin No.20, Jakarta",
      deliveryDateTime: "2025-04-24T10:00:00",
      package: {
        id: 1,
        type: "Peralatan Rumah Tangga",
      },
      quantity: 3,
      weightVolume: 12.5,
      specialInstructions: "Hindari jalan berlubang",
      vehicle: {
        id: 1,
        type: "Pickup",
      },
      driver: {
        id: 1,
        name: "Joko Sembiring",
      },
      payment: {
        id: 1,
        method: "Transfer",
      },
    },
    {
      id: 6,
      number: "APL-CR6-010425",
      customer: {
        id: 1,
        name: "Wulan Fitri",
      },
      pickupAddress: "Jl. Teuku Umar No.4, Bali",
      pickupDateTime: "2025-04-22T14:00:00",
      deliveryAddress: "Jl. Diponegoro No.9, Lombok",
      deliveryDateTime: "2025-04-23T20:00:00",
      package: {
        id: 1,
        type: "Kerajinan",
      },
      quantity: 7,
      weightVolume: 4.3,
      specialInstructions: "Jaga kelembaban",
      vehicle: {
        id: 1,
        type: "Van",
      },
      driver: {
        id: 1,
        name: "Gusti Arya",
      },
      payment: {
        id: 1,
        method: "Cash",
      },
    },
    {
      id: 7,
      number: "APL-CR7-010425",
      customer: {
        id: 1,
        name: "Fajar Nugroho",
      },
      pickupAddress: "Jl. Ahmad Yani No.8, Semarang",
      pickupDateTime: "2025-04-22T13:00:00",
      deliveryAddress: "Jl. Imam Bonjol No.12, Yogyakarta",
      deliveryDateTime: "2025-04-23T14:00:00",
      package: {
        id: 1,
        type: "Buku",
      },
      quantity: 15,
      weightVolume: 10.2,
      specialInstructions: "Hindari air",
      vehicle: {
        id: 1,
        type: "Motor",
      },
      driver: {
        id: 1,
        name: "Riko Satria",
      },
      payment: {
        id: 1,
        method: "COD",
      },
    },
    {
      id: 8,
      number: "APL-CR8-010425",
      customer: {
        id: 1,
        name: "Linda Mawar",
      },
      pickupAddress: "Jl. Cempaka No.3, Palembang",
      pickupDateTime: "2025-04-22T15:30:00",
      deliveryAddress: "Jl. Beringin No.5, Jambi",
      deliveryDateTime: "2025-04-23T17:00:00",
      package: {
        id: 1,
        type: "Alat Tulis",
      },
      quantity: 6,
      weightVolume: 2.1,
      specialInstructions: "Harus sampai hari ini",
      vehicle: {
        id: 1,
        type: "Box",
      },
      driver: {
        id: 1,
        name: "Eka Pratama",
      },
      payment: {
        id: 1,
        method: "Transfer",
      },
    },
    {
      id: 9,
      number: "APL-CR9-010425",
      customer: {
        id: 1,
        name: "Teguh Saputra",
      },
      pickupAddress: "Jl. Sudirman No.99, Makassar",
      pickupDateTime: "2025-04-22T17:00:00",
      deliveryAddress: "Jl. Pattimura No.45, Manado",
      deliveryDateTime: "2025-04-24T12:00:00",
      package: {
        id: 1,
        type: "Elektronik",
      },
      quantity: 4,
      weightVolume: 6.8,
      specialInstructions: "Kemas dengan aman",
      vehicle: {
        id: 1,
        type: "Van",
      },
      driver: {
        id: 1,
        name: "Fikri Anwar",
      },
      payment: {
        id: 1,
        method: "E-Wallet",
      },
    },
    {
      id: 10,
      number: "APL-CR10-010425",
      customer: {
        id: 1,
        name: "Nadia Lestari",
      },
      pickupAddress: "Jl. Pahlawan No.21, Balikpapan",
      pickupDateTime: "2025-04-22T18:00:00",
      deliveryAddress: "Jl. Kalimantan No.8, Samarinda",
      deliveryDateTime: "2025-04-23T21:00:00",
      package: {
        id: 1,
        type: "Kosmetik",
      },
      quantity: 9,
      weightVolume: 5.0,
      specialInstructions: "Tidak boleh terkena panas",
      vehicle: {
        id: 1,
        type: "Box",
      },
      driver: {
        id: 1,
        name: "Andra Putra",
      },
      payment: {
        id: 1,
        method: "Cash",
      },
    },
  ];

  return { tableData };
}
