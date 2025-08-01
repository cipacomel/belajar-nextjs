export default async function LaporanLaporanpenjualan({
  params,
}: {
  params: { laporanId: string, laporanpenjualanId: string }
}) {
  const { laporanId, laporanpenjualanId } = params;

  return (
    <h1>laporan tahun   {laporanId} {laporanpenjualanId}</h1>
  );
}
