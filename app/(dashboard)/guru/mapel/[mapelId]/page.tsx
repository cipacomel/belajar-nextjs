export default async function MapelDetail({
    params,
}: {
    params: Promise<{ mapelId: string}>;

}) {
    const mapelId = (await params).mapelId;
    return <h1> guru mapel {mapelId}</h1>;
}
