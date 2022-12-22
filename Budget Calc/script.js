let otherPrice = 0;

function add() {
    if (expenseName.value == 0) {
        alert('Please describe the expens.!')
    }
    else {

        var ename = expenseName.value;
        var price = parseInt(Price.value);
        console.log(price);

        var other = {
            ename,
            price
        }


        localStorage.setItem(ename, JSON.stringify(other));
      

        other = JSON.parse(localStorage.getItem(ename));


        htmlData = '';

        htmlData = ` <tr>
    <td >${other.ename}</td>
    <td >${other.price}</td>
    </tr>`

        result2.innerHTML += htmlData;

        otherPrice = eval(otherPrice + other.price);
        console.log(otherPrice);

        //clearing textbox
        expenseName.value = '';
        Price.value = '';

    }

}


function budgetCalc() {
    if (mIncome.value == 0) {
        alert('Please enter your monthly income.!')
    }
    else {

        balance = eval(mIncome.value - rent.value - food.value - electric.value - insurance.value - otherPrice);
        expense = eval(mIncome.value - balance);
        console.log(expense);
        console.log(balance);
        result.innerHTML = ``;
        result.innerHTML = ` <p class=" text-success fs-5 ">Hi, <br> After your expenses you have <br> <span class=" text-danger" >${balance} Rs</span> left in your budget.<br> <br> Your Total expense: <span class=" text-danger" >${expense} Rs </span></p> <br>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Click Here for the breakdown!
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <table class="container text-black  border-secondary">
            <thead">
            <tr>
                <th>Expense Name</th>
                <th>Expense (Rs)</th>
            </tr>
            </thead>
            <tbody id="result2">
            <tr>
                <td>Room rent: </td>
                <td>${rent.value}</td>
            </tr>
            <tr>
                <td>Electricity Bill: </td>
                <td>${electric.value}</td>
            </tr>
            <tr>
                <td>Food: </td>
                <td>${food.value}</td>
            </tr>
            <tr>
                <td>Insurance: </td>
                <td>${insurance.value}</td>
            </tr>
            <tr>
                <td>Others:</td>
                <td>${otherPrice}</td>
            </tr>
            </tbody>
        
        </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    ` ;




    }




}
