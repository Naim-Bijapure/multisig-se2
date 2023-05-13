export default {
  5: [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        MultiSigFactory: {
          // address: "0x18F853596bd1910968481044405A09ce2C2f4699",
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],

  1: [
    {
      name: "mainnet",
      chainId: "1",
      contracts: {
        MultiSigFactory: {
          // address: "0x18F853596bd1910968481044405A09ce2C2f4699",
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        MultiSigFactory: {
          // address: "0x18F853596bd1910968481044405A09ce2C2f4699",
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "mumbai",
      chainId: "11155111",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  42161: [
    {
      name: "arbitrum",
      chainId: "42161",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  7700: [
    {
      name: "canto",
      chainId: "7700",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  137: [
    {
      name: "polygon",
      chainId: "137",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],

  100: [
    {
      name: "gnosis",
      chainId: "100",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],

  10: [
    {
      name: "optimism",
      chainId: "10",
      contracts: {
        MultiSigFactory: {
          address: "0x8b50c76eAf0Db1B7dE1f7bA456351E98cFd8bd9f",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xd754AA7e3e90870C188d732dA5EA574d3bb2163f",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],

  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        MultiSigFactory: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [],
              name: "CALLER_NOT_REGISTERED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "contractId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Create2Event",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "contractAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "owners",
                  type: "address[]",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "Owners",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "computedAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "create2",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contractAddress",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "emitOwners",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_index",
                  type: "uint256",
                },
              ],
              name: "getMultiSig",
              outputs: [
                {
                  internalType: "address",
                  name: "multiSigAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "signaturesRequired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "multiSigs",
              outputs: [
                {
                  internalType: "contract MultiSigWallet",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfMultiSigs",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        MultiSigWallet: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_factory",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "DUPLICATE_OR_UNORDERED_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INSUFFICIENT_VALID_SIGNATURES",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNATURES_REQUIRED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SIGNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ENOUGH_SIGNERS",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_FACTORY",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_OWNER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_SELF",
              type: "error",
            },
            {
              inputs: [],
              name: "TX_FAILED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              name: "ExecuteTransaction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "added",
                  type: "bool",
                },
              ],
              name: "Owner",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "addSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "chainId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "to",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "value",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes[]",
                  name: "data",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[][]",
                  name: "signatures",
                  type: "bytes[][]",
                },
              ],
              name: "executeBatch",
              outputs: [
                {
                  internalType: "bytes[]",
                  name: "",
                  type: "bytes[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "bytes[]",
                  name: "signatures",
                  type: "bytes[]",
                },
              ],
              name: "executeTransaction",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryVersion",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_nonce",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getTransactionHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_owners",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "_signaturesRequired",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isOwner",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfOwners",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "owners",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_signature",
                  type: "bytes",
                },
              ],
              name: "recover",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oldSigner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "removeSigner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "signaturesRequired",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newSignaturesRequired",
                  type: "uint256",
                },
              ],
              name: "updateSignaturesRequired",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;
