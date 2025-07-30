export default async function BlogDetail({
    params,
}: {
    params: Promise<{ blogId: string}>;

}) {
    const blogId = (await params).blogId;
    return <h1>Details About Blog {blogId}</h1>;
}
