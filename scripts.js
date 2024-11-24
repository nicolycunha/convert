const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// manipulate input to receive only number
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})

//manipulate submit event on form
form.onsubmit = event => {
    event.preventDefault()
    console.log(currency.value)

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
    }
}

//function to convert currency
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if (isNaN(total)) {
            return alert(
                'Por favor, digite o valor corretamente para converter.'
            )
        }

        total = formatCurrencyBRL(total).replace('R$', '')
        result.textContent = `${total} Reais`

        footer.classList.add('show-result')
    } catch (error) {
        console.log(error)
        footer.classList.remove('show-result')
        alert('Não foi possível converter. Tente novamente mais tarde.')
    }
}

//format currency to real brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}
