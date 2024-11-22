import React, { useEffect, useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { backend } from "../declarations/backend";
import axios from "axios";
import { stringToBase64 } from "uint8array-extras";

const Inscription: React.FC = () => {
  const [balance, setBalance] = useState<number | undefined>();
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [content, setContent] = useState<string>("Hello World");
  const [contentType, setContentType] = useState<number>(0);
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [currentBlockHeight, setCurrentBlockHeight] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [isInscribing, setIsInscribing] = useState(false);

  const btcRpcUrl = "http://localhost:8000/proxy";
  const rpcUser = "icp";
  const rpcPassword = "test";

  const btcRpcHeaders = {
    "Content-Type": "application/json",
    Authorization: "Basic " + stringToBase64(rpcUser + ":" + rpcPassword),
  };

  const inscriptionTypes = [
    { value: "text", label: "Text", contentType: "text/plain;charset=utf-8" },
    { value: "json", label: "JSON", contentType: "application/json;charset=utf-8" },
  ];

  async function callRPC(method: string, params: any) {
    const data = { jsonrpc: "1.0", id: "curltext", method, params };

    try {
      const response = await axios.post(btcRpcUrl, data, { headers: btcRpcHeaders });
      return response.data.result;
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }

  const getBlockHeight = async () => {
    const res = await callRPC("getblockcount", []);
    setCurrentBlockHeight(res);
  };

  const getWalletAddress = async () => {
    const res = await callRPC("getnewaddress", []);
    setWalletAddress(res);
  };

  const generateBlock = async () => {
    await callRPC("generatetoaddress", [1, walletAddress]);
    await getBlockHeight();
  };

  const topup = async () => {
    await callRPC("sendtoaddress", [address, 1]);
    await generateBlock();
    await getBalance();
  };

  const getAddress = async () => {
    setLoading(true);
    try {
      const newAddress = await backend.get_p2pkh_address();
      setAddress(newAddress);
    } finally {
      setLoading(false);
    }
  };

  const getBalance = async () => {
    setLoading(true);
    try {
      if (address) {
        const bigBalance = await backend.get_balance(address);
        setBalance(Number(bigBalance));
      }
    } finally {
      setLoading(false);
    }
  };

  const inscribe = async () => {
    const type = inscriptionTypes[contentType].contentType;
    setIsInscribing(true);
    try {
      await backend.inscribe(type, content, [], []);
      await generateBlock();
    } finally {
      setIsInscribing(false);
    }
  };

  useEffect(() => {
    async function init() {
      await getAddress();
      await getWalletAddress();
      await getBlockHeight();
      await getBalance();
    }
    init();
  }, []);

  return (
    <div className="card">
      <h1>Ordinal Inscription Testbed</h1>

      <div className="flex w-full flex-col gap-4">
        <Input label="Address" placeholder={address} isReadOnly />
        <Input label="Balance" placeholder={balance ? balance.toString() : "Loading..."} isReadOnly />
        <Button isDisabled={!address} isLoading={loading} onClick={getBalance}>
          Check Balance
        </Button>
        <Button isDisabled={!address} onClick={topup}>
          Topup
        </Button>

        <Input label="Current Block Height" placeholder={currentBlockHeight.toString()} isReadOnly />
        <Button onClick={generateBlock}>Generate Block</Button>

        <Input
          label="Recipient Address"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
        <Select
          items={inscriptionTypes}
          label="Content Type"
          defaultSelectedKeys={[inscriptionTypes[contentType].value]}
          onChange={(e) => {
            const index = inscriptionTypes.map((i) => i.value).indexOf(e.target.value as string);
            setContentType(index);
          }}
        >
          {(inscriptionType) => (
            <SelectItem key={inscriptionType.value}>{inscriptionType.label}</SelectItem>
          )}
        </Select>
        <Input
          label="Inscription Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button color="secondary" isLoading={isInscribing} onClick={inscribe}>
          Inscribe
        </Button>
      </div>
    </div>
  );
};

export default Inscription;
