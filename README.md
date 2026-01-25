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
<li>Create a <code>.env</code> file in the root directory and add the following environment variable:
    <ul>
      <li><code>NEXT_PUBLIC_TATUM_TESTNET_API_KEY</code></li>
      <h2>Where do you find the value?</h2>
      <li>Please create a free Tatum account on https://dashboard.tatum.io/signup</li>
      <li>In the left sidebar menu choose API Keys and find the TESTNET API KEY. Copy it and add it to the .env to NEXT_PUBLIC_TATUM_TESTNET_API_KEY</li>
      <img src="https://github.com/malocheck/tatum-task/blob/918b4eb895eb7ac5e62a059560cae324af4021d1/src/public/apikey_in_account.png"></img>
    </ul>

  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  
  <li>Start the development server:
    <pre><code>npm run dev</code></pre>
  </li>Open the browser and enter http://localhost:3000/ <li>
  </li>You can convert your BTC amount to CZK easily.<li>
   
  </li>
</ol>

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

## What Could Be Better?

<ul style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <li>
    Add an option to upload an xPub file to get the current status of the wallet balance and its value in CZK. 
    This would be a great feature to handle locally for enhanced functionality.
  </li>
</ul>

<footer style="text-align: center; font-size: 0.9rem; color: #666; margin-top: 2rem;">
  <p>&copy; 2026 BTC to CZK Converter. All rights reserved.</p>
</footer>
