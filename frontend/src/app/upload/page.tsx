export default function Upload() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h2>Upload Customer Dataset (CSV)</h2>
      <input type="file" accept=".csv" />
    </main>
  );
}
