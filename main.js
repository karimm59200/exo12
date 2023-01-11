let population = 96809,  
    tauxAccroissement = 0.0089, 
    nbAnnee=0,
    message = "";

while (population <= 120000) {
  population = population * (1+tauxAccroissement);
  nbAnnee++;
  console.log(nbAnnee);
}

alert(message = `Il faut ${nbAnnee} pour que la ville de Tourcoing atteigne le nombre de 120000 habitants.`)



