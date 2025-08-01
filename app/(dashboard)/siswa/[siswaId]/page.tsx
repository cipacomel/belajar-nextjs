export default async function SiswaDetail({
    params,
}: {
    params: Promise<{ siswaId: string}>;

}) {
    const siswaId = (await params).siswaId;
    return <h1>Details Id Siswa {siswaId}</h1>;
}
