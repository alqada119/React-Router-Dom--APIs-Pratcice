import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiKey = "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";

const UseOpenaiFetchAPI = (prompt) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Calling GPT3");
    const url = "https://api.openai.com/v1/engines/davinci/completions";
    const bearer = 'Bearer ' + apiKey;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 10,
        temperature: 0.8,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        stop: "\n",
      }),
    })
      .then((response) => response.json())
      .then((data) => data.choices)
      .then(datas=>datas[0])
      .then(final=>final.text)
      .then(answer=>console.log(answer))
        
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [prompt]);

  return { result, loading, error };
};

export function API() {
  const { result, loading, error } = UseOpenaiFetchAPI("What is the capital of Egypt?");
  console.log(result)
  if (loading) {
    return <div>Loading...<hr /><Link to="/another">Press To get back</Link></div>;

  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>OpenAI</h1>
      <h2>{result}</h2>
      <hr />
      <Link to="/another">Press To get back</Link>
    </div>
  );
}
