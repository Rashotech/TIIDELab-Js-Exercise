function bill_payment() {
    option = prompt (`Welcome to Rashotech Bill Payments\nSelect the Options below to transact\n1. Airtime - Self\n2. Airtime - Others\n3. Data\n4. Transfer`)
    if (option == 1) {
        amount = prompt("Enter Amount")
        if (confirm(`Are you sure you want to purchase #${amount} Airtime?`)) {
            alert(`Airtime of  #${amount} has been credited to your line`)
        } else {
                alert("Transaction Cancelled")
        }
    }
    else if (option == 2) {
        amount = prompt("Enter Amount")
        phonenumber = prompt("Enter 3rd party mobile number")
        network = prompt(`1. MTN\n
                        2. GLO\n
                        3. Airtel\n
                        4. 9Mobile`)
        if (confirm(`Are you sure you want to purchase #${amount} Airtime?`)) {
            alert(`Airtime of  #${amount} has been sent to ${phonenumber}`)
        } else {
                alert("Transaction Cancelled")
        }
    }
    else if (option == 3) {
        phonenumber = prompt("Enter Phone mobile number");
        datanet = prompt(`1. MTN\n
                        2. GLO\n
                        3. Airtel\n
                        4. 9Mobile`)
        if (datanet == 1) {
            mtn = prompt(`Select MTN Data:
            1. 100MB 1 day #100 \n
            2. 350mb 7 days #300 \n
            3. 750MB 14 days #500 \n
            4. 1.5GB 30 days #1000 \n
            5. 6GB 30 days #2500`)
            if (confirm(`Are you sure you want to purchase this data subscription?`)) {
                    alert (`Your data Subscription to ${phonenumber} is successful`)
            } else {
                    alert("Transaction Cancelled")
            }
        }
        else if (datanet == 2) {
            glo = prompt(`Select GLO Data:
            1. 105MB 1 day #100 \n
            2. 350mb 7 days #200 \n
            3. 1.05GB 14 days #500 \n
            4. 2.5GB 30 days #1000 \n
            5. 5.8GB 30 days #2000`)
            if (confirm(`Are you sure you want to purchase this data subscription?`)) {
                    alert (`Your data Subscription to ${phonenumber} is successful`)
            } else {
                    alert("Transaction Cancelled")
            }
        }
        else if (datanet == 3) {
            airtel = prompt(`Select Airtel Data:
            1. 200MB 3 days #200 \n
            2. 350mb 7 days #300 \n
            3. 750MB 14 days #500 \n
            4. 1.5GB 30 days #1000 \n
            5. 6GB 7 days #1500 \n
            6. 3GB 30 days #1500 \n
            7. 8GB 30 days #3000`)
            if (confirm(`Are you sure you want to purchase this data subscription?`)) {
                    alert (`Your data Subscription to ${phonenumber} is successful`)
            } else {
                    alert("Transaction Cancelled")
            }
        }
        else if (datanet == 4) {
            etimobile = prompt(`Select 9Mobile Data:
            1. 650MB 1 day #200 \n
            2. 500MB 30 days #500 \n
            3. 1.5GB 30 days #1000 \n
            4. 2GB 30 days #2000 \n
            5. 7GB 7 days #1500 \n
            6. 4.5GB 30 days #2000 \n
            7. 11GB 30 days #4000`)
            if (confirm(`Are you sure you want to purchase this data subscription?`)) {
                    alert (`Your data Subscription to ${phonenumber} is successful`)
            } else {
                    alert("Transaction Cancelled")
            }
        }
        else {
            alert("Invalid Input");
        }
    }
    else if (option == 4) {
        amount = prompt("Enter Amount")
        accountnumber = prompt("Enter Account Number")
        bank = prompt("Enter Bank Name")
        if (confirm(`Are you sure you want to transfer #${amount} to ${accountnumber}?`)) {
            alert(`Transfer of #${amount} has been sent to ${accountnumber} ${bank} successfully`)
        } else {
            alert("Transaction Cancelled")
        }
    }
    else {
        alert("Invalid Input");
    }
}
