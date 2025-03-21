import MoviesInfo from "./MoviesInfo";
import Back from "../../components/Back/BackLink";

export default function Details() {
  return (
    <main>
      <section className="container">
        <Back>Go Back</Back>
        <MoviesInfo></MoviesInfo>
      </section>
    </main>
  );
}
