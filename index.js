// Write your solution in this file!
window.customerName = `bob`;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

// function  upperCaseCustomerName(){
//     window.customerName = window.customerName.toupperCase() ;
// }

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer){
    window.bestCustomer = newBestCustomer;
}

// const leastFavoriteCustomer='initial value';

// function changedLeastFavoriteCustomer(){
//    leastFavoriteCustomer  = 'new value'; // This will throw an error because leastFavoriteCustomer is a constant
//    // }
// }
const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';// This will throw an error because leastFavoriteCustomer is a constant
}