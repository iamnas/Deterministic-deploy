const main = async () => {
    
  
    const Goat = await ethers.getContractFactory("GOAT");
    const goat = await Goat.deploy();
  
    await goat.deployed()
    console.log("goat deployed to:", goat.address);
  
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });