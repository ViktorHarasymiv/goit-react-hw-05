import React from "react";
import Popular from "../components/Popular/Popular";

export default function Home({ popular_data, loading }) {
  return (
    <main>
      <Popular data={popular_data} loading={loading}></Popular>
    </main>
  );
}
