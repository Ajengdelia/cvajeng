// Komponen baris Riwayat Pendidikan (RowRiwayat)
function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-pink-200 p-4 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {/* Menambahkan kelas text-black untuk memastikan teks berwarna hitam */}
          <div className="col-span-12 md:col-span-4 text-black">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4 text-black">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4 text-black">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

// Komponen Riwayat Pendidikan
export default function Riwayatpendidikan() {
  return (
    <div className="container mx-auto p-4 text-center pt-20">
      <h2 className="text-3xl font-semibold text-black-800 mb-8">Riwayat Pendidikan</h2>

      {/* Menampilkan Riwayat Pendidikan menggunakan RowRiwayat */}
      <RowRiwayat jenjang="SD" sekolah="SDN 2 Malangnengah" tahun="2009-2015" />
      <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Cisarua" tahun="2015-2018" />
      <RowRiwayat jenjang="SMA" sekolah="SMKN 1 Sumedang" tahun="2018-2021" />
      <RowRiwayat jenjang="Universitas Ma'soem" sekolah="Prodi Komputerisasi Akuntansi" tahun="2022-Sekarang" />
    </div>
  );
}
