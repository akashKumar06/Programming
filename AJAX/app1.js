const data = `{"ticker":{"base":"BTC","target":"USD","price":"16746.74269844","volume":"5610.04214537","change":"-18.49732357"},"timestamp":1672232824,"success":true,"error":""}`

const parsedData = JSON.parse(data);

const dog ={
    breed:'lab',
    color:'black',
    isAlive:'true',
    owner:undefined
}

const JSONdata = JSON.stringify(dog);