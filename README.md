<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BTC to CZK Converter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
    }
    header {
      background-color: #4caf50;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }
    main {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h1, h2 {
      color: #4caf50;
    }
    ul, ol {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
    pre {
      background: #f4f4f4;
      padding: 0.5rem;
      border-radius: 4px;
      overflow-x: auto;
    }
    code {
      font-family: monospace;
      color: #d63384;
    }
    footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>BTC to CZK Converter</h1>
  </header>
  <main>
    <h2>What is this tool about?</h2>
    <p>
      A lightweight and user-friendly tool for converting Bitcoin (BTC) to Czech Koruna (CZK) with real-time exchange rates. 
      This tool allows you to quickly check the current value of your Bitcoin holdings in CZK or calculate the value of a specific BTC amount.
    </p>

    <h2>Why BTC to CZK Converter?</h2>
    <p>
      Sometimes you may want to quickly check the current balance of your Bitcoin in CZK without manually calculating it repeatedly.
      This tool simplifies the process and provides accurate results instantly. Whether you're tracking your portfolio or calculating a specific amount, this tool has you covered.
    </p>

    <h2>How to Run This Locally</h2>
    <ol>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Create a <code>.env</code> file in the root directory and add the following environment variables:
        <ul>
          <li><code>NEXT_PUBLIC_TATUM_TESTNET_API_KEY</code>: Your API key from Tatum (you can get this from your free Tatum account).</li>
          <li><code>NEXT_PUBLIC_API_BASE_URL</code>: The base URL for the API.</li>
        </ul>
      </li>
      <li>Start the development server:
        <pre><code>npm run dev</code></pre>
      </li>
    </ol>

    <h2>What Could Be Better?</h2>
    <ul>
      <li>
        Add an option to upload an xPub file to get the current status of the wallet balance and its value in CZK.
        This would be a great feature to handle locally for enhanced functionality.
      </li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>Tatum API</li>
      <li>ShadCN UI Components</li>
    </ul>

    <h2>License</h2>
    <p>This project is open-source and available under the <strong>MIT License</strong>.</p>

  </main>
  <footer>
    <p>&copy; 2026 BTC to CZK Converter. All rights reserved.</p>
  </footer>
</body>
</html>
