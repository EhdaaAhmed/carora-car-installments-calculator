function calculate() {

    var carPrice = document.getElementById('carPrice').value
    var downPayment = document.getElementById('downPayment').value
    var years = document.getElementById('years').value

    if (carPrice == "" || downPayment == "" || years == "#") {

        document.getElementById('monthlyInstallment').innerText =
            'Kindly fill all the form fields'

        document.getElementById('monthlyInstallment').style.color = 'red'

        document.getElementById('interestRate').innerText = " "

    } else {

        var remainingValue =
            parseFloat(carPrice) - parseFloat(downPayment)

        var interestRate

        if (years == "1") {
            interestRate = 0.10
        } else if (years == "2") {
            interestRate = 0.19
        } else if (years == "3") {
            interestRate = 0.32
        } else if (years == "4") {
            interestRate = 0.45
        } else if (years == "5") {
            interestRate = 0.51
        } else if (years == "7") {
            interestRate = 0.79
        }

        var interestValue =
            remainingValue * interestRate

        var totalInstallments =
            remainingValue + interestValue

        var totalMonths =
            parseFloat(years) * 12

        var monthlyInstallment =
            totalInstallments / totalMonths

        document.getElementById('monthlyInstallment').innerText =
            'Monthly Installment: ' + monthlyInstallment

        document.getElementById('interestRate').innerText =
            'Interest Rate: ' + (interestRate * 100) + '%'

        document.getElementById('monthlyInstallment').style.color = 'green'
        document.getElementById('interestRate').style.color = 'green'
    }
}