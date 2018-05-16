const regra1 = [ips,porta,protocolo] = ['192.168.56.1','500','tcp']

const liberados = []
const bloqueados = []
for(let i in regra1){
    if(regra1[i] == ips){
        liberados.push(regra1[i])
    }else if(regra1[i] == porta){
        liberados.push(regra1[i])
    }else if(regra1[i] == protocolo){
        liberados.push(regra1[i])
    }else{
       bloqueados.push(regra1[i])
    }
}

console.log(liberados)
console.log(bloqueados)
