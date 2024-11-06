// Komponen baris pekerjaan (RowRiwayatpekerjaan)
function RowRiwayatpekerjaan(props: any) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-pink-200 p-4 my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Menambahkan kelas text-black untuk mengubah warna teks menjadi hitam */}
        <div className="text-center text-black">{props.Tahunkerja}</div>
        <div className="text-center text-black">{props.Instansi}</div>
        <div className="text-center text-black">{props.pekerjaan}</div>
      </div>
    </div>
  );
}

// Komponen Riwayat Pekerjaan
export default function Riwayatpekerjaan() {
  return (
    <div className="container mx-auto p-4 text-center pt-20">
      <h2 className="text-3xl font-bold text-black-800 mb-8">Riwayat Pekerjaan</h2>
      
      {/* Menampilkan Riwayat Pekerjaan menggunakan RowRiwayatpekerjaan */}
      <RowRiwayatpekerjaan 
        Tahunkerja="2023" 
        Instansi="Apotek Al Ma'soem" 
        pekerjaan="Kasir"
      />
      <RowRiwayatpekerjaan 
        Tahunkerja="2024" 
        Instansi="Sapphire City Park Cafe" 
        pekerjaan="Staff Accounting"
      />
      <RowRiwayatpekerjaan 
        Tahunkerja="2025" 
        Instansi="Bank BRI" 
        pekerjaan="Teller"
      />
      <RowRiwayatpekerjaan 
        Tahunkerja="2026" 
        Instansi="Hotel Sapphire" 
        pekerjaan="Accounting"
      />
    </div>
  );
}
