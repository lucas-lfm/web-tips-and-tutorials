const conta = {
    saldo: 300.0,
    numeroConta: "42598-x",
    informarSaldo: function () {
        console.log(this);
        return `Seu saldo é R$ ${this.saldo.toFixed(2)}`;
    }
}

const contaArrow = {
    saldo: 300.0,
    numeroConta: "42598-x",
    informarSaldo: () => {
        console.log(this);
        return `Seu saldo é R$ ${this.saldo.toFixed(2)}`;
    }
}

console.log(conta.informarSaldo());
console.log(contaArrow.informarSaldo());