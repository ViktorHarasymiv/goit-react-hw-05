import MoviesInfo from "./MoviesInfo";
import Back from "../../components/Back/BackLink";

export default function Details() {
  return (
    <main>
      <section className="section">
        <Back>Go Back</Back>
        <MoviesInfo></MoviesInfo>
      </section>
    </main>
  );
}
