const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        BlackjackDemo: {
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
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "claimableAmount",
                  type: "uint256",
                },
              ],
              name: "Claim",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8[]",
                  name: "firstDealerCard",
                  type: "uint8[]",
                },
                {
                  indexed: false,
                  internalType: "uint8[2][]",
                  name: "playerHand",
                  type: "uint8[2][]",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "playerScore",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "gameStatus",
                  type: "string",
                },
              ],
              name: "Hit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8[]",
                  name: "firstDealerCard",
                  type: "uint8[]",
                },
                {
                  indexed: false,
                  internalType: "uint8[2][]",
                  name: "playerHand",
                  type: "uint8[2][]",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "playerScore",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "gameStatus",
                  type: "string",
                },
              ],
              name: "Play",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "seed",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "isValid",
                  type: "bool",
                },
              ],
              name: "SeedVerified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8[2][]",
                  name: "playerHand",
                  type: "uint8[2][]",
                },
                {
                  indexed: false,
                  internalType: "uint8[2][]",
                  name: "dealerHand",
                  type: "uint8[2][]",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "claimableAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "dealerScore",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "playerScore",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "gameStatus",
                  type: "string",
                },
              ],
              name: "Stand",
              type: "event",
            },
            {
              inputs: [],
              name: "claim",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "gameIdByPlayer",
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
              name: "gamesByPlayer",
              outputs: [
                {
                  internalType: "uint256",
                  name: "gameId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "betAmount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "gameStatus",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "claimableAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "dealerScore",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "playerScore",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "turnCounter",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "providerRandomNumber",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "generatedSeed",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isSeedValid",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getBetLimits",
              outputs: [
                {
                  internalType: "uint256[2]",
                  name: "",
                  type: "uint256[2]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "playerAddress",
                  type: "address",
                },
              ],
              name: "getGameIdByAddress",
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
                  name: "player",
                  type: "address",
                },
              ],
              name: "getVerificationStatus",
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
              name: "hit",
              outputs: [],
              stateMutability: "nonpayable",
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
              inputs: [
                {
                  internalType: "uint256",
                  name: "playerRandomNumber",
                  type: "uint256",
                },
              ],
              name: "play",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newMaxBet",
                  type: "uint256",
                },
              ],
              name: "setMaxBet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "newMinBet",
                  type: "uint256",
                },
              ],
              name: "setMinBet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "stand",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
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

export default contracts;
