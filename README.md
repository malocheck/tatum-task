# BTC to CZK Converter

## What is this tool about?

<p style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
A lightweight and user-friendly tool for converting Bitcoin (BTC) to Czech Koruna (CZK) with real-time exchange rates. 
This tool allows you to quickly check the current value of your Bitcoin holdings in CZK or calculate the value of a specific BTC amount.
</p>

## Why BTC to CZK Converter?

<p style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
Sometimes you may want to quickly check the current balance of your Bitcoin in CZK without manually calculating it repeatedly. 
This tool simplifies the process and provides accurate results instantly. Whether you're tracking your portfolio or calculating a specific amount, this tool has you covered.
</p>

## How to Run This Locally

<ol style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
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

## What Could Be Better?

<ul style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <li>
    Add an option to upload an xPub file to get the current status of the wallet balance and its value in CZK. 
    This would be a great feature to handle locally for enhanced functionality.
  </li>
</ul>

## Technologies Used

<ul style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <li>Next.js</li>
  <li>TypeScript</li>
  <li>Tatum API</li>
  <li>ShadCN UI Components</li>
</ul>

## License

<p style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
This project is open-source and available under the <strong>MIT License</strong>.
</p>

<footer style="text-align: center; font-size: 0.9rem; color: #666; margin-top: 2rem;">
  <p>&copy; 2026 BTC to CZK Converter. All rights reserved.</p>
</footer>
