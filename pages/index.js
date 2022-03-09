import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputText: inputText }),
    });
    const data = await response.json();
    setResult(data.result);
    setInputText("");
  }

  return (
    <div>
      <Head>
        <title>Grammar Corrector</title>
        <link rel="icon" href="/hat.png" />
      </Head>

      <main className={styles.main}>
        <img src="/hat.png" className={styles.icon} />
        <h3>Grammar Corrector</h3>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3991053540680389"
     crossorigin="anonymous"></script>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="inputText"
            placeholder="Enter sentence"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <input type="submit" value="Correct grammar" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
