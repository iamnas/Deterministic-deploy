
How to Deploy a Contract to the Same Address on Multiple Networks

to get goerli arbitrum 
https://bridge.arbitrum.io/

goerli 
https://goerlifaucet.com/

goerli optimism 
send some goerli eth to this address after 10 min you will get eth in optimism
0x636Af16bf2f682dD3109e60102b8E1A089FedAa8

mumbai
https://mumbaifaucet.com/


to see your  accounbt balamce and NONCE  number 
npx hardhat account --address {YOUR_WALLET_ADDRESS}

To get same address on multiple networks we need equal NONCE number 

npx hardhat run scripts/GOATDeploy.js --network goerli
npx hardhat run scripts/GOATDeploy.js --network mumbai
npx hardhat run scripts/GOATDeploy.js --network arbitrum
npx hardhat run scripts/GOATDeploy.js --network optimism

https://goerli.etherscan.io/address/0x334e9d44E3a3bA28a2E48Cc6FDa6B9e7f2C813F6
https://mumbai.polygonscan.com/address/0x334e9d44E3a3bA28a2E48Cc6FDa6B9e7f2C813F6
https://goerli.arbiscan.io/address/0x334e9d44E3a3bA28a2E48Cc6FDa6B9e7f2C813F6 
https://goerli-optimism.etherscan.io/address/0x334e9d44E3a3bA28a2E48Cc6FDa6B9e7f2C813F6

using creat2 also we can deploy in that we dont need noice
https://docs.alchemy.com/docs/create2-an-alternative-to-deriving-contract-addresses