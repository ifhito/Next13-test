import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ cityId: "400040" });
  const health = trpc.healthcheck.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      <p>{health.data}</p>
    </div>
  );
}
