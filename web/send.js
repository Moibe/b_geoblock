async function send(){

    console.log("Hola mundo");
    const options = {
        type:"native", 
        receiver: "0xc91f78D1575D35747bC2714f2Ef75a9a280c58a3", 
        amount:Moralis.Units.ETH("0.001")};
    console.log(options);

    try {
        let results = await  Moralis.transfer(options)
        //alert("Pago completado, gracias.");
        location.replace("/index.html")
        console.log(results);
      } catch (error) {
        console.log("Error");
        console.error(error);
        
      }
 

    
    
   
};
 
document.getElementById("submit_send").onclick = send;