import React from "react";
import Popular from "../components/Popular/Popular";

export default function Home({ popular_data, loader }) {
  return (
    <main>
      <Popular data={popular_data} loader={loader}></Popular>
    </main>
  );
}
